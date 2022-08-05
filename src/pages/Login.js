import React from 'react';
import { useForm } from 'react-hook-form';
import {useSelector, usedispatch} from 'react-redux'
import {toast} from 'react-toastify'
import {useExists,usereDetails } from '../services'

function Login() {
  const state = useSelector (s=>s); 
  const dispatch = useDispatch();
  const {users} = state;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) =>{
    if (usereExists(user,formData ))
    console.log (userDetails,(users,formData));
    else 
    toast('not found'+formData);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
       
        <input placeholder="email" {...register('email', { required: true })} />
      
        {errors.email && <span>email is required</span>}

       
       <input placeholder="password" {...register('password', { required: true })} />
     
       {errors.password && <span>"password is required" </span>}

        <input type="submit" />
      </form>
    </div>
  );
}
export default Login;
