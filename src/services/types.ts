export type GetCardsParams = {
    deckId: string
    currentPage?: number
    itemsPerPage?: number
    pageSize?: number
    orderBy?: string | null
}

export type Card = {
    id: string
    deckId: string
    userId: string
    player: string
    club: string
    country: string
    age: number
    likes: number
    created: string
    updated: string
}

export type CreateCardInput = Pick<Card, 'player' | 'country' | 'deckId'>
export type DeleteCardInput = { cardId: Card['id'] }