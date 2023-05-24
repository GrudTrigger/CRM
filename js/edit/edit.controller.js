/*

1. При нажатии кнопки "редактировать" данные в полях на странице редактировать должны заполняться данными из таблицы(модели)
2. Нужен метод в модели который будет отслеживать изменения в полях и сохранять обновленный объект под тем же ID
3. Обновить общую таблицу с заявками

*/

import Model from "../model.js";
import ViewEdit from "./edit.view.js";


const model = new Model();
const viewEdit = new ViewEdit();

const id = getRequestId();
const application = model.getAplicationById(id);
viewEdit.renderApplication(application);

viewEdit.elementsEdit.form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const data = viewEdit.getForm();
    model.updateApplication(data);
    window.location = './table.html' // переход после сабмита на страницу табле
    
})

function getRequestId () {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}
