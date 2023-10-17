export type Shoe = {
    thumbnail: string,
    bigShoe: string
}

export interface Link {
    href: string,
    name: string
}

export type NavLink = {
    label: string
} & Omit<Link, 'name'>

export type FooterLink = {
    title: string,
    links: Link[]
}

export type Statistic = {
    value: string,
    label: string
}

export type Product = {
    imgURL: string,
    name: string,
    price: string
}

export type Service = {
    imgURL: string,
    label: string,
    subtext: string
}