const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem('items')) || [];

const checkAllButtonElement = document.querySelector('.checkAll');
const uncheckAllButtonElement = document.querySelector('.unCheckAll');
const deleteAllButtonElement = document.querySelector('.deleteAll');

function addItem(event) {
    event.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
        <label for="item${i}">${plate.text}</label>
        </li>
        `;
    }).join('');
}

function toggleDone(event) {
    if (!event.target.matches('input')) return;
    const element = event.target;
    const index = element.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

const checkAll = () => {
    items.forEach((value) => value.done = true);
    populateList(items, itemsList);
}

const unCheckAll = () => {
    items.forEach((value) => value.done = false);
    populateList(items, itemsList);
}

const deleteAll = () => {
    localStorage.clear();
    items = [];
    populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

checkAllButtonElement.addEventListener('click', checkAll);
uncheckAllButtonElement.addEventListener('click', unCheckAll);
deleteAllButtonElement.addEventListener('click', deleteAll);

populateList(items, itemsList);