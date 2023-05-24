export const DOMelements = {
    form : document.querySelector('#form'),    
    name: document.querySelector('#name'),
    phone: document.querySelector('#phone'),
    email: document.querySelector('#email'),
    product: document.querySelector('#product'),
    btnSubmit: document.querySelector('[type="submit"]'),

    clearInput(){
        this.name.value = '';
        this.phone.value = '';
        this.email.value = '';
        this.product.value = '';
    }
}



const testView = {
    name: document.querySelector('#name'),
    phone: document.querySelector('#phone'),
    email: document.querySelector('#email'),
    product: document.querySelector('#product'),
}

export function formData() {
    return {
        name: DOMelements.name.value,
        phone: DOMelements.phone.value,
        email: DOMelements.email.value,
        product: DOMelements.product.value,
    }
}

function showTest(testData) {
    testView.name.value = testData.name;
    testView.phone.value = testData.phone;
    testView.email.value = testData.email;
    testView.product.value = testData.product;
}

export default showTest;



