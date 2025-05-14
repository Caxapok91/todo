
const listUl = document.getElementById("listWork");
let dataWork = {}

function showdatawork(){
    listUl.innerHTML = "";
    for (const key in dataWork) {
        listUl.innerHTML+=dataWork[key];

    }
}
function addWork(){
    let numberWork = Object.keys(dataWork).length;
    console.log(numberWork)
    numberWork++;
    const work = prompt("Введите задачу и нажмите ок");
    const buttonDel = `<button  onclick='delelem(${numberWork})'> Удалить</button>`;
    const buttonDon = `<button onclick='complElem(${numberWork})'> Выполнено</button>`;
    let htmlelem=`<li id="${numberWork}">`+numberWork+work+ buttonDel+buttonDon+"</li>";
    dataWork[numberWork] = htmlelem;
    console.log(dataWork);
    showdatawork();
}

function delelem(numberWork){
    delete dataWork[numberWork];
    showdatawork();
}
function complElem(numberWork){
    
    document.getElementById(numberWork).classList.toggle("done")
}