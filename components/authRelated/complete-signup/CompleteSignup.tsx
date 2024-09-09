"use client"

import React, { useState } from 'react'
import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'

const CompleteSignup = ({ user }: { user: User }) => {

    const [currentStep, setCurrentStep] = useState(1)

    return (
        <div className=' flex items-center justify-center w-full h-screen'>
            <div className=' w-full'>
                <h1 className=' text-4xl text-center font-mono'>Complete your signup</h1>
                <div className=' md:w-4/6 w-4/5 overflow-hidden flex items-center justify-start ml-auto mr-auto h-80 rounded-3xl mt-8'>

                    <Step1 setCurrentStep={setCurrentStep} currentStep={currentStep} user={user} />
                    <Step2 setCurrentStep={setCurrentStep} currentStep={currentStep} user={user} />
                    <Step3 setCurrentStep={setCurrentStep} currentStep={currentStep} user={user} />

                </div>
            </div>
        </div>
    )
}

export default CompleteSignup