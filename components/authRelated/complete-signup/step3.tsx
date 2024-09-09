"use client"

import React, { useState } from 'react'
import ControlBtns from './ControlBtns';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

interface ChildProps {
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    currentStep: number;
    user: User
}

const Step3: React.FC<ChildProps> = ({ setCurrentStep, currentStep, user }) => {

    const [bio, setBio] = useState("")

    const [incomplete, setIncomplete] = useState(true)

    const handleSetIncomplete = (value: string) => {
        if (value === "") {
            setIncomplete(true);
        }
        else {
            setIncomplete(false);
        }
    }

    return (
        <div className={cn(' h-full transition-all duration-300 ease-in-out overflow-hidden', {
            'w-full': currentStep === 3,
            ' w-0': currentStep != 3
        })}>
            <div className=' md:w-1/2 w-full h-max ml-auto mr-auto'>
                <h1 className=' text-center w-full mt-5 font-mono text-nowrap'>Whats intresting about you?
                    <span className=' text-lime-300 pl-2'> <br className=' md:hidden block' />Biography</span>
                </h1>

                <Input type='text' placeholder='Your bio?' className={cn(' w-4/5 ml-auto mr-auto mt-5 border-0 ring-1 focus-visible:ring-2 focus-visible:ring-lime-300 text-base font-mono', {
                    'ring-white': incomplete,
                    "ring-lime-300": !incomplete
                })} onChange={(e) => {
                    const value = e.target.value
                    setBio(value)
                    handleSetIncomplete(value)
                }} />

                <ControlBtns setCurrentStep={setCurrentStep} bio={bio} proceedable={incomplete} currentStep={currentStep} user={user} />

            </div>
        </div>
    )
}

export default Step3