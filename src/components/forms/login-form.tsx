import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../ui/input';
import Button from '../ui/button';

export function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email', { required: true })} placeholder='Email' />
      {errors.email && <span>This field is required</span>}
      <Input {...register('password', { required: true })} placeholder='Password' type='password' />
      {errors.password && <span>This field is required</span>}
      <Button type='submit'>Login</Button>
    </form>
  );
}
export default LoginForm;