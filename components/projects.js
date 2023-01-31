import { useRef } from 'react';
import Image from 'next/image';
import arrow from '../public/images/arrow.gif';
import Grid from '@mui/material/Grid';
import Project from './project';

export default function Projects() {
    const ref = useRef(null);

    const executeScroll = () => ref.current.scrollIntoView();

    const weeks = [
        {
            name: "Week 1",
            image: "https://i.imgur.com/TpPyGBy.jpeg",
            link: "/week1"
        },
        {
            name: "Week 2",
            image: "https://i.imgur.com/4fkVuun.jpg",
            link: "/week2"
        },
        {
            name: "Week 3",
            image: "https://i.imgur.com/DqWRaSI.jpeg",
            link: "/week3"
        },
        {
            name: "Week 4",
            image: "https://i.imgur.com/TACN8XO.png",
            link: "/week4"
        },
        {
            name: "Week 5",
            image: "https://i.imgur.com/MKPWCep.png",
            link: "/week5"
        },
        {
            name: "Week 6",
            image: "https://i.imgur.com/YqeTpBg.jpeg",
            link: "/week6"
        },
        {
            name: "Week 7",
            image: "https://i.imgur.com/jkmAQHu.jpg",
            link: "/week7"
        },
        {
            name: "Week 8",
            image: "https://i.imgur.com/0nrXoxB.png",
            link: "/week8"
        },
        {
            name: "Week 9",
            image: "https://i.imgur.com/7FJRhIl.png",
            link: "/week9"
        },
        {
            name: "Week 10",
            image: "https://i.imgur.com/eX5adgi.jpg",
            link: "/week10"
        },
        {
            name: "Week 11",
            image: "https://i.imgur.com/4Lwp3Mn.jpg",
            link: "/week11"
        },
        {
            name: "Week 12",
            image: "https://i.imgur.com/Fs8PoEC.jpg",
            link: "/week12"
        },
        {
            name: "Final Project",
            image: "https://i.imgur.com/oK2Vs9I.jpg",
            link: "/finalproject"
        }
    ]

    return (
        <>
            <Image src={arrow} alt="Arrow" onClick={executeScroll} />
            <div ref={ref}>
                <Grid container spacing = {4}>
                    {weeks.map(week => (
                        <Grid item xs={12} sm={6} md={4}>
                            <Project name={week.name} image={week.image} link={week.link}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    )

}

