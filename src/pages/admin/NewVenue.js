import React, { useState } from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import TinyMCE from "../../components/TinyMCE";

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    address: yup.string().required("Address is required"),
    phone: yup.string().required("Phone is required"),
    email: yup.string().email("Please enter a valid email address").required("Email is required"),
    website: yup.string().url().required("Website is required"),
    category: yup.string().required("Category is required"),
    description: yup.string().required("Description is required"),
});


function NewVenue () {
    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema)
    });
    const [venueName, setVenueName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [category, setCategory] = useState("");

    const onSubmit = (data) => {
        console.log(data);
    }

    const venueCategories = [ "Bar", "Restaurant", "Club", "Cafe", "Hotel", "Mall", "Park", "Theater", "Stadium", "Other"];
    return (
        <div className={"col-12"}
             style={{
                 backgroundColor: "#fff",
                 display: "inline-block",
                 padding: "20px",
                 borderRadius: "10px"
             }}
        >
            <h1>New Venue</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        {...register("name")}
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter name"
                        value={venueName}
                        onChange={(e) => setVenueName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        {...register("address")}
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Enter address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor={"phone"}>Phone</label>
                    <input
                        {...register("phone")}
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Enter phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        {...register("email")}
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="website">Website</label>
                    <input
                        {...register("website")}
                        type="text"
                        className="form-control"
                        id="website"
                        placeholder="Enter website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select
                        {...register("category")}
                        className="form-control"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value={""}>Select category</option>
                        {venueCategories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <TinyMCE />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="image">Image</label>
                    <input type="file" className="form-control-file" id="image"/>
                </div>
                <input type="submit" className="btn btn-primary" value={"Submit"} />
            </form>
        </div>
    );
}

export default NewVenue;