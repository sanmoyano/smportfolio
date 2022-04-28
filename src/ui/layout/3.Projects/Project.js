import { Box, Image, HStack, Stack, Text, Button, VStack } from "@chakra-ui/react";

const Project = ({ project }) => {
    const skillsArray = project.skills;

    return (
        <Stack>
            <Box
                alignItems={"flex-start"}
                backgroundImage={project.img}
                backgroundPosition="center"
                backgroundSize="cover"
                display={"flex"}
                flexDirection={"column"}
                height={"500px"}
                justifyContent={"flex-end"}
                paddingBlock={14}
                paddingInline={20}
            >
                <Text
                    bgColor={"#0d0d0d"}
                    color={"#f5f5f5"}
                    fontSize={"3xl"}
                    fontWeight={"400"}
                    marginBottom={2}
                    p={2}
                >
                    {project.title}
                </Text>
                <Text bgColor={"#f5f5f5"} color={"#0d0d0d"} fontSize={"xl"} mb={2} p={2}>
                    {project.description}
                </Text>
                <Stack justifyContent={"flex-start"}>
                    <HStack marginBlock={2} spacing={4}>
                        {skillsArray.map((skill) => (
                            <Text
                                key={skill}
                                bgColor={"#0d0d0d"}
                                color={"#f5f5f5"}
                                display={{ base: "none", md: "inline-block" }}
                                fontSize={"xl"}
                                fontWeight={"medium"}
                                p={2}
                            >
                                [{skill}]
                            </Text>
                        ))}
                    </HStack>
                    <Box>
                        <Button
                            _hover={{ bg: "whitesmoke", color: "#0d0d0d" }}
                            bg="#adff2f"
                            fontFamily={`"JetBrains Mono", monospace`}
                            fontSize="xl"
                            mr={2}
                            paddingInline={10}
                            textAlign="center"
                            textColor="#0d0d0d"
                            variant="solid"
                        >
                            <a href={project.link} rel="noreferrer" target={"_blank"}>
                                project
                            </a>
                        </Button>
                        <Button
                            _hover={{ bg: "#2d2d2d", color: "#f5f5f5" }}
                            fontFamily={`"JetBrains Mono", monospace`}
                            fontSize="xl"
                            ml={2}
                            paddingInline={10}
                            textColor="#0d0d0d"
                            type="submit"
                            variant="solid"
                        >
                            <a href={project.github} rel="noreferrer" target={"_blank"}>
                                GitHub
                            </a>
                        </Button>
                    </Box>
                </Stack>
            </Box>
        </Stack>
    );
};

export default Project;

/* <Stack className="project__card" spacing={4}>
                            <h3>{project.title}</h3>
                            <Box spacing={4}>
                                <Image
                                    alt={project.alt}
                                    borderRadius="md"
                                    objectFit="cover"
                                    src={project.img}
                                    srcSet={`${project.img} ${small} 300w, ${ project.img } ${ medium } 768w, ${ project.img } ${ large } 1280w`}
                                />
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
                            <HStack spacing={6}>
                                <Button
                                    _hover={{ bg: "whitesmoke", color: "#0d0d0d" }}
                                    bg="#adff2f"
                                    fontFamily={`"JetBrains Mono", monospace`}
                                    fontSize="1.6rem"
                                    paddingInline={10}
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
                                    paddingInline={10}
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
                        </Stack> */
{
    /* <Stack direction={"row"} p={6} paddingBottom={6} spacing={6}>
    {skillsArray.map((skill) => (
        <Text key={skill} color="whitesmoke" display={"-moz-initial"} fontSize="1.6rem">
            {skill}
        </Text>
    ))}
</Stack>; */
}
