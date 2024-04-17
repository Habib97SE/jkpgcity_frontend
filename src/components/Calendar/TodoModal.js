import React, {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required")
});

function TodoModal({show, setShow, year, month, day}) {
    month = parseInt(month);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    // Removed the show state management from here and use props instead
    const [todos, setTodos] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        setTodos([...todos, { id: todos.length + 1, title: data.title, description: data.description }]);
        setShow(false); // This still works because setShow is now passed from the parent
    };

    if (!show) return null;


    return (
        <div className="modal-backdrop" onClick={() => setShow(false)}>
            <div className="modal-content col-6 bg-white" onClick={e => e.stopPropagation()}>
                {/* Modal form and content go here */}
                <div className="col-6 mx-auto">
                    <h3>Add new todo</h3>
                    <p>{year}-{month + 1}-{day}</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group my-4">
                            <label htmlFor="title" className={"my-3"}>Title</label>
                            <input
                                {...register("title")}
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className={`form-control ${errors.title ? "is-invalid" : ""}`}
                            />
                            {errors.title && <p className={"text-danger"}>{errors.title.message}</p>}
                        </div>
                        <div className="form-group my-4">
                            <label htmlFor="description" className={"my-3"}>Description</label>
                            <textarea
                                id="description"
                                className={`form-control ${errors.description ? "is-invalid" : ""}`}
                                {...register("description")}
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                            />
                            {errors.description && <p className={"text-danger"}>{errors.description.message}</p>}
                        </div>
                        <button type="submit" className={"btn btn-primary m-3 px-5 py-2"}>Add</button>
                        <button className={"btn btn-secondary m-3 px-5 py-2"} onClick={() => setShow(false)}>Close
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TodoModal;