import React from 'react'
import FormStyle from '../styles/FormStyle';
import ButtonStyled from '../styles/ButtonStyle';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

function SignUpPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(data: any) {
       console.log( data );

       swal(
        {
            title: 'Welcome',
            text: 'You have signed up sucessfully',
            icon: 'success',
        }
       )
    }

  return (
    <div style={{ marginBlockStart: '7rem'}}>
        <FormStyle onSubmit={ handleSubmit(onSubmit) }>
            <input 
            type="text" 
            placeholder='FirstName' 
            {...register('firstname', { required: true })}
            />
            {errors.firstname &&  <span>Please input your firstname</span>}

            <input 
            type="text" 
            placeholder='LastName'
            {...register('lastname', { required: true })} 
            />
            {errors.lastname &&  <span>Please input your lastname</span>}

            <input 
            type="email" 
            placeholder='Email' 
            {...register('email', { required: true })}
            />
            {errors.email &&  <span>Please input your email</span>}

            <input 
            type="password" 
            placeholder='Password'
            {...register('password', { required: true, minLength: 10, maxLength: 15})} 
            />
            {errors.password?.type === 'required' &&  <span>Please input your password</span>}
            {errors.password?.type === 'minLength' &&  <span>Your password is too short</span>}
            {errors.password?.type === 'maxLength' &&  <span>Your password is too long</span>}

            <div>
                <ButtonStyled> Sign Up</ButtonStyled>
            </div>
        </FormStyle>
    </div>
  )
}

export default SignUpPage;