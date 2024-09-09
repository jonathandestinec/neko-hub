import React from 'react'

const LoginBtn = () => {
    return (
        <div className=' w-max ml-auto mr-auto'>

            <a href="/api/auth/login">
                <button className="px-4 py-2 rounded-xl border border-neutral-600 text-black bg-gradient-to-r from-lime-500 to-lime-200 hover:bg-gray-100 transition duration-200 font-mono mt-10">
                    Login with Google
                </button>
            </a>

        </div>
    )
}

export default LoginBtn