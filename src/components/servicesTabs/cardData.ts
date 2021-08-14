import { cardProps } from "./Card";
import web from '../../images/web.jpeg'
import app from '../../images/app.jpg'
import soft from '../../images/soft.png'
import weather from '../../images/weather.jpg'


export const cardData:cardProps[]  = [
    {
        src: weather,
        title: "Weather",
        buttonText: 'Check Now',
        urlLink: '/weather'
    },
    {
        src: web,
        title: "Web Development",
        buttonText: 'Go Somewhere',
        urlLink: '/'
    },
    {
        src: app,
        title: "App Development",
        buttonText: 'Go Somewhere',
        urlLink: '/'
    },
    {
        src: soft,
        title: "Software Development",
        buttonText: 'Go Somewhere',
        urlLink: '/'
    },
    {
        src: web,
        title: "Digital Marketing",
        buttonText: 'Go Somewhere',
        urlLink: '/'
    },
    {
        src: app,
        title: "Android Development",
        buttonText: 'Go Somewhere',
        urlLink: '/'
    },
    {
        src: soft,
        title: "Marketing",
        buttonText: 'Go Somewhere',
        urlLink: '/'
    }
]