import { Box, Button, Link } from "@chakra-ui/react";

const About = () => {
    return (
        <div className="main__about" id="about">
            <h2>.about ( )</h2>
            <p>
                I am <strong>Front End Developer</strong>, specialized in Web Development with
                JavaScript using ReactJS as the main technology. I design and code UX/UI thinking
                about the best experience I can offer to the user. <br />
                <br /> I am currently reinforcing my skills focusing on developing a
                <strong> MERN Full Stack</strong> profile with the professional objective to
                develope useful solutions for the future.
            </p>
            <Box>
                <Button
                    _hover={{ bg: "whitesmoke", color: "#2d2d2d" }}
                    fontFamily={`"JetBrains Mono", monospace`}
                    fontSize="1.6rem"
                    marginBlock={"2.4rem"}
                    paddingInline={12}
                    size="lg"
                    textColor="whitesmoke"
                    type="submit"
                    variant="outline"
                >
                    <Link
                        href="https://firebasestorage.googleapis.com/v0/b/sm-portfolio-4c746.appspot.com/o/CV_ENG_Santiago%20Moyano_2022.pdf?alt=media&token=1c70b556-3e34-4d2f-b14f-b9b1469434a2"
                        p={{ base: "4" }}
                        rel="noreferrer"
                        target="_blank"
                    >
                        Download my summary
                    </Link>
                </Button>
            </Box>
        </div>
    );
};

export default About;
