import React, {useState} from "react";
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import LoginController from "../../controller/LoginController";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import Validate from "../../utils/Validate"

const schema = yup.object().shape({
    email: yup.string().email("Email is not valid.").required("Email is required"),
    password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters").matches(/(^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$)/, "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"),
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function LoginForm() {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });
    const {
        email,
        password,
        showPassword,
        handleEmail,
        handlePassword,
        handleShowPassword,
        handleOnSubmit
    } = LoginController();
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async (data) => {
        setIsLoading(true);
        if (!Validate.isLoginValid(data.email, data.password)) {
            setError("Invalid email or password");
            setIsLoading(false);
            return;
        }
        const response = await handleOnSubmit(data);
        if (response.status === 200) {
            setError("");
            setIsLoading(false);
            console.log("Login successful")
        } else {
            setError("Invalid email or password");
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
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
                <div>
                    <button type="submit" className={"btn btn-primary col-12 my-2"}>{
                        isLoading ? <div className="spinner-border text-light" role="status">
                            <span className="sr-only"></span>
                        </div> : "Login"
                    }</button>
                </div>
                {error ? <div className={"alert alert-danger"}>{error}</div> : ""}
            </div>
        </form>
    );
}

export default LoginForm;