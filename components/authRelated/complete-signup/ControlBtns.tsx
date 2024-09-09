import { createUser, getUser } from '@/lib/actions/dbActions';
import { redirect } from 'next/navigation';
import React from 'react'
interface ChildProps {
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    fullName?: string;
    userName?: string;
    bio?: string;
    proceedable: boolean;
    currentStep: number;
    user: User;
    setUserNameAvailable?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ControlBtns: React.FC<ChildProps> = ({ setCurrentStep, fullName, userName, bio, proceedable, currentStep, user, setUserNameAvailable }) => {

    const handlePrevious = () => {
        setCurrentStep((prevStep) => (prevStep === 1 ? 1 : prevStep - 1));
    }

    const handleNext = async () => {
        setCurrentStep((prevStep) => (prevStep === 3 ? 3 : prevStep + 1));

        console.log(fullName, userName, bio)

        // Check if process is finished

        if (currentStep === 3 && fullName && userName && bio && user) {

            console.log("Process finished")

            // Save user to DB
            const newUser = await createUser({
                email: user?.email,
                displayName: fullName,
                userName: userName,
                profilePhoto: user.picture[0],
                bio: bio
            })

            console.log(newUser)

            redirect("/")
        }

        if (currentStep === 2 && setUserNameAvailable) {
            // Check Username availability
            const user_ = await getUser({ userName: userName })

            if (user_.user) {
                setUserNameAvailable(false)
                setCurrentStep(2)
            } else {
                setUserNameAvailable(true)
            }
        }
    }

    return (
        <div className=' w-full flex items-center justify-center gap-10 h-10'>

            <button className="px-4 py-2 rounded-xl border border-neutral-600 text-black bg-gradient-to-r from-white to-lime-200 hover:bg-gray-100 transition duration-200 font-mono mt-10" onClick={handlePrevious}>
                Prev
            </button>

            <button className="px-4 py-2 rounded-xl border border-neutral-600 text-black bg-gradient-to-r from-lime-500 to-lime-200 hover:bg-gray-100 transition duration-200 font-mono mt-10" onClick={handleNext} disabled={proceedable}>
                Next
            </button>

        </div>
    )
}

export default ControlBtns