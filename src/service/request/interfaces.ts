export interface PostBook{
    title: string,
    content: string,
    progress: number,
    user: number 
}

export interface DeleteBook{
    id: number
}

export interface GetBook{
    id: number
}