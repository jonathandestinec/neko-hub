declare type User = {
    given_name: string,
    nickname: string,
    name: string,
    picture: string,
    updated_at: string,
    email: string,
    email_verified: boolean,
    sub: string,
    sid: string
} | undefined | null

declare type AuthAvatar = {
    imageUrl: string, fullName: string
}

declare type CreateUser = {
    email: string,
    displayName: string,
    userName: string,
    profilePhoto: string,
    bio: string
}

declare type CreatePost = {
    title: string,
    content: string,
    image: string,
    authorId: string,
    type: "post", "poll"
}

declare type GetUser = {
    email?: string,
    id?: string,
    userName?: string
}