import React from 'react'
import LoginBtn from './LoginBtn'

const NotAuthenticated = () => {
    return (
        <div className=' flex items-center justify-center w-full h-screen'>
            <div>
                <h1 className=' text-5xl text-center'>
                    Oops ;(
                </h1>
                <p className=' text-center mt-10 font-mono'>
                    You gotta login bruh
                </p>

                <LoginBtn />
            </div>
        </div>
    )
}

export default NotAuthenticated