import React from 'react'
import FormStyle from '../styles/FormStyle';
import ButtonStyled from '../styles/ButtonStyle';

function SignUpPage() {

    const[ formData, setFormData] = React.useState({
        firstname: '',
        lastname: '',
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
            <input type="text" name='firstname' placeholder='FirstName' onChange={ handleChange } />
            <input type="text" name='lastname' placeholder='LastName' onChange={ handleChange } />
            <input type="email" name='email' placeholder='Email' onChange={ handleChange } />
            <input type="password" name='password' placeholder='Password' onChange={ handleChange } />

            <div>
                <ButtonStyled> Sign Up</ButtonStyled>
            </div>
        </FormStyle>
    </div>
  )
}

export default SignUpPage;