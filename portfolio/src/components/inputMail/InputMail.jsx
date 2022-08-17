import React, {useState, useEffect} from 'react';
import './InputMail.css';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const CustomForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
        });

    }

    useEffect(() => {
        if(status === "success") clearFields();
    }, [status])

    const clearFields = () => {
        setEmail('');
    }


    return (
        <form
            className="mc__form"
            onSubmit={(e) => handleSubmit(e)}
        >
            <h3 className="mc__title">
                {status === "success" ? "Success!" :
                    "Join our email list for future updates."}
            </h3>

            {status === "sending" && (
                <div
                    className="mc__alert mc__alert--sending"
                >sending...</div>
            )}
            {status === "error" && (
                <div
                    className="mc__alert mc__alert--error"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    className="mc__alert mc__alert--success"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
        </form>
    );
};


const InputMail = props => {
    const postUrl = `https://protonmail.us13.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
        <>
            <div className='mc__form-container'>
                <MailchimpSubscribe
                    url={postUrl}
                />
            </div>
        </>
    );
}

export default InputMail;