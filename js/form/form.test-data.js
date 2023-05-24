class TestData {
    constructor(name, phone, email, product){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.product = product;
    }
}

let test = [
    new TestData('Надежда Иванова', +79671168227, 'test@mail.ru', 'course-html'),
    new TestData('Алексей Голосов', +89150559839, 'test@mail.ru', 'course-html'),
    new TestData('Антонов Антон', +71132223322, 'test@mail.ru', 'course-js'),
    new TestData('Мария Евсеева', +89992222222, 'test@mail.ru', 'course-vue'),
    new TestData('Надежда Тихомирова', +77775556633, 'test@mail.ru', 'course-php'),
    new TestData('Виктория Киселева', +81112223344, 'test@mail.ru', 'course-php'),
    new TestData('Андрей Спиридонов', +78983456781, 'test@mail.ru', 'course-wordpress'),
]

function getRandomInt(int) {
    return Math.floor(Math.random() * int)
}

export default function randomValue(){
    const ind = getRandomInt(test.length);
    return test[ind]
}


