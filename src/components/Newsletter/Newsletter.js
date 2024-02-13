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

    const {
        email,
        handleEmail,
        handleOnSubmit
    } = NewsletterController();

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        handleOnSubmit(data);
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
        </form>
    );
}

export default Newsletter;