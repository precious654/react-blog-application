import React from 'react'
import FormStyle from '../styles/FormStyle';
import ButtonStyled from '../styles/ButtonStyle';

function SignInPage() {

    const[ formData, setFormData] = React.useState({
        email: '',
        password: ''
    });

    interface data{
        target: {
            name: string,
            value: string
        }
    }
    
    function handleChange(event: data) {
        setFormData( (prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }
    
    console.log( formData );

  return (
    <div style={{ marginBlockStart: '7rem'}}>
      <FormStyle>
        <input type="email" name='email' placeholder='Email' onChange={ handleChange } />
        <input type="password" name='password' placeholder='Password' onChange={ handleChange } />

        <div>
            <ButtonStyled> Log In</ButtonStyled>
        </div>
      </FormStyle>
    </div>
  )
}

export default SignInPage;