import React from 'react';
import { useForm } from 'react-hook-form';

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="name" {...register('name')} />
        {errors.name && <p>name required</p>}

        <input defaultValue="email" {...register('email')} />
        {errors.email && <p>email required</p>}
        <input defaultValue="phone" {...register('phone')} />
        {errors.phone && <p>phone required</p>}
        <input defaultValue="password" {...register('password')} />
        {errors.password && <p>password required</p>}

        <input type="submit" />
      </form>
    </div>
  );
}
export default Signup;
