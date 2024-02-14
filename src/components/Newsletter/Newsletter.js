import React from "react";
import {FaEnvelope} from "react-icons/fa";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import NewsletterController from "../../controller/NewsletterController";


const schema = yup.object().shape({
    email: yup.string().email("Email is invalid").required("Email is required"),
});

function Newsletter() {

    const [successMessage, setSuccessMessage] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");

    const {
        email,
        handleEmail,
        handleOnSubmit
    } = NewsletterController();

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        setSuccessMessage("");
        setErrorMessage("");
        const response = await handleOnSubmit(data);
        if (response.static === 200) {
            setTimeout(() => {
                setSuccessMessage(response.data.message);
            }, 3000);
        } else {
            setErrorMessage(response.data.message);
        }
    }

    return (
        <form className={"form-inline"} onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group mb-3">
                <button className={"btn btn-outline-secondary"}><FaEnvelope/></button>
                <input
                    {...register("email")}
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmail}
                />
                <button className="btn btn-outline-secondary" type="submit">Subscribe</button>
            </div>
            {errors.email && <div className="alert alert-danger">{errors.email.message}</div>}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
        </form>
    );
}

export default Newsletter;