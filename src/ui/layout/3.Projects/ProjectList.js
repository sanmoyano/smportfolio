import { Stack } from "@chakra-ui/react";

import Project from "./Project";

const ProjectList = ({ projects }) => {
    return (
        <Stack className="project__list" spacing={6}>
            {projects.map((project) => (
                <Project key={project.id} project={project} />
            ))}
        </Stack>
    );
};

export default ProjectList;
