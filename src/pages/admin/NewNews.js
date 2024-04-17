import React, {useState} from "react";
import { useForm} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {newNewsForm} from "../../utils/form-fields";
import TinyMCE from "../../components/TinyMCE";


const schema = yup.object().shape({
    title: yup.string().required("Title is required").min(5, "Title must be at least 5 characters").max(100, "Title must be at most 100 characters"),
    content: yup.string().required("Content is required").min(20, "Content must be at least 20 characters"),
    slug: yup.string().required("Slug is required").matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be kebab case (slug)"),
    image: yup.string().required("Image is required").url("Image must be a valid URL"),
    category: yup.string().required("Category is required"),
    summary: yup.string().required("Summary is required").min(20, "Summary must be at least 20 characters").max(200, "Summary must be at most 200 characters"),
    published: yup.boolean().required("Published is required"),
});


function NewNews() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [slug, setSlug] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [summary, setSummary] = useState("");
    const [published, setPublished] = useState(false);


const onSubmit = (data) => {
    console.log(data);
}

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
            <h1>New News</h1>
            <p>Add news</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group my-4">
                    <label htmlFor={newNewsForm.title.id}>{newNewsForm.title.label}</label>
                    <input
                        {...register("title")}
                        name={newNewsForm.title.id}
                        type={newNewsForm.title.type}
                        className={`form-control ${errors.title ? "is-invalid" : ""}`}
                        placeholder={newNewsForm.title.placeholder}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {errors.title && <p className="text-danger">{errors.title.message}</p>}
                    </div>
                        <div className="form-group my-4">
                    <label>{newNewsForm.content.label}</label>
                    <TinyMCE className={`form-control ${errors.content ? "is-invalid" : ""}`}
                        {...register("content")}
                        name={newNewsForm.content.id}
                        value={content}
                        onChange={(e) => setContent(e.target.getContent())}
                    />
                    {errors.content && <p className={"text-danger"}>{errors.content.message}</p>}
                </div>
                <div className="form-group my-4">
                    <label htmlFor={newNewsForm.slug.id}>{newNewsForm.slug.label}</label>
                    <input
                        {...register("slug")}
                        name={newNewsForm.slug.id}
                        type={newNewsForm.slug.type}
                        id={newNewsForm.slug.id}
                        className={`form-control ${errors.slug ? "is-invalid" : ""}`}
                        placeholder={newNewsForm.slug.placeholder}
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                    />
                    {errors.slug && <p className={"text-danger"}>{errors.slug.message}</p>}
                </div>
                <div className="form-group my-4">
                    <label htmlFor={newNewsForm.image.id}>{newNewsForm.image.label}</label>
                    <input
                        {...register("image")}
                        name={newNewsForm.image.id}
                        type={newNewsForm.image.type}
                        id={newNewsForm.image.id}
                        accept={newNewsForm.image.accept}
                        className={`form-control ${errors.image ? "is-invalid" : ""}`}
                        placeholder={newNewsForm.image.placeholder}
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    {errors.image && <p className={"text-danger"}>{errors.image.message}</p>}
                </div>
                <div className="form-group my-4">
                    <label htmlFor={newNewsForm.category.id}>{newNewsForm.category.label}</label>
                    <select
                        {...register("category")}
                        name={newNewsForm.category.id}
                        id={newNewsForm.category.id}
                        className={`form-control ${errors.category ? "is-invalid" : ""}`}
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="technology">Technology</option>
                        <option value="science">Science</option>
         npm               <option value="sport">Sport</option>
                    </select>
                    {errors.category && <p className={"text-danger"}>{errors.category.message}</p>}
                </div>
                <div className="form-group my-4">
                    <label htmlFor={newNewsForm.summary.id}>{newNewsForm.summary.label}</label>
                    <textarea
                        {...register("summary")}
                        name={newNewsForm.summary.id}
                        id={newNewsForm.summary.id}
                        className={`form-control ${errors.summary ? "is-invalid" : ""}`}
                        placeholder={newNewsForm.summary.placeholder}
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                    />
                    {errors.summary && <p className={"text-danger"}>{errors.summary.message}</p>}
                </div>
                <div className="form-group my-1">
                    <label htmlFor={newNewsForm.published.id}>{newNewsForm.published.label}</label>
                    <select
                        {...register("published")}
                        name={newNewsForm.published.id}
                        id={newNewsForm.published.id}
                        className={`form-control ${errors.published ? "is-invalid" : ""}`}
                        value={published}
                        onChange={(e) => setPublished(e.target.value)}
                    >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>

                    {errors.published && <p className={"text-danger"}>{errors.published.message}</p>}
                </div>
                <button type="submit" className="btn btn-primary">
                    Add News
                </button>
            </form>
        </div>
    );
}

export default NewNews;