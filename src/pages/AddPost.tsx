import React from 'react'
import FormStyle from '../styles/FormStyle';
import ButtonStyled from '../styles/ButtonStyle';
import { database } from '../firebaseConfig';

function AddPost() {

    const[formData, setFormData] = React.useState({
        title: "",
        body: ""
    })

    const handleChange = (event: any) => {
        const{name, value} = event.target;

        setFormData( (prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

  return (
    <div style={{ marginBlockStart: '5rem'}}>

        <FormStyle>
            <input type="text" placeholder='Title...' name='title' onChange={handleChange} value={formData.title}/>
            
            <textarea rows={20} placeholder='Body..' name='body' onChange={handleChange} value={formData.body}></textarea>

            <div>
                <ButtonStyled>Post</ButtonStyled>
            </div>
        </FormStyle>
      
    </div>
  )
}

export default AddPost;