"use server";

import { currentUser } from "@clerk/nextjs";
import prisma from "@/lib/prisma";
import { formSchema, formSchemaType } from "@/schemas/form";

class UserNotFoundErr extends Error {}

export async function GetFormStats() {
    const user = await currentUser();

    if (!user) {
        throw new UserNotFoundErr();
    }

    const stats = await prisma.form.aggregate({
        where: {
            userId: user.id,
        },
        _sum: {
            visits: true,
            submissions: true
        }
    })

    const visits = stats._sum.visits || 0;
    const submissions = stats._sum.submissions || 0;

    let submissionRate = 0;

    if (visits > 0) {
        submissionRate = (submissions / visits) * 100;

    }
    const bounceRate = 100 - submissions;

    return {visits, submissions, submissionRate, bounceRate}
}

export async function CreateForm(data: formSchemaType){
    const validation = formSchema.safeParse(data);
    if(!validation.success){
        throw new Error("Validation failed")
    }
    
    const user = await currentUser();
    if(!user){
        throw new UserNotFoundErr();
    }

    const {name, description} = data;

    const form = await prisma.form.create({
        data: {
            userId: user.id,
            name: data.name,
            description: data.description,
        }
    })

    if(!form){
        throw new Error("Form creation failed")
    }

    return form.id
}