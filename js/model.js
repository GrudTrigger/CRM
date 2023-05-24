export default class Model {
    constructor(){
        this.applications = [];
        this.loadFromLocalStorage();
        this.filter = this.loadFilter();
    }

    updateDataApp(){
        const filteredApp = this.filterApplications(this.filter);
        return filteredApp
    }

    loadFromLocalStorage() {
        const data = localStorage.getItem('aplications');
        if(data) {
            this.applications = JSON.parse(data);
        }
    }

    loadFilter() {
        let filter = {
            product: 'all',
            status: 'all'
        }
        if(localStorage.getItem('filter')){
            filter = JSON.parse(localStorage.getItem('filter'));
        }

        return filter
    }

    saveToLocalStorage() {
        localStorage.setItem('aplications', JSON.stringify(this.applications));
    }

    addNewAplications(formDate){
        let status = 'new';
        let id = 1;
        if(this.applications.length > 0){
            id = this.applications[this.applications.length - 1]['id'] + 1;
        }

        const newAplications = {
            id: id,
            ...formDate,
            date: new Date().toISOString(),
            status: status,
        }

        this.applications.push(newAplications);
        this.saveToLocalStorage();
        return newAplications;
    }

    getAplicationById(id){
        return this.applications.find((item)=>item.id == id)
    }

    updateApplication(app){
        const application = this.getAplicationById(app.get('id')); // get - метод FormDate

        //Обновление данных заявки
        application.name = app.get('name');
        application.email = app.get('email');
        application.phone = app.get('phone');
        application.product = app.get('product');
        application.status = app.get('status');
        this.saveToLocalStorage();
    }

    filter = {
        product: 'all',
        status: 'all'
    }

    changeFilter(property, value){
        this.filter[property] = value;
        localStorage.setItem('filter', JSON.stringify(this.filter))
        return this.filter
    }

    filterApplications(filter){
        let filteredApplications;

        if(filter.product !== 'all'){
            filteredApplications = this.applications.filter((item) =>item.product === filter.product);
        }else {
            filteredApplications = [...this.applications]
        }

        if(filter.status !== 'all') {
            filteredApplications = filteredApplications.filter((item) => item.status === filter.status)
        }

        return filteredApplications;
    }

    countNewApplications() {
        const newApplications = this.applications.filter((app) => app.status === "new");
        return newApplications.length
    }

    getFilter() {
        return {...this.filter}
    }
}

