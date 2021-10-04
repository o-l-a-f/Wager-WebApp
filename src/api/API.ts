export interface Bet {
    completed: boolean,
    createDate: string,
    description: string,
    id: string,
    maker: string,
    odds: string,
    taker: string,
    title: string,
    value: number
}

export type CreateBetInput = {
    completed: boolean,
    createDate: string,
    description: string,
    id: string,
    maker: string,
    odds: string,
    taker: string,
    title: string,
    value: number
};

export type ModelBetConditionInput = {
    name?: ModelStringInput | null,
    description?: ModelStringInput | null,
    and?: Array< ModelBetConditionInput | null > | null,
    or?: Array< ModelBetConditionInput | null > | null,
    not?: ModelBetConditionInput | null,
};

export type ModelStringInput = {
    ne?: string | null,
    eq?: string | null,
    le?: string | null,
    lt?: string | null,
    ge?: string | null,
    gt?: string | null,
    contains?: string | null,
    notContains?: string | null,
    between?: Array< string | null > | null,
    beginsWith?: string | null,
    attributeExists?: boolean | null,
    attributeType?: ModelAttributeTypes | null,
    size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
    binary = "binary",
    binarySet = "binarySet",
    bool = "bool",
    list = "list",
    map = "map",
    number = "number",
    numberSet = "numberSet",
    string = "string",
    stringSet = "stringSet",
    _null = "_null",
}


export type ModelSizeInput = {
    ne?: number | null,
    eq?: number | null,
    le?: number | null,
    lt?: number | null,
    ge?: number | null,
    gt?: number | null,
    between?: Array< number | null > | null,
};

export type UpdateBetInput = {
    completed?: boolean,
    createDate?: string,
    description?: string,
    id: string,
    maker?: string,
    odds?: string,
    taker?: string,
    title?: string,
    value?: number
};

export type DeleteBetInput = {
    id: string
};

export type ModelBetFilterInput = {
    id?: ModelIDInput | null,
    name?: ModelStringInput | null,
    description?: ModelStringInput | null,
    and?: Array< ModelBetFilterInput | null > | null,
    or?: Array< ModelBetFilterInput | null > | null,
    not?: ModelBetFilterInput | null,
};

export type ModelIDInput = {
    ne?: string | null,
    eq?: string | null,
    le?: string | null,
    lt?: string | null,
    ge?: string | null,
    gt?: string | null,
    contains?: string | null,
    notContains?: string | null,
    between?: Array< string | null > | null,
    beginsWith?: string | null,
    attributeExists?: boolean | null,
    attributeType?: ModelAttributeTypes | null,
    size?: ModelSizeInput | null,
};

export type CreateBetMutationVariables = {
    input: CreateBetInput,
    condition?: ModelBetConditionInput | null,
};

export type CreateBetResponse = {
    createBet:  {
        __typename: "Bet",
        completed: boolean,
        createDate: string,
        description: string,
        id: string,
        maker: string,
        odds: string,
        taker: string,
        title: string,
        value: number
    } | null
};

export type UpdateBetMutationVariables = {
    input: UpdateBetInput,
    condition?: ModelBetConditionInput | null,
};

export type UpdateBetResponse = {
    updateBet:  {
        __typename: "Bet",
        completed: boolean,
        createDate: string,
        description: string,
        id: string,
        maker: string,
        odds: string,
        taker: string,
        title: string,
        value: number
    } | null
};

export type DeleteBetMutationVariables = {
    input: DeleteBetInput,
    condition?: ModelBetConditionInput | null,
};

export type DeleteBetResponse = {
    deleteBet:  {
        __typename: "Bet",
        completed: boolean,
        createDate: string,
        description: string,
        id: string,
        maker: string,
        odds: string,
        taker: string,
        title: string,
        value: number
    } | null,
};

export type GetBetQueryVariables = {
    id: string,
};

export type GetBetResponse = {
    getBet:  {
        __typename: "Bet",
        completed: boolean,
        createDate: string,
        description: string,
        id: string,
        maker: string,
        odds: string,
        taker: string,
        title: string,
        value: number
    } | null,
};

export type ListBetsQueryVariables = {
    filter?: ModelBetFilterInput | null,
    limit?: number | null,
    nextToken?: string | null,
};

export type ListBetsResponse = {
    listBets: Array<  {
        __typename: "Bet",
        completed: boolean,
        createDate: string,
        description: string,
        id: string,
        maker: string,
        odds: string,
        taker: string,
        title: string,
        value: number
    } | null > | null
};

export type OnCreateTodoSubscription = {
    onCreateTodo:  {
        __typename: "Todo",
        completed: boolean,
        createDate: string,
        description: string,
        id: string,
        maker: string,
        odds: string,
        taker: string,
        title: string,
        value: number
    } | null,
};

export type OnUpdateBetSubscription = {
    onUpdateTodo:  {
        __typename: "Bet",
        completed: boolean,
        createDate: string,
        description: string,
        id: string,
        maker: string,
        odds: string,
        taker: string,
        title: string,
        value: number
    } | null,
};

export type OnDeleteBetSubscription = {
    onDeleteTodo:  {
        __typename: "Bet",
        completed: boolean,
        createDate: string,
        description: string,
        id: string,
        maker: string,
        odds: string,
        taker: string,
        title: string,
        value: number
    } | null,
};
