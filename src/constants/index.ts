import {facebook, instagram, shieldTick, support, truckFast, twitter} from "../assets/icons"
import {
    bigShoe1,
    bigShoe2,
    bigShoe3,
    customer1,
    customer2,
    shoe4,
    shoe5,
    shoe6,
    shoe7,
    thumbnailShoe1,
    thumbnailShoe2,
    thumbnailShoe3
} from "../assets/images"
import {FooterLink, NavLink, Product, Review, Service, Shoe, Statistic} from '../types'

export const navLinks: NavLink[] = [
    {href: "#home", label: "Home"},
    {href: "#about-us", label: "About Us"},
    {href: "#products", label: "Products"},
    {href: "#contact-us", label: "Contact Us"}
]

export const shoes: Shoe[] = [
    {
        name: 'shoe1',
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1
    },
    {
        name: 'shoe2',
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2
    },
    {
        name: 'shoe3',
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3
    }
]

export const statistics: Statistic[] = [
    {value: '1k+', label: 'Brands'},
    {value: '500+', label: 'Shops'},
    {value: '250k+', label: 'Customers'}
]

export const products: Product[] = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
        rating: 4
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
        rating: 3.8
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
        rating: 4.7
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
        rating: 4.3
    }
]

export const services: Service[] = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    }
]

export const reviews: Review[] = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
]


export const footerLinks: FooterLink[] = [
    {
        title: "Products",
        links: [
            {name: "Air Force 1", href: "/"},
            {name: "Air Max 1", href: "/"},
            {name: "Air Jordan 1", href: "/"},
            {name: "Air Force 2", href: "/"},
            {name: "Nike Waffle Racer", href: "/"},
            {name: "Nike Cortez", href: "/"}
        ]
    },
    {
        title: "Help",
        links: [
            {name: "About us", href: "/"},
            {name: "FAQs", href: "/"},
            {name: "How it works", href: "/"},
            {name: "Privacy policy", href: "/"},
            {name: "Payment policy", href: "/"}
        ]
    },
    {
        title: "Get in touch",
        links: [
            {name: "customer@nike.com", href: "mailto:customer@nike.com"},
            {name: "+92554862354", href: "tel:+92554862354"}
        ]
    }
]

export const socialMedia = [
    {src: facebook, alt: "facebook logo"},
    {src: twitter, alt: "twitter logo"},
    {src: instagram, alt: "instagram logo"}
]