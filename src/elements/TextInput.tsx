import React from 'react'
import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';

function TextInput() {
  return (
    <div className='textfield'>
      <h1>TextField</h1>
      <TextField label="Standard" />
      {/* <input 
      //   type="text"
      //   className="form-control"
      //   id="lastName"
      //   name="lastName"
      // // value={inputField.lastName}
      // // onChange={event => handleInputChange(index, event)}
      // />*/}
    </div>
  )
}

//@ts-ignore
export const TextSpecial = ({ meta: { label } }) => (
  <div>
    <TextField label={label} />
  </div>
);

export default TextInput