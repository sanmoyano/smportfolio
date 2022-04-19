import { Box, Image, HStack, Stack } from "@chakra-ui/react";

const Project = ({ project }) => {
    const skillsArray = project.skills;

    return (
        <Stack className="card__project" spacing={4}>
            <h3>{project.title}</h3>
            <Box className="project__content">
                <Image alt={project.alt} borderRadius="md" src={project.img} />
                <p>{project.description}</p>
            </Box>
            <HStack className="project__skills">
                {skillsArray.map((skill) => (
                    <Box key={skill} spacing={4}>
                        {skill}
                    </Box>
                ))}
            </HStack>
        </Stack>
    );
};

export default Project;
