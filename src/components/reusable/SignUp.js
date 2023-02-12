import React, {useState}  from 'react'
import { Button, Form } from 'react-bootstrap'
import Validation from '../utils/Validation'
import TextInput from './reusable/TextInput'

const SignUp = () => {
 
      const [email,setEmail] = useState({
               value:'',
               name:'email',
               error: false,
               errorMessage: ''
      });

      const [password,setPassword] = useState({
        value:'',
        name:'password',
        error: false,
        errorMessage: ''
    })

const onChange = (setter) => (e) => {
        setter((state) => {
            return {
              ...state,
              value:e.target.value,
          };
         });
};

    const onBlur = (setter) => () => {
        setter((state) => {
            return {
                ...state,
                ...Validation(state.value,state.name)
            }
        })
    }
    const onFocus = (setter) => () => {
        setter((state) => {
            return {
                ...state,
                error:false
            }
        })
    }

    const onSubmit = (e) => {
        e.preventdefault();
        onBlur(setEmail)
        onBlur(setPassword)
    }

  return (
    <Form className='m-3' onSubmit={onSubmit}>
      <div className='mb-2'>SignUp form</div>
      <TextInput
       label="Email Address"
        type="email"
         disclaimer="Well never share your email with anyone else."
         {...email}
         onChange={onChange(setEmail)}
         onBlur={onBlur(setEmail)}
         onFocus={onFocus(setEmail)}
         required
         />
         <TextInput 
         label="Enter password"
         type="password"
         {...password}
         onChange={onChange(setPassword)}
         onBlur={onBlur(setPassword)}
         onFocus={onFocus(setPassword)}
         required
         />
         <Button variant='primary' type='submit'>Submit</Button>
    </Form>
  )
}

export default SignUp
