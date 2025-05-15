
const listUl = document.getElementById("listWork");
let dataWork = {}
let nextTaskId = 1;
function showdatawork(){
    listUl.innerHTML = "";
    for (const key in dataWork) {
        listUl.innerHTML+=dataWork[key];

    }
}
function addWork(){
    let numberWork = nextTaskId;
    nextTaskId++;
    const work = prompt("Введите задачу и нажмите ок");
    const buttonDel = `<button  onclick='delelem(${numberWork})'> Удалить</button>`;
    const buttonDon = `<button onclick='complElem(${numberWork})'> Выполнено</button>`;
    let htmlelem=`<li id="${numberWork}">`+numberWork+"<span>"+work+"</span>"+ buttonDel+buttonDon+"</li>";
    dataWork[numberWork] = htmlelem;
    console.log(dataWork);
    showdatawork();
}

function delelem(numberWork){
    delete dataWork[numberWork];
    showdatawork();
}
function complElem(numberWork){
    
    document.getElementById(numberWork).children[0].classList.toggle("done")
   
}

/*Рекомендации по улучшению:
Разделение данных и представления: Храните задачи как массив объектов, где каждый объект содержит данные о задаче (например, { id: 1, text: "Сделать что-то", completed: false }). Функция showdatawork будет генерировать HTML на основе этого массива.
Генерация уникальных ID: Используйте простой инкрементируемый счетчик или более надежные методы генерации ID.
Безопасное создание HTML: Используйте методы DOM (document.createElement, appendChild, textContent) или шаблонные строки с осторожностью (экранируйте пользовательский ввод, если он вставляется как HTML, или используйте textContent).
Пользовательский интерфейс: Замените prompt на HTML-форму.
Обработка событий: Вместо добавления onclick атрибутов прямо в HTML, рассмотрите возможность использования addEventListener в JavaScript. Для списков часто применяют делегирование событий: один обработчик событий вешается на родительский элемент (listUl), а внутри него определяется, по какому дочернему элементу был клик. Это более производительно, особенно для длинных списков.
Стилизация: Класс done для выполненных задач — это хорошо. Убедитесь, что у вас есть соответствующие CSS-правила для этого класса.
Надеюсь, этот анализ будет полезен! Если у вас есть какие-либо вопросы или вы хотите углубиться в какой-либо аспект, дайте знать.*/