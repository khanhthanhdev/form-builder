"use client"

import React from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "./ui/dialog"

import {BsFileEarmarkPlus} from "react-icons/bs"
import {ImSpinner2} from "react-icons/im"
import { Button } from './ui/button'
import { Label } from './ui/label'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "./ui/form"


const CreateFormBtn = () => {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button>Create new form</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Create Form
                </DialogTitle>
                <DialogDescription>
                    Create a new form to start collecting response
                </DialogDescription>
            </DialogHeader>

        </DialogContent>
        
    </Dialog>)
}

export default CreateFormBtn