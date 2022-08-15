import React from 'react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';

function Button() {
  return (
    <div className='button'>
      {/* <h1>Button</h1> */}
      <DefaultButton
        className="btn btn-link"
        type="button"
      //onClick={() => handleAddFields()}
      
      >
        Fluent Button
      </DefaultButton>
    </div>
  )
}

export default Button