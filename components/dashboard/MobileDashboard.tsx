import React from 'react'

const MobileDashboard = ({ user }: { user: User }) => {
    return (
        <div className=' md:hidden block'>
            Welcomet to the Mobile version of the app {user?.name}
        </div>
    )
}

export default MobileDashboard