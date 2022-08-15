import React, { Fragment, ReactNode, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DefaultButton, IComboBoxOption, TextField } from '@fluentui/react';
import { FormGenerator } from 'react-reactive-form';
import { addButton, addCombo, addControlOntoForm, addText, addThisControl, removeThisControl } from './utilities/AddAndRemoveControls';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  useFormikContext,
  useField,
  useFormik,
  FieldArray
} from 'formik';

// const formSchema = {
//   name: {
//     type:"text",
//     label:"Name",
//     required: true
//   },
//   email: {
//     type:"email",
//     label:"Email",
//     required: true
//   },
//   role: {
//     type: "select",
//     label: "Role",
//     required: true,
//     options: [
//       {
//         label:"Admin",
//         value:"admin"
//       },
//       {
//         label: "User",
//         value: "user"
//       }
//     ]
//   }
// }

// export function SubmitButton(props: { [x: string]: any; title: any; }) {
//   const {title, ...rest}= props;
//   const {isSubmitting} = useFormikContext();
//   return(
//     <button type="submit" {...rest} disabled={isSubmitting}>{title}</button>
//   )
// }
// export function SelectField(props: { [x: string]: any; name: any; label: any; options: any; }) {
//   const {name, label, options, ...rest} = props;
//   return(
//     <>
//     {label && <label htmlFor={name}>{label}</label>}
//     <Field
//       component="select"
//       id={name}
//       className="form-control"
//       type="text"
//       name={name}>
//       <option value="" >Choose...</option>
//       {options.map((optn: { value: string | number | readonly string[] | undefined; label: any; }, index: any) => <option value={optn.value} label={optn.label || optn.value} />)}
//     </Field>
//     </>
//   )
// }


const initialValues = {
  Controls: [
    {
      heading: '',
      subheading: '',
      type:''
    },
  ],
};

const App = () => {


const [showEditTemplate, setShowEditTemplate] = useState(<></>)
const [title, setTitle] = useState("");
const [editValues, setEditValues] = useState(String)

let updatedTitle = ""
const onChangeEdit = (event: React.FormEvent<HTMLInputElement>) => {
  console.log('current values', event.currentTarget.value)
  updatedTitle = event.currentTarget.value
  // console.log('Title updated to ', {title})
  // setEditValues(event.currentTarget.value)
  // console.log('New title is ', editValues)
}

const handleSave = () => {
  setTitle(updatedTitle)
  console.log('New title is ', {editValues})
  setShowEditTemplate(<></>) 
}

const editTemplate = <div className="form-group col-sm-4">
<form>
  <label htmlFor="lastName">Change label for the field</label>
  <input
   type="text"
   className="form-control"
   id="editFirstName"
   name="Edit First Name"
   // onChange={(event) => onChangeEdit(event)}
   onInput={event => onChangeEdit(event)}
 />
 <button className="btn btn-primary mr-23"
       type='button'
       onClick={handleSave}
     >
       Save
 </button>
</form>
</div>

const handleChangeProperties = (index: number) => {
  setShowEditTemplate(editTemplate)
  // setTitle("New title");
}

return(
  <div>
    <h1>Add fields</h1>
 
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}

      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting }) => (
        <Form onSubmit={handleSubmit}>          
          <FieldArray name="Controls">
            {({ insert, remove, push }) => (
              <div className="form-group col-sm-2">
                <button
                  type="button"
                  className="secondary"
                  // onClick={() => push({ heading: '', subheading: '' })}
                  onClick={() => push({ heading: 'text input heading', subheading: 'text sub heading',type:'text' })}
                >
                  Add Text Input
                </button>
                <button
                  type="button"
                  className="secondary"
                  onClick={() => push({ heading: 'button heading', subheading: 'button sub heading', type:'button' })}
                >
                  Add Button
                </button>
                <p>

                </p>
                {values.Controls.length > 0 &&
                  values.Controls.map((control, index) => {
                    console.log(`Controls.${index}.type`)

                    return (
                      <div className="row" key={index}>
                        
                        <div className="col">
                          <label htmlFor={`Controls.${index}.heading`}>Title</label>
                          <Field
                            name={`Controls.${index}.heading`}
                            placeholder="Heading of the text field"
                            type="text"
                          />
                          <ErrorMessage
                            name={`Controls.${index}.heading`}
                            component="div"
                            className="field-error"
                          />
                        </div>
                        <div className="col">
                          <label htmlFor={`Controls.${index}.subheading`}>Sub-title</label>
                          <Field
                            name={`Controls.${index}.subheading`}
                            placeholder="Sub-heading of the text field"
                            type="subheading"
                          />
                          <ErrorMessage
                            name={`Controls.${index}.heading`}
                            component="div"
                            className="field-error"
                          />
                        </div>
                        <div className="form-group col-sm-2">
                          <button
                            className="btn btn-link"
                            type="button"
                          onClick={() => handleChangeProperties(index)}
                          >
                            Edit properties
                          </button>
                          
                          <button
                            className="btn btn-link"
                            type="button"
                            onClick={() => remove(index)}
                          >
                            -
                          </button>

                          
                        </div>
                      </div>
                      
                    )
                  })
                }

              </div>
            )}
          </FieldArray>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
)
};


export default App;
