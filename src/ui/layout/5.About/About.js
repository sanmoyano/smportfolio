import { Button } from "@chakra-ui/react";

const About = () => {
    return (
        <div className="main__about">
            <h2>.about ( )</h2>
            <p>
                I am <strong>Front End Developer</strong>, specialized in Web Development with
                JavaScript using ReactJS as the main technology. I design and code UX/UI thinking
                about the best experience I can offer to the user. <br />
                <br /> I am currently reinforcing my skills focusing on developing a
                <strong> MERN Full Stack</strong> profile with the professional objective to
                develope useful solutions for the future.
            </p>
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
                width={{ base: "auto", md: "70%" }}
            >
                <a
                    href="https://firebasestorage.googleapis.com/v0/b/sm-portfolio-4c746.appspot.com/o/CV_ENG_Santiago%20Moyano_2022.pdf?alt=media&token=0b391483-8de0-4a19-8670-a7b272e0dccc"
                    rel="noreferrer"
                    target="_blank"
                >
                    Download my summary
                </a>
            </Button>
        </div>
    );
};

export default About;
