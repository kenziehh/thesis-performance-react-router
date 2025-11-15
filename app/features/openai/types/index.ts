export interface News {
    src: string
    title: string
    category: string
    date: string
}

export interface Story {
    src: string
    title: string
    category: string
    date: string
    size: "9 / 16" | "16 / 9" | "1 / 1"
    minuteRead: number
}


export interface Research{
    title: string
    category: string
    date: string
    src: string
}

export interface Business{
    title: string
    category: string
    src: string
}

export interface Featured{
    src: string
    title: string
    description: string
    date?: string
    category: string
    minuteRead: number
}