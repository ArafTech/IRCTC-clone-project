import { useState } from "react";

const useForm = (initialState) => {
    const [formData, setFormData] = useState(initialState);

    // Handle Form input changes
    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };

    // Reset form to initial state
    const resetForm = () => {
        setFormData(initialState);
    };

    return [formData, handleChange, resetForm];
};

export default useForm;
