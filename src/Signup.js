import react from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'


function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    let condition = state.users.some(x==>x.email===data.email)
    if (condition){
      toast('user already exist try with other credentials')
    }
    else{
      toast('signup successfully')
      navigate('/login')
    }
  };
  return (
    <div>
      <h1>Signup </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="email" {...register('email', { required: true })} />
        {errors.email && <span>email is required</span>}

        <input placeholder="name" {...register('name', { required: true })} />
        {errors.name && <span>name is required</span>}

        <input placeholder="phone" {...register('phone', { required: true })} />
        {errors.phone && <span>phone is required</span>}

        <input
          placeholder="password"
          {...register('password', { required: true })}
        />
        {errors.password && <p className="err">passoword is required</p>}

        <input type="submit" />
      </form>
    </div>
  );
}

export default Signup;
