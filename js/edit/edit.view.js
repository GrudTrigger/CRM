export default class ViewEdit{
    constructor(aplication){
        this.aplication = aplication
    }

    elementsEdit = {
        form: document.querySelector('#form'),
        number: document.querySelector('#number'),
        id: document.querySelector('#id'),
        date: document.querySelector('#date'),
        product: document.querySelector('#product'),
        name: document.querySelector('#name'),
        email: document.querySelector('#email'),
        phone: document.querySelector('#phone'),
        status: document.querySelector('#status'),
    }

    renderApplication(aplication){
        this.elementsEdit.number.innerText = aplication.id;
        this.elementsEdit.id.value = aplication.id;
        this.elementsEdit.date.innerText = this.correcteDate(aplication.date);
        this.elementsEdit.product.value = aplication.product;
        this.elementsEdit.name.value = aplication.name;
        this.elementsEdit.email.value = aplication.email;
        this.elementsEdit.phone.value = aplication.phone;
        this.elementsEdit.status.value = aplication.status;
    }

    correcteDate(date){
        const originalDate = new Date(date);
        const day = originalDate.getDate();
        const month = originalDate.getMonth() + 1; // месяц начинается с 0
        const year = originalDate.getFullYear();
        const hours = originalDate.getHours();
        const minuts = originalDate.getMinutes();
        const seconds = originalDate.getSeconds();
        
        const formattedDay = day < 10 ? "0" + day : day;
        const formattedMonth = month < 10 ? "0" + month : month;
        const formattedHours = hours < 10 ? "0" + hours: hours;
        const formattedMinutes = minuts < 10 ? "0" + minuts: minuts;
        const formattedSeconds = seconds < 10 ? "0" + seconds: seconds;
        const formattedDate = `${formattedDay}.${formattedMonth}.${year} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        
        return formattedDate
    }

    getForm(){
        return new FormData(this.elementsEdit.form) // ключ | значения формы
    }
}