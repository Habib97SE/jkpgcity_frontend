import {useState} from "react";
import Register from "../models/Register";
function RegisterController() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const register = new Register(firstName, lastName, email, password);
        register.registerUser().then(response => {
            if (response.status === 201) {
                return response.data;
            } else {
                return response.data.message;
            }
        });
    }


    return {
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
    }

}

export default RegisterController;