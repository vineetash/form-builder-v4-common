import React, { useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DefaultButton, IComboBoxOption } from '@fluentui/react';
import { FormGenerator } from 'react-reactive-form';
import { addButton, addCombo, addControlOntoForm, addText, addThisControl, removeThisControl } from './utilities/AddAndRemoveControls';

function App() {

  const [form, setform] = useState(<></>)
  const options: IComboBoxOption[] = [
    { key: 'A', text: 'Option A' },
    { key: 'B', text: 'Option B' },
    { key: 'C', text: 'Option C' },
    { key: 'D', text: 'Option D' },
  ];
  

  const formControls = new Map<string, any>()

  const [formControl, setFormControl] = useState()

// addThisControl(formControls, "text", addText())
// addThisControl(formControls, "button", addButton())
// addThisControl(formControls, "text1", addText())
// addThisControl(formControls, "button1", addButton())
let jsonObject = {}

// formControl.forEach((value, key) => {  
//   //@ts-ignore
//   jsonObject[key] = value  
// }); 
const [fieldConfig,setFieldConfig] = useState(({controls: jsonObject }))

const [generatedForm, setGeneratedForm] = useState(<></>)


  return (
    <div className="App">
      Form Builder

      <div className='controlPlane'>
        <form>
          <DefaultButton
            className="btn btn-link"
            type="button"
            onClick={() => {
              //@ts-ignore
              formControls["button"] = addButton()

              // formControls.set("button", addButton())
              // setFormControl({'text', addButton()})
              console.log('Form control button:', formControls)
              // setFormControl(addThisControl(formControls, "text", addText()))
              formControls.forEach((value, key) => {
                //@ts-ignore
                jsonObject[key] = value
              });
              setFieldConfig({ controls: jsonObject })
              // setGeneratedForm(GenerateForm(fieldConfig))
            }}

          >
            Button
          </DefaultButton>

          <DefaultButton text='Add text'
            className="btn btn-link"
            type="button"
            onClick={() => {
              //@ts-ignore
              formControls["text"] = addText()
              // formControls.set("text", addText())
              // setFormControl(formControls)
              console.log('Form control text:', formControls)
              // setFormControl(addThisControl(formControls, "text", addText()))
              formControls.forEach((value, key) => {
                //@ts-ignore
                jsonObject[key] = value
              });
              setFieldConfig({ controls: jsonObject })
              // fieldConfig = {controls: jsonObject }
              // setGeneratedForm(GenerateForm(fieldConfig))
            }}
          />

          <DefaultButton
            className="btn btn-link"
            type="button"
            label="Add combo"
            text="Add combo"
            onClick={() => {
              formControls.set("combo", addCombo())
              // setFormControl(formControls)
              console.log('Form control combo:', formControls)
              formControls.forEach((value, key) => {
                //@ts-ignore
                jsonObject[key] = value
              });
              setFieldConfig({ controls: jsonObject })
              // fieldConfig = {controls: jsonObject }
              // setGeneratedForm(GenerateForm(fieldConfig))
            }}
          />
        </form>
      </div>
      <div className="generatedform">
        {/* <h2>Simple Form</h2> */}
        <FormGenerator fieldConfig={fieldConfig} />
      </div>
      <div className='generatedform'>
        <form>
          {generatedForm}
        </form>
      </div>
    </div>
  );
}

export default App;
