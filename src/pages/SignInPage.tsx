import React from 'react'
import FormStyle from '../styles/FormStyle';
import ButtonStyled from '../styles/ButtonStyle';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';

function SignInPage() {

  const { register, handleSubmit, formState: { errors } } = useForm();
    
  function onSubmit(data: any) {
    console.log( data )

    swal(
      {
        title: 'Welcome',
        text: 'You have successfully logged in',
        icon: 'success',
      }
    )
  }
    

  return (
    <div style={{ marginBlockStart: '7rem'}}>
      <FormStyle onSubmit={ handleSubmit(onSubmit) }>

          <input 
          type="email" 
          placeholder='Email'
          {...register('email', {required: true})} 
          />
          {errors.email &&  <span>Please input your email</span>}
  
          <input 
          type="password" 
          placeholder='Password' 
          {...register('password', {required: true, minLength: 10, maxLength: 15})}
          />
          {errors.password?.type === 'maxLength' &&  <span>The password is too long</span>}
          {errors.password?.type === 'minLength' &&  <span>The password is too short</span>}

        <div>
            <ButtonStyled> Log In</ButtonStyled>
        </div>

      </FormStyle>
    </div>
  )
}

export default SignInPage;