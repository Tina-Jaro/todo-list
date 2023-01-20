import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

export const Email = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }


return (
    <div>
        <form onSubmit={sendEmail}>
            <input type="text" placeholder="abc@gmail.com" required></input>
            <button>Email US</button>
        </form>
        <input type="submit" value="Send" />
    </div>
)
}

export default Email;