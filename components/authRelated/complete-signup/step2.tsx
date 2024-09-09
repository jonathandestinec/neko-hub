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

const Step2: React.FC<ChildProps> = ({ setCurrentStep, currentStep, user }) => {

    const [userName, setUserName] = useState('')
    const [incomplete, setIncomplete] = useState(true)
    const [userNameAvailable, setUserNameAvailable] = useState(false)

    const handleSetIncomplete = (value: string) => {
        if (value === "") {
            setIncomplete(true);
            setUserNameAvailable(false)
        } else {
            setIncomplete(false);
        }
    }

    return (
        <div className={cn('h-full transition-all duration-300 ease-in-out overflow-hidden', {
            ' w-0': currentStep !== 2,
            'w-full': currentStep === 2
        })}>

            <div className=' md:w-1/2 w-full h-max ml-auto mr-auto'>
                <h1 className=' text-center w-full mt-5 font-mono text-nowrap'>Input your
                    <span className=' text-lime-300 pl-3'>@username</span>
                </h1>

                <div className='w-4/5 ml-auto mr-auto mt-5 min-w-max'>
                    <Input type='text' placeholder='Your tag?' className={cn(' w-full border-0 ring-1 focus-visible:ring-2 focus-visible:ring-lime-300 text-base font-mono', {
                        'ring-white': incomplete,
                        "ring-lime-300": !incomplete,
                        'text-red-500 ring-red-500': !userNameAvailable
                    })} onChange={(e) => {
                        const value = e.target.value
                        setUserName(value)
                        handleSetIncomplete(value)
                    }} />

                    <p className={cn("text-left text-lime-300 mt-2", {
                        "text-red-600": !userNameAvailable
                    })}>{
                            userNameAvailable ? "Username is available" : "Username unavailable"
                        }</p>
                </div>

                <ControlBtns setCurrentStep={setCurrentStep} userName={userName} proceedable={incomplete} currentStep={currentStep} user={user} setUserNameAvailable={setUserNameAvailable} />

            </div>

        </div>
    )
}

export default Step2