import React from 'react'
import AuthActions from './RightNav/AuthActions'

const DesktopRightNav = ({ user }: { user: User }) => {
    return (
        <div className=' h-screen w-1/4 ring-1 ring-lime-300/30 p-5 box-border pt-0'>
            <AuthActions user={user} />
        </div>
    )
}

export default DesktopRightNav