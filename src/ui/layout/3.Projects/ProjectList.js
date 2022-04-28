import { Stack } from "@chakra-ui/react";
import Slider from "react-slick";
import { useState } from "react";

import Project from "./Project";

const ProjectList = ({ projects }) => {
    const [projectIndex, setProjectIndex] = useState(0);

    const settings = {
        infitie: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "0px",
        beforeChange: (current, next) => setProjectIndex(next),
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <Stack spacing={6}>
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={index === projectIndex ? "slide activeSlide" : "slide"}
                    >
                        <Project project={project} />
                    </div>
                ))}
            </Slider>
        </Stack>
    );
};

export default ProjectList;
