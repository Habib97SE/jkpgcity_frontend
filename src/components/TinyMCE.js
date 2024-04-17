import React, { useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

function TinyMCE({ id, value, onChange, register, name, className }) {
    // Effect to register the TinyMCE field on component mount
    useEffect(() => {
        register(name); // Register the TinyMCE field with react-hook-form
    }, [register, name]);

    return (
        <Editor
            className={className}
            initialValue={value}
            apiKey="tkg3rwz1ge3xzpr1f7sm15oq6piiy18zo7cmotlvp7ju6gil"
            init={{
                height: 500,
                menubar: true,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table typography paste  code help wordcount'
                ],
                toolbar:
                    'undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | typography | removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                typography_langs: ['en', 'sv'],
                id: id
            }}
            onEditorChange={(content, editor) => {
                console.log('Content was updated:', content);
                onChange(content); // Update the parent component's state
            }}
        />
    );
}

export default TinyMCE;
