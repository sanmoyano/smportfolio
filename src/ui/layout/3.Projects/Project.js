import { Box, Image, HStack, Stack, Text, Button } from "@chakra-ui/react";

const Project = ({ project }) => {
    const skillsArray = project.skills;

    return (
        <Stack className="project__card" spacing={4}>
            <h3>{project.title}</h3>
            <Box spacing={4}>
                <Image alt={project.alt} borderRadius="md" objectFit="cover" src={project.img} />
                <Text marginTop={4}>{project.description}</Text>
            </Box>
            <HStack className="project__skills" display="flex" justifyContent={"space-between"}>
                <HStack>
                    {skillsArray.map((skill) => (
                        <Box key={skill} color="whitesmoke" fontSize="1.6rem" spacing={4}>
                            [{skill}]
                        </Box>
                    ))}
                </HStack>
            </HStack>
            <HStack>
                <Button
                    _hover={{ bg: "whitesmoke", color: "#0d0d0d" }}
                    bg="#adff2f"
                    fontFamily={`"JetBrains Mono", monospace`}
                    fontSize="1.6rem"
                    paddingInline={12}
                    size="lg"
                    textAlign="center"
                    textColor="#0d0d0d"
                    variant="solid"
                >
                    <a href={project.link} rel="noreferrer" target="_blank">
                        project
                    </a>
                </Button>
                <Button
                    _hover={{ bg: "whitesmoke", color: "#2d2d2d" }}
                    fontFamily={`"JetBrains Mono", monospace`}
                    fontSize="1.6rem"
                    paddingInline={12}
                    size="lg"
                    textColor="whitesmoke"
                    type="submit"
                    variant="outline"
                >
                    <a href={project.github} rel="noreferrer" target="_blank">
                        GitHub
                    </a>
                </Button>
            </HStack>
        </Stack>
    );
};

export default Project;
