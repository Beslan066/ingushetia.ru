import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = ({ value, onChange }) => {
    const handleChange = (content) => {
        onChange(content);
    };

    return (
        <ReactQuill theme="snow" value={value} onChange={handleChange} />
    );
};

export default RichTextEditor;
