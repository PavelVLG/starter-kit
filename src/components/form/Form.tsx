import React from "react";
import { useForm } from "react-hook-form";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

export const  Form: React.FC = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data: any) => console.log(data);

    console.log(watch("Password"));

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="your name" {...register("Login")} />
            <input {...register("Password", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" />
        </form>
    );
}