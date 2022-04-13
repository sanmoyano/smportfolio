import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";

import { db } from "../../../api/firebase";

const Form = () => {
    const [data, setData] = useState({});

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
        const contactCollection = collection(db, "contactData");
        const addContactData = addDoc(contactCollection, contactData);

        addContactData.then(() => {
            alert("Mensaje enviado");
            e.target.reset();
        });
        addContactData.catch((err) => alert(err));
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
                <button className="form__btn" type="submit">
                    send
                </button>
            </form>
        </div>
    );
};

export default Form;
