import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const FormHook = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return <>
    <div>
    <h1>Form Hook</h1>
    <form className='form' onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <input className='form-control' {...register("firstName")} placeholder="First name" />
      <select className='form-control' {...register("category", { required: true })}>
        <option value="">Select...</option>
        <option value="A">Introvert</option>
        <option value="B">Extrovert</option>
      </select>
      <textarea className='form-control' {...register("aboutYou")} placeholder="About you" />
      <p>{data}</p>
      <input type="submit" />
    </form>

    {console.log(data)};
    </div>
    </>;
};

export default FormHook ;