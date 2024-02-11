import React from "react";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import { FaFacebookF, FaGoogle } from "react-icons/fa6";


function RegisterPage() {
    return(
        <div className={"container-fluid"}>
            <div className={"row"}>
                <div className={"col-md-6 offset-md-3"}>
                    <h1 className={"text-center"}>Register</h1>
                    <RegisterForm/>
                    <div className={"text-center"}>
                        <a href={"/login"}>Already have an account?</a>
                    </div>
                    <div className="col-12 d-sm-flex justify-content-between">
                        <button className="btn btn-primary col-6">
                            <FaFacebookF/> Continue with Facebook
                        </button>
                        <button className={"btn btn-danger col-6"}>
                            <FaGoogle/> Continue with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;