import Model from "../model.js";
import showTest from "./form.view.js";
import randomValue from './form.test-data.js';
import { DOMelements, formData } from "./form.view.js";
import ViewTable from "../table/table.view.js";

const model = new Model();
const viewTable = new ViewTable();

showTest(randomValue())

DOMelements.form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const formDate = formData()
    model.addNewAplications(formDate)
    DOMelements.clearInput();
    showTest(randomValue());
})
