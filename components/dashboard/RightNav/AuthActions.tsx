import AuthAvatar from '@/components/authRelated/AuthAvatar'
import LogoutBtn from '@/components/authRelated/LogoutBtn'
import React from 'react'

const AuthActions = ({ user }: { user: User }) => {
    return (
        <div className=' w-full p-10 box-border'>
            <AuthAvatar fullName={`${user?.name}`} imageUrl={`${user?.picture}`} />
            <LogoutBtn />
        </div>
    )
}

export default AuthActions