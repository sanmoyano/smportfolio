import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { Button, useToast } from "@chakra-ui/react";

import { db } from "../../../api/firebase";

const Form = () => {
    const [data, setData] = useState({});

    const toast = useToast({
        duration: 9000,
        isClosable: true,
        position: "top-right",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const contactData = {
            contact: {
                name: data.name,
                email: data.email,
                message: data.message,
            },
            createdAt: serverTimestamp(),
        };

        if (data.name && data.email && data.message) {
            const contactCollection = collection(db, "contactData");
            const addContactData = addDoc(contactCollection, contactData);

            addContactData.then(() => {
                toast({
                    title: "Message Sent",
                    description: "Thank you for contacting me.",
                    status: "success",
                });
                e.target.reset();
            });
            addContactData.catch(() =>
                toast({
                    title: "Error",
                    description:
                        "Something went wrong, please try using direct mail on the footer.",
                    status: "error",
                }),
            );
        } else {
            toast({
                title: "Warning",
                description: "Complete all the form before sending.",
                status: "warning",
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData({ ...data, [name]: value });
    };

    return (
        <div className="form__container">
            <form className="form" method="POST" onSubmit={handleSubmit}>
                <input
                    className="form__input"
                    name="name"
                    placeholder="Your name..."
                    onChange={handleChange}
                />
                <input
                    className="form__input"
                    name="email"
                    placeholder="Your email..."
                    onChange={handleChange}
                />
                <textarea
                    className="form__input--about"
                    name="message"
                    placeholder="What's all about?..."
                    onChange={handleChange}
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
