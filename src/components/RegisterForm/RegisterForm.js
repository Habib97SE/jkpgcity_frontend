import React, {useState} from "react";
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import RegisterController from "../../controller/RegisterController";
import {FaEye, FaEyeSlash } from "react-icons/fa";
import {MdEmail} from "react-icons/md";


const validationSchema = yup.object().shape({
    firstName: yup.string().required('First Name is required').min(2, 'First Name must be at least 2 characters'),
    lastName: yup.string().required('Last Name is required').min(2, 'Last Name must be at least 2 characters'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters').matches(/(^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$)/, 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'),
    confirmPassword: yup.string().required('Confirm Password is required').oneOf([yup.ref('password'), null], 'Passwords must match'),
    agreement: yup.boolean().oneOf([true], 'You must accept the terms and conditions')
});

function RegisterForm() {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationSchema)
    });
    const [error, setError] = useState("");
    const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        showPassword,
        handleFirstName,
        handleLastName,
        handleEmail,
        handlePassword,
        handleConfirmPassword,
        handleShowPassword,
        handleOnSubmit
    } = RegisterController();


    const onSubmit = (data) => {
        const response = handleOnSubmit(data);
        if (response.status === 201) {
            console.log("User registered successfully");
        } else {
            console.log(response.data.message);
        }
    }



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={"form-group"}>
                <label htmlFor={"first-name"}>First name</label>
                <input
                    {...register("firstName")}
                    onChange={handleFirstName}
                    type={"text"}
                    className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                    id={"first-name"}
                    value={firstName}
                    placeholder={"John"}/>
                {errors.firstName && <p className="error text-danger">{errors.firstName.message}</p>}
            </div>
            <div className={"form-group"}>
                <label htmlFor={"last-name"}>Last name</label>
                <input
                    {...register("lastName")}
                    onChange={handleLastName}
                    type={"text"}
                    className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                    id={"last-name"}
                    value={lastName}
                    placeholder={"Doe"}/>
                {errors.lastName && <p className="error text-danger">{errors.lastName.message}</p>}
            </div>
            <div className={"form-group"}>
                <label htmlFor={"email"}>Email address</label>
                <div className={"input-group"}>
                    <span className={"btn btn-outline-secondary"}>
                        <MdEmail/>
                    </span>
                    <input {...register("email")} onChange={handleEmail} type={"email"}
                           className={`form-control ${errors.email ? "is-invalid" : ""}`}
                           id={"email"}
                           value={email}
                           placeholder={"Enter email"}/>
                </div>
                {errors.email && <p className="error text-danger">{errors.email.message}</p>}
            </div>
            <div className={"form-group"}>
                <label htmlFor={"password"}>Password</label>
                <div className="input-group">
                <input
                        {...register("password")}
                        type={showPassword ? 'text' : 'password'}
                        className={`form-control ${errors.password ? "is-invalid" : ""}`}
                        id="password"
                        value={password}
                        onChange={handlePassword}
                    />
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={handleShowPassword}
                    >
                        {showPassword ? <FaEye/> : <FaEyeSlash/>}
                    </button>
                </div>
                {errors.password && <p className="error text-danger">{errors.password.message}</p>}
            </div>
            <div className={"form-group"}>
                <label htmlFor={"confirm-password"}>Confirm Password</label>
                <input {...register("confirmPassword")}
                       onChange={handleConfirmPassword}
                       type={"password"}
                       className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                       id={"confirm-password"}
                       value={confirmPassword}
                       placeholder={"Confirm Password"}/>
                {errors.confirmPassword && <p className="error text-danger">{errors.confirmPassword.message}</p>}
            </div>
            <div className="form-group">
                {/* Add checkbox and label for agreement */}
                <div className="form-check">
                    <input type="checkbox" {...register("agreement")}
                           className={`form-check-input ${errors.agreement ? "is-invalid" : ""}`}
                           id="agreement"/>
                    <label className="form-check-label" htmlFor="agreement">I agree to the terms and conditions</label>
                    {errors.agreement && <p className="error text-danger">{errors.agreement.message}</p>}
                </div>
            </div>
            <button type={"submit"} className={"btn btn-primary col-12 my-2"}>Submit</button>
            <div className={"text-danger"}>{error}</div>

        </form>
    );
}

export default RegisterForm;