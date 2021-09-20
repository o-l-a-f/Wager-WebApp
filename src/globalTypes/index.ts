export interface Transaction {
    createTime: string,
    completed: boolean,
    description: string,
    id: string;
    maker: User,
    odds: string,
    taker: User,
    title: string,
    value: number;
}

export interface User {
    id: string,
    firstName: string,
    lastName: string,
    initials: string,
    joined: string
}