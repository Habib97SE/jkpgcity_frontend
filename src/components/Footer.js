import React from 'react';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {FaEnvelope} from "react-icons/fa";

const schema = yup.object().shape({
    email: yup.string().email("Email is invalid").required("Email is required"),
});

const Footer = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <footer className="bg-light text-center text-lg-start">
            <hr/>
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Footer Content</h5>
                        <form className={"form-inline"} onSubmit={handleSubmit(onSubmit)}>
                            <div className="input-group mb-3">
                                <button className={"btn btn-outline-secondary"} ><FaEnvelope/></button>
                                <input
                                    {...register("email")}
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                />
                                <button className="btn btn-outline-secondary" type="submit">Subscribe</button>
                            </div>
                            {errors.email && <div className="alert alert-danger">{errors.email.message}</div>}
                        </form>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-dark">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 4</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-dark">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 4</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
