import { title } from "process";
import { ILinkCard } from "./LinksCard";

export const card1 : ILinkCard = {
    heading: 'About',
    linkType: 'navLink',
    links: [
        {title: 'About Us', navigateTo: '/contact'},
        {title: 'Term of use', navigateTo: '/contact'},
        {title: 'Referral Program', navigateTo: '/contact'},
        {title: 'Blogs', navigateTo: '/contact'},
        {title: 'Privacy policy', navigateTo: '/contact'},
    ]
}

export const card2 : ILinkCard = {
    heading: 'Support',
    linkType: 'navLink',
    links: [
        {title: 'Help Center', navigateTo: '/contact'},
        {title: 'Carporate Account', navigateTo: '/contact'},
        {title: 'List your Token', navigateTo: '/contact'},
        {title: 'Partnership Enquiries', navigateTo: '/contact'},
        {title: 'Media Assets', navigateTo: '/contact'},
        {title: 'Trading, Deposit & Withdrawal Fees', navigateTo: '/contact'},
        {title: 'Security', navigateTo: '/contact'},
    ]
}

export const card3 : ILinkCard = {
    heading: 'Socials',
    linkType: 'anchor',
    links: [
        {title: 'Telegram', navigateTo: 'https://telegram.com/the_kamaldeep', iconName: 'telegram-plane'},
        {title: 'Twitter', navigateTo: 'https://twitter.com/the_kamaldeep', iconName: 'twitter'},
        {title: 'Facebook', navigateTo: 'https://www.facebook.com/thekamaldeepchoudhary', iconName: 'facebook-f'},
        {title: 'Youtube', navigateTo: 'https://www.youtube.com/channel/UC36fmVfSB9EZq_GmSEMIXDA', iconName: 'youtube'},
        {title: 'LinkedIn', navigateTo: 'https://www.linkedin.com/in/thekamaldeep/', iconName: 'linkedin-in'},
        {title: 'Instagram', navigateTo: 'https://www.instagram.com/thekamaldeep/', iconName: 'instagram'},
    ]
}

export const card4 : ILinkCard = {
    heading: 'About',
    linkType: 'navLink',
    links: [
        {title: 'About Us', navigateTo: '/contact'},
        {title: 'Term of use', navigateTo: '/contact'},
        {title: 'Referral Program', navigateTo: '/contact'},
        {title: 'Blogs', navigateTo: '/contact'},
        {title: 'Privacy policy', navigateTo: '/contact'},
    ]
}
    