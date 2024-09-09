import React from 'react'
import Post from './Post'

const Feeds = ({ user }: { user: User }) => {
    return (
        <div className=' w-3/5 overflow-scroll'>
            <Post user={user} />
        </div>
    )
}

export default Feeds