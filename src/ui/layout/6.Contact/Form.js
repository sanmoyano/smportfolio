import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { Button, useToast, Box } from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import emailjs from "emailjs-com";

import { db } from "../../../api/firebase";

// import validateInfo from "./validateInfo";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const toast = useToast({
        duration: 3000,
        isClosable: true,
        position: "top-right",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const newContact = {
            name,
            email,
            message,
            createdAt: serverTimestamp(),
        };

        if ((newContact.name, newContact.email, newContact.message === "")) {
            toast({
                render: () => (
                    <Box
                        arial-
                        bg="orange.500"
                        color="whitesmoke"
                        fontFamily={`"JetBrains Mono", monospace`}
                        fontSize="2xl"
                        fontWeight="bold"
                        label="Toast"
                        p={4}
                        textAlign="center"
                    >
                        <WarningIcon boxSize={10} padding={2} />
                        Please fill in all the fields!
                    </Box>
                ),
            });
        } else {
            const contactsCollection = collection(db, "newContact");
            const addNewContact = addDoc(contactsCollection, newContact);

            emailjs
                .sendForm("service_9bl5trb", "template_t1u15ab", e.target, "bL3a-vjPEKsvmk2yQ")
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    },
                );

            addNewContact
                .then(() => {
                    toast({
                        render: () => (
                            <Box
                                arial-label="Toast"
                                bg="green.500"
                                color="whitesmoke"
                                fontFamily={`"JetBrains Mono", monospace`}
                                fontSize="2xl"
                                fontWeight="bold"
                                p={4}
                                textAlign="center"
                            >
                                <CheckCircleIcon boxSize={10} padding={2} />
                                Message sent! Thank you for contacting me.
                            </Box>
                        ),
                    });
                })
                .catch(() => {
                    toast({
                        render: () => (
                            <Box
                                arial-label="Toast"
                                bg="red.500"
                                color="whitesmoke"
                                fontFamily={`"JetBrains Mono", monospace`}
                                fontSize="2xl"
                                fontWeight="bold"
                                p={4}
                                textAlign="center"
                            >
                                <WarningIcon boxSize={10} padding={2} />
                                Something went wrong. Try direct mailing from the footer
                            </Box>
                        ),
                    });
                });
            setName("");
            setEmail("");
            setMessage("");
        }
    };

    return (
        <div className="form__container">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    className="form__input"
                    name="name"
                    placeholder="Your name..."
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="form__input"
                    name="email"
                    placeholder="Your email..."
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    className="form__input--about"
                    name="message"
                    placeholder="What's all about?..."
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
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
                    send
                </Button>
            </form>
        </div>
    );
};

export default Form;
