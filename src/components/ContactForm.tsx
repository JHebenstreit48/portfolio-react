import { useState } from "react";
import '../css/ContactForm.css';

export default function ContactForm() {

    interface Inputs {
        name: string;
        email: string;
        textarea: string;
    }

    const [inputs, setInputs] = useState<Inputs>({ name: "", email: "", textarea: "" });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(inputs);
    }//

    return (

        <form className="formContainer" onSubmit={handleSubmit}>

            <label className="label">Name:</label>
            <input type="text"
                className="textField"
                value={inputs.name || ''}
                onChange={handleChange}
            />

            <label className="label">Email:</label>
            <input type="email"
                className="textField"
                value={inputs.email}
                onChange={handleChange}
            />

            <label className="label">Message:</label>
            <textarea
                className="messageField"
                value={inputs.textarea}
                onChange={handleChange}
            />

            <input type="submit" value="Submit" className="submitButton" />


        </form>

    )
}