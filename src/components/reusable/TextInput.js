import React from 'react'
import { Form } from 'react-bootstrap'

const TextInput = (props) => {

  return (
    <Form.Group className="mb-3" controlId={ `form-basic-${props.name} `}>
      <Form.Label>{props.label} {props.required && <span className='text-danger'>*</span>}</Form.Label>
      <Form.Control placeholder={ `enter ${props.name} `}
      className={props.error && 'input-error border-danger'}
        type={props.type}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
         />
         {props.error & props.errorMessage && <div className='text-danger'>{props.errorMessage}</div>}
      <Form.Text className="text-muted">
        {props.disclaimer}
      </Form.Text>
    </Form.Group>
  )
}

export default TextInput
