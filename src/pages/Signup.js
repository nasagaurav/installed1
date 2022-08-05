import React from 'react';
import { useForm } from 'react-hook-form';
import { signupUser,ifEmailExists } from '../services';
import {toast} from 'react-toastify'
import {useSelector,useDispatch} from 'react-redux'


function Signup() {
  const state = useSelector(s=>s);
  const {users}= state;
  const dispatch= useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
  if (isEmailExists(users,data))
  {
    //failed to signup
  }
  else {
    //signup done
  }
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
