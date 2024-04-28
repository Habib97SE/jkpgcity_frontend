import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TodoController from "../../controller/TodoController";

const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required")
});

/**
 * TodoModal is responsible for displaying a modal to add a new todo for a specific day. 
 * The day is passed in as parameters and the modal is displayed when the show prop is true.
 * @param {Object} param0 
 * @returns 
 */
function TodoModal({ show, setShow, year, month, day }) {
    month = parseInt(month);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");
    // Removed the show state management from here and use props instead
    const [todos, setTodos] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });



    const onSubmit = (data) => {
        const todo = {
            title: data.title,
            description: data.description,
            userId: 2,
            dueDate: `${year}-${month}-${day}`,
            status: 0,
            priority: "high",
        };
        const result = TodoController.addTodo(todo);
        if (result.message === "Success") {
            setError(false);
            setSuccess(true);
            setMessage("Todo added successfully");
        }
        // If there is an error, show the error message
        setError(true);
        setSuccess(false);
        setMessage("An error occurred. Please try again");

    }



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
                    {error && <div className="alert alert-danger">{message}</div>}
                    {success && <div className="alert alert-success">{message}</div>}
                </div>
            </div>
        </div>
    );
}

export default TodoModal;