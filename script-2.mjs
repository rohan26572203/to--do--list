import { createTableRow, LOCAL_STORAGE_KEY, navbar, updateCompletedColumn, deleteSpecificRow } from './module.mjs';

function main() {

    const tBody = document.querySelector('#tBody');
    const importNavbar = document.querySelector('#importNavbar');

    importNavbar.innerHTML = navbar();

    const taskList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

    tBody.innerHTML = null;
    taskList.map((item, index) => {
        const row = createTableRow(index, item);
        tBody.innerHTML += row;
    });

    const completedBtns = document.querySelectorAll('.completedBtn');
    const deleteBtns = document.querySelectorAll('.deleteBtn');

    completedBtns.forEach((el) => {
        el.addEventListener('click', () => {
            updateCompletedColumn(taskList, +el.id);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(taskList));
            location.reload();
        });
    });

    deleteBtns.forEach((el) => {
        el.addEventListener('click', () => {
            console.log(el.name);
            console.log(taskList);
            deleteSpecificRow(taskList, +el.name);
            console.log(taskList);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(taskList));
            location.reload();
        })
    })


}

main();