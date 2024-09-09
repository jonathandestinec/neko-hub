import React from 'react'
import DesktopLeftNav from './DesktopLeftNav'
import DesktopRightNav from './DesktopRightNav'
import Feeds from './feeds/Feeds'

const DesktopDashboard = ({ user }: { user: User }) => {
    return (
        <div className=' md:block hidden'>

            <div className=' flex
             justify-between w-full h-screen overflow-y-hidden'>

                <DesktopLeftNav user={user} />
                <Feeds user={user} />
                <DesktopRightNav user={user} />

            </div>

        </div>
    )
}

export default DesktopDashboard