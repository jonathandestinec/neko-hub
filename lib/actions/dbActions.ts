
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createPost({ title, content, image, authorId, type }: CreatePost) {
    if (title && content && image && authorId && type) {
        try {
            const newPost = await prisma.post.create({
                data: {
                    title: title,
                    content: content,
                    image: image,
                    authorId: authorId,
                    type: type
                }
            })

            return ({
                newPost,
                status: "Success"
            })
        } catch (error) {
            return ({
                newPost: null,
                status: "Incomplete"
            })
        }
    } else {
        return {
            newPost: null,
            status: "Incomplete Params"
        }
    }
}

export async function getUser({ email, id, userName }: GetUser) {
    if (email && !id && !userName) {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email: email
                }
            })

            return {
                user,
                status: "Success"
            }

        } catch (error) {
            return {
                user: null,
                status: "Success"
            }
        }
    }

    else if (id && !userName && !email) {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    id: id
                }
            })

            return {
                user,
                status: "Success"
            }

        } catch (error) {
            return {
                user: null,
                status: "Success"
            }
        }
    } else {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    id: id
                }
            })

            return {
                user,
                status: "Success"
            }

        } catch (error) {
            return {
                user: null,
                status: "Success"
            }
        }
    }
}

export async function createUser({ email, displayName, userName, profilePhoto, bio }: CreateUser) {
    if (email && userName && displayName && userName && profilePhoto) {

        try {
            const newUser = await prisma.user.create({
                data: {
                    email: email,
                    displayName: displayName,
                    userName: userName,
                    profilePhoto: profilePhoto,
                    bio: bio
                }
            })

            return ({
                newUser,
                status: "Success"
            })

        } catch (error) {
            return ({
                newUser: null,
                status: "Incomplete"
            })
        }

    } else {
        return {
            newUser: null,
            status: "Incomplete Params"
        }
    }
}