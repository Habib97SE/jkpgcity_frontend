import React, {useEffect, useState} from "react";
import { useForm} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import VenuesController from "../../controller/VenuesController";

const schema = yup.object().shape({
    name: yup.string().required("Name is required").min(5, "Name must be at least 5 characters").max(100, "Name must be at most 100 characters"),
    category: yup.string().required("Category is required"),
    address: yup.string().required("Address is required").min(5, "Address must be at least 5 characters").max(100, "Address must be at most 100 characters"),
    phone: yup.string().required("Phone is required").matches(/^[0-9]{10}$/, "Phone must be a valid phone number"),
    email: yup.string().required("Email is required").email("Email must be a valid email"),
    website: yup.string().required("Website is required").url("Website must be a valid URL"),
    bio: yup.string().required("Bio is required").min(20, "Bio must be at least 20 characters").max(500, "Bio must be at most 500 characters"),
});


function EditVenue (id) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [bio, setBio] = useState("");
    const [categories, setCategories] = useState([]);

    const onSubmit = (data) => {
        VenuesController.update(id, data).then(r => console.log(r)).catch(e => console.error(e));
    }

    useEffect(() => {
        VenuesController.find(id).then(venue => {
            setCategory(venue.category);
            setName(venue.name);
            setAddress(venue.address);
            setPhone(venue.phone);
            setEmail(venue.email);
            setWebsite(venue.website);
            setBio(venue.bio);
            setCategories(VenuesController.getCategories())
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
            <h1>Edit Venue</h1>
            <p>Edit venue</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group my-4">
                    <label htmlFor={"name"}>Name</label>
                    <input
                        {...register("name")}
                        name={"name"}
                        type={"text"}
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                        placeholder={"Name"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                </div>
                <div className="form-group my-4">
                    <label htmlFor={"category"}>Category</label>
                    <select
                        {...register("category")}
                        name={"category"}
                        className={`form-control ${errors.category ? "is-invalid" : ""}`}
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value={""}>Select a category</option>
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group my-4">
                    <label htmlFor={"address"}>Address</label>
                    <input
                        {...register("address")}
                        name={"address"}
                        type={"text"}
                        className={`form-control ${errors.address ? "is-invalid" : ""}`}
                        placeholder={"Address"}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}
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
                    {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
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
                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>
                <div className="form-group my-4">
                    <label htmlFor={"website"}>Website</label>
                    <input
                        {...register("website")}
                        name={"website"}
                        type={"text"}
                        className={`form-control ${errors.website ? "is-invalid" : ""}`}
                        placeholder={"Website"}
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                    {errors.website && <div className="invalid-feedback">{errors.website.message}</div>}
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
                    {errors.bio && <div className="invalid-feedback">{errors.bio.message}</div>}
                </div>
                <button type={"submit"} className={"btn btn-primary"}>Submit</button>
            </form>
        </div>
    );
}

export default EditVenue;