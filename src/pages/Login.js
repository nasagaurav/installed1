import React from 'react';
import { useForm } from 'react-hook-form';

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
  } console.log('not found' formData);

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
