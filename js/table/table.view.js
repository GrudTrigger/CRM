export default class ViewTable{
    constructor() {
    }

    renderApplication(applications){
        this.element.table.innerHTML = '';

        const badges = {
            new: 'badge-danger',
            inwork: 'badge-warning',
            complete: 'badge-success'
        };

        const statusObg = {
            new: 'Новая',
            inwork: 'В работе',
            complete: 'Завершена'
        };

        const productObg = {
            'course-html': 'Курс по верстке',
            'course-js': 'Курс по JavaScript',
            'course-vue': 'Курс по VUE JS',
            'course-php': 'Курс по PHP',
            'course-wordpress': 'Курс по WordPress',
        };


        for(let application of applications){
            const appHTML = `
            <tr>
                <th scope="row">${application.id}</th>
                <td>${new Date(application.date).toLocaleDateString()}</td>
                <td>${productObg[application.product]}</td>
                <td>${application.name}</td>
                <td>${application.email}</td>
                <td>${application.phone}</td>
                <td>
                    <div class="badge badge-pill ${badges[application.status]}">${statusObg[application.status]}</div>
                </td>
                <td>
                    <a href="edit.html?id=${application.id}"}>Редактировать</a>
                </td>
            </tr>
            `
            this.element.table.insertAdjacentHTML('beforeend', appHTML)
        }
    }

    updateStatus(value) {
        this.element.topStatusBar.querySelectorAll('a').forEach((a) => a.classList.remove('active'));
        this.element.topStatusBar.querySelector(`a[data-value="${value}"]`).classList.add('active');

        this.element.leftStatusBar.forEach((a) => a.classList.remove('active'));
        this.element.leftPanelNav.querySelector(`a[data-value="${value}"]`).classList.add('active');
    }

    renderBadge(num) {
        if(num === 0) {
            this.element.badge.innerHTML = ''
        }else {
            this.element.badge.innerText = num
        }

    }

    updateFilter(filter) {
        this.element.productSelect.value = filter.product;

        this.element.topStatusBar.querySelectorAll('a').forEach((a) => a.classList.remove('active'));
        this.element.topStatusBar.querySelector(`a[data-value="${filter.status}"]`).classList.add('active');

        this.element.leftStatusBar.forEach((a) => a.classList.remove('active'));
        this.element.leftPanelNav.querySelector(`a[data-value="${filter.status}"]`).classList.add('active');
    }

    element = {
        productSelect: document.querySelector('#productSelect'),
        table: document.querySelector('#tbody'),
        topStatusBar: document.querySelector('#topStatusBar'),
        leftStatusBar: document.querySelectorAll('[data-role="left-status"]'),
        leftPanelNav: document.querySelector('.left-panel__navigation'),
        badge: document.querySelector('#badge-new'),
    }
}
