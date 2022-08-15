import Button from "../elements/Button";
import Dropdown from "../elements/Dropdown";

//@ts-ignore
import TextInput, { TextSpecial } from "../elements/TextInput";

// export function addButton() {

//     const button = {
//         render: Button,
//         meta: {
//             label: "Submit",
//             placeholder: "Submit"
//             }
//         }

// // console.log('both components',test)
//     return button
// }


// export function addText() {
//     const text = {
    
//         render: TextSpecial,
//         meta: {
//             label: "Text",
//             placeholder: "Text"
//             }
//         }

//         return text
// }

export function addText() {
    const text = {
    
    
        render: TextSpecial,
        meta: {
            label: "Text",
            placeholder: "Text"
            }
        }

        return text
}

export function addCombo() {
    const text = {
    
    
        render: Dropdown,
        meta: {
            label: "Combo",
            placeholder: "Combo"
            }
        }

        return text
}

export function addButton() {

    const button = {
        render: Button,
        meta: {
            label: "Submit",
            placeholder: "Submit"
            }
        }

// console.log('both components',test)
    return button
}

//@ts-ignore
export function addControlOntoForm(form, control){
    if(control === 'Button'){
        form = { }
    }
    if(control === 'Text'){
        form = {form, addText}
    }
    return form
}
var i=0

//@ts-ignore
export function addThisControl(formControlMap, key,control){
    //@ts-ignore
    formControlMap.set(key,control)
    i++
}

export function removeThisControl(formControlMap :Map<string,{}>, controlId: string){
    formControlMap.delete(controlId)
    console.log('deleted :',controlId, formControlMap)
}