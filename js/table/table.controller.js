import Model from "../model.js";
import ViewTable from "./table.view.js";


const model = new Model();

let view = new ViewTable();


view.renderApplication(model.updateDataApp());
console.log(model.updateDataApp())
const count = model.countNewApplications();
view.renderBadge(count);

view.element.productSelect.addEventListener('change', ()=>{
    const filter = model.changeFilter('product', view.element.productSelect.value)
    const filteredApplications = model.filterApplications(filter);
    view.renderApplication(filteredApplications)
})

view.element.topStatusBar.addEventListener('click', (event) =>{
    const filter = model.changeFilter('status', event.target.dataset.value)
    const filteredApplications = model.filterApplications(filter);
    view.renderApplication(filteredApplications);
    view.updateStatus(event.target.dataset.value)
})

view.element.leftStatusBar.forEach(link => {
    link.addEventListener('click', (event) => {
        const filter = model.changeFilter('status', event.target.dataset.value)
        const filteredApplications = model.filterApplications(filter);
        view.renderApplication(filteredApplications);
        view.updateStatus(event.target.dataset.value)
    })
})


let filter = model.getFilter();
view.updateFilter(filter);