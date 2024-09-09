import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const AuthAvatar = ({ imageUrl, fullName }: AuthAvatar) => {
    return (
        <div>
            <Avatar className=' w-16 h-16 ml-auto mr-auto'>
                <AvatarImage src={imageUrl} />
                <AvatarFallback>{fullName.slice(0, 1)}</AvatarFallback>
            </Avatar>

        </div>
    )
}

export default AuthAvatar