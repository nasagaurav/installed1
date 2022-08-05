import React from 'react';
import { useForm } from 'react-hook-form';

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
       
        <input placeholder="email" {...register('email', { required: true })} />
      
        {errors.email <span>email is required</span>}

        <form onSubmit={handleSubmit(onSubmit)}>
       
       <input placeholder="password" {...register('password', { required: true })} />
     
       {errors.password <span>password is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
}
export default Login;
