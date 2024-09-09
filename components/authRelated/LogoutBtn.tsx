import React from 'react'

const LogoutBtn = () => {
    return (
        <div>
            <div className=' w-max ml-auto mr-auto mt-5'>

                <a href="/api/auth/logout" className=' '>
                    <button className="px-4 py-2 rounded-xl border border-neutral-600 text-black bg-gradient-to-r from-lime-500 to-lime-200 hover:bg-gray-100 transition duration-200 font-mono">
                        Logout
                    </button>
                </a>

            </div>
        </div>
    )
}

export default LogoutBtn