export  interface cardsData  {
    id:number,
    head: string,
    title:string,
    body: string,
    backImage: string,
    link: string,
}
export interface image {
    intro_img: string
}

export interface cardsProp {
    cards: cardsData
}