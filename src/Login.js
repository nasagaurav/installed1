import react from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form'
import {toast} from 'react-toastify'

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => 
  // console.log(data);
  let condition = state.users.some(x=>x.email===data.email && x.password===data.password)
  let user = state.users.find(x=>x.email===data.email && x.password===data.password)
  if (condition){
              toast('login sucessfull')

  }
  else{
    toast('login failed')
  }
};

  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>login </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="email" {...register('email', { required: true })} />
        {errors.email && <span>email is required</span>}
        <input
          placeholder="password"
          {...register('password', { required: true })}
        />
        {errors.password && <p className="err">passoword is required</p >}

        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
