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
            image: "https://i.ibb.co/cr8dZ1t/week1.jpg",
            link: "/week1"
        },
        {
            name: "Week 2",
            image: "https://i.ibb.co/LhKdRSj/week2.webp",
            link: "/week2"
        },
        {
            name: "Week 3",
            image: "https://i.ibb.co/KsL4qwN/week3.jpg",
            link: "/week3"
        },
        {
            name: "Week 4",
            image: "https://i.ibb.co/VJvvHfJ/image.png",
            link: "/week4"
        },
        {
            name: "Week 5",
            image: "https://i.ibb.co/YTBzCMG/week5.png",
            link: "/week5"
        },
        {
            name: "Week 6",
            image: "https://i.ibb.co/Vgv1KSr/week6.jpg",
            link: "/week6"
        },
        {
            name: "Week 7",
            image: "https://i.ibb.co/mqhP3yx/week7.jpg",
            link: "/week7"
        },
        {
            name: "Week 8",
            image: "https://i.ibb.co/JnXTrRR/week8.png",
            link: "/week8"
        },
        {
            name: "Week 9",
            image: "https://i.ibb.co/9nBc792/image.png",
            link: "/week9"
        },
        {
            name: "Week 10",
            image: "https://i.ibb.co/D5PmfnZ/image.png",
            link: "/week10"
        },
        {
            name: "Week 11",
            image: "https://i.ibb.co/TL2qsN7/week11.png",
            link: "/week11"
        },
        {
            name: "Week 12",
            image: "https://i.ibb.co/yXK0mVT/image.png",
            link: "/week12"
        },
        {
            name: "Final Project",
            image: "https://i.ibb.co/3WgcZJ5/finalproject.webp",
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

