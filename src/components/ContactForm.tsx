import { useState } from "react";

export default function ContactForm() {

    interface Inputs {
        name: string;
        email: string;
        textarea: string;
    }

    const [inputs, setInputs] = useState<Inputs>({ name: "", email: "", textarea: "" });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(inputs);
    }//

    return (

        <form onSubmit={handleSubmit}>

            <label>Name:</label>
            <input type="text"
                name="name"
                value={inputs.name || ''}
                onChange={handleChange}
            />

            <label>Email:</label>
            <input type="email"
                value={inputs.email}
                onChange={handleChange}
            />

            <label>Message:</label>
            <input type="textarea"
                value={inputs.textarea}
                onChange={handleChange}
            />


        </form>

    )
}