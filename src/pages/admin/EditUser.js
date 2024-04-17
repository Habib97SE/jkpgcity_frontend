import React, {useEffect, useState} from "react";
import { useForm} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import UserController from "../../controller/UserController";

const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required").min(2, "First Name must be at least 2 characters").max(100, "First Name must be at most 100 characters"),
    lastName: yup.string().required("Last Name is required").min(2, "Last Name must be at least 2 characters").max(100, "Last Name must be at most 100 characters"),
    email: yup.string().required("Email is required").email("Email must be a valid email"),
    // password should be at least 8 characters, and should contain at least one uppercase letter, one lowercase letter, one number, and one special character
    password: yup.string().required("Password is required").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
    // password confirmation should match the password
    passwordConfirmation: yup.string().required("Password Confirmation is required").oneOf([yup.ref('password'), null], 'Passwords must match'),
    role: yup.string().required("Role is required"),
    phone: yup.string().required("Phone is required").matches(/^[0-9]{10}$/, "Phone must be a valid phone number"),
    bio: yup.string().required("Bio is required").min(20, "Bio must be at least 20 characters").max(500, "Bio must be at most 500 characters"),
    facebook: yup.string().url("Facebook must be a valid URL"),
    twitter: yup.string().url("Twitter must be a valid URL"),
    instagram: yup.string().url("Instagram must be a valid URL"),
});

function EditUser({id}) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [role, setRole] = useState("");
    const [phone, setPhone] = useState("");
    const [bio, setBio] = useState("");
    const [facebook, setFacebook] = useState("");
    const [twitter, setTwitter] = useState("");
    const [instagram, setInstagram] = useState("");

    const onSubmit = (data) => {
        UserController.update(id, data).then(r => console.log(r)).catch(e => console.error(e));
    }

    useEffect(() => {
        UserController.show(id).then(r => {
            setFirstName(r.data.firstName);
            setLastName(r.data.lastName);
            setEmail(r.data.email);
            setRole(r.data.role);
            setPhone(r.data.phone);
            setBio(r.data.bio);
            setFacebook(r.data.facebook);
            setTwitter(r.data.twitter);
            setInstagram(r.data.instagram);
        }).catch(e => console.error(e));
    }, [id]);

    return (
        <div
            className={"col-md-12"}
            style={{
                backgroundColor: "#fff",
                display: "inline-block",
                padding: "20px",
                borderRadius: "10px"
            }}
        >
            <h1>Edit User</h1>
            <p>Edit user</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group my-4">
                    <label htmlFor={"firstName"}>First Name</label>
                    <input
                        {...register("firstName")}
                        name={"firstName"}
                        type={"text"}
                        className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                        placeholder={"First Name"}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    {errors.firstName && <p className={"text-danger"}>{errors.firstName.message}</p>}
                </div>
                <div className="form-group my-4">
                    <label htmlFor={"lastName"}>Last Name</label>
                    <input
                        {...register("lastName")}
                        name={"lastName"}
                        type={"text"}
                        className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                        placeholder={"Last Name"}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    {errors.lastName && <p className={"text-danger"}>{errors.lastName.message}</p>}
                </div>
                <div className="form-group my-4">
                    <label htmlFor={"email"}>Email</label>
                    <input
                        {...register("email")}
                        name={"email"}
                        type={"email"}
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        placeholder={"Email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p className={"text-danger"}>{errors.email.message}</p>}
                </div>
                <div className="form-group my-4">
                    <label htmlFor={"password"}>Password</label>
                    <input
                        {...register("password")}
                        name={"password"}
                        type={"password"}
                        className={`form-control ${errors.password ? "is-invalid" : ""}`}
                        placeholder={"Password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <p className={"text-danger"}>{errors.password.message}</p>}
                </div>
                <div className="form-group my-4">
                    <label htmlFor={"passwordConfirmation"}>Password Confirmation</label>
                    <input
                        {...register("passwordConfirmation")}
                        name={"passwordConfirmation"}
                        type={"password"}
                        className={`form-control ${errors.passwordConfirmation ? "is-invalid" : ""}`}
                        placeholder={"Password Confirmation"}
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                    {errors.passwordConfirmation && <p className={"text-danger"}>{errors.passwordConfirmation.message}</p>}
                </div>
                <div className="form-group my-4">
                    <label htmlFor={"role"}>Role</label>
                    <select
                        {...register("role")}
                        name={"role"}
                        className={`form-control ${errors.role ? "is-invalid" : ""}`}
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value={""}>Select Role</option>
                        <option value={"admin"}>Admin</option>
                        <option value={"user"}>User</option>
                    </select>
                    {errors.role && <p className={"text-danger"}>{errors.role.message}</p>}
                </div>
                <div className="form-group my-4">
                    <label htmlFor={"phone"}>Phone</label>
                    <input
                        {...register("phone")}
                        name={"phone"}
                        type={"text"}
                        className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                        placeholder={"Phone"}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    {errors.phone && <p className={"text-danger"}>{errors.phone.message}</p>}
                </div>
                <div className="form-group my-4">
                    <label htmlFor={"bio"}>Bio</label>
                    <textarea
                        {...register("bio")}
                        name={"bio"}
                        className={`form-control ${errors.bio ? "is-invalid" : ""}`}
                        placeholder={"Bio"}
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                    {errors.bio && <p className={"text-danger"}>{errors.bio.message}</p>}
                </div>
                <div className="form-group my-4">
                    <label htmlFor={"facebook"}>Facebook</label>
                    <input
                        {...register("facebook")}
                        name={"facebook"}
                        type={"text"}
                        className={`form-control ${errors.facebook ? "is-invalid" : ""}`}
                        placeholder={"Facebook"}
                        value={facebook}
                        onChange={(e) => setFacebook(e.target.value)}
                    />
                    {errors.facebook && <p className={"text-danger"}>{errors.facebook.message}</p>}
                </div>
                <div className="form-group my-4">
                    <label htmlFor={"twitter"}>Twitter</label>
                    <input
                        {...register("twitter")}
                        name={"twitter"}
                        type={"text"}
                        className={`form-control ${errors.twitter ? "is-invalid" : ""}`}
                        placeholder={"Twitter"}
                        value={twitter}
                        onChange={(e) => setTwitter(e.target.value)}
                    />
                    {errors.twitter && <p className={"text-danger"}>{errors.twitter.message}</p>}
                </div>
                <div className="form-group my-4">
                    <label htmlFor={"instagram"}>Instagram</label>
                    <input
                        {...register("instagram")}
                        name={"instagram"}
                        type={"text"}
                        className={`form-control ${errors.instagram ? "is-invalid" : ""}`}
                        placeholder={"Instagram"}
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                    />
                    {errors.instagram && <p className={"text-danger"}>{errors.instagram.message}</p>}
                </div>
                <button type={"submit"} className={"btn btn-primary"}>Submit</button>
            </form>
        </div>
    );
}

export default EditUser;

