import React from 'react'
import { ComboBox, IComboBoxOption, IComboBoxStyles } from '@fluentui/react';

function Dropdown() {
  const options: IComboBoxOption[] = [
    { key: 'A', text: 'Option A' },
    { key: 'B', text: 'Option B' },
    { key: 'C', text: 'Option C' },
    { key: 'D', text: 'Option D' },
  ];
  return (
    <div className='dropdown'>
      <ComboBox  defaultSelectedKey="C"
        label="Combobox with inline options list"
        options={options}
        calloutProps={{ doNotLayer: true }} />
  </div>
  )
}

export default Dropdown