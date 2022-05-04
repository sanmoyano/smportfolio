import { Box, HStack, Stack, Text, Button } from "@chakra-ui/react";

const Project = ({ project }) => {
    const skillsArray = project.skills;

    return (
        <Stack>
            <Box
                alignItems={"flex-start"}
                as="div"
                backgroundImage={project.img}
                backgroundPosition="center"
                backgroundSize="cover"
                display={"flex"}
                flexDirection={"column"}
                height={"500px"}
                justifyContent={"flex-end"}
                padding={20}
            >
                <Text
                    as={"h3"}
                    bgColor={"#0d0d0d"}
                    color={"#f5f5f5"}
                    fontFamily={`"JetBrains Mono", monospace`}
                    fontSize={"3xl"}
                    fontWeight={"400"}
                    marginBottom={2}
                    p={2}
                >
                    {project.title}
                </Text>
                <Text as={"p"} bgColor={"#f5f5f5"} color={"#0d0d0d"} fontSize={"xl"} mb={2} p={2}>
                    {project.description}
                </Text>
                <Stack justifyContent={"flex-start"}>
                    <HStack marginBlock={2} spacing={4}>
                        {skillsArray.map((skill) => (
                            <Text
                                key={skill}
                                as={"span"}
                                bgColor={"#0d0d0d"}
                                color={"#f5f5f5"}
                                display={{ base: "none", md: "inline-block" }}
                                fontFamily={`"JetBrains Mono", monospace`}
                                fontSize={"xl"}
                                fontWeight={"lighter"}
                                p={2}
                            >
                                [{skill}]
                            </Text>
                        ))}
                    </HStack>
                    <Box>
                        <Button
                            _hover={{ bg: "whitesmoke", color: "#0d0d0d" }}
                            as={"button"}
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
                            as={"button"}
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
