
function addTodo() {
    let ctr = 1;
    const inputEl = document.querySelector('input');
    value = inputEl.innerHTML.value;

    const btnEl = document.querySelector('button');

    newEl = document.createElement('div');
    newEl.setAttribute('id', ctr);

    spanEl = document.createElement('span');
    spanEl.innerHTML = value;
    deleteBtn = document.createElement('button');

    newEl.appendChild(spanEl);
    newEl.appendChild(deleteBtn);

    const parent = document.querySelector('.main');

    parent.appendChild(newEl)

}