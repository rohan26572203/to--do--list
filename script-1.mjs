import { navbar, dataAddition, LOCAL_STORAGE_KEY } from './module.mjs';

function main() {

    const task = document.querySelector('#task');
    const quantity = document.querySelector('#quantity');
    const priority = document.querySelector('#priority');
    const submitBtn = document.querySelector('#submitBtn');
    const importNavbar = document.querySelector('#importNavbar');
    importNavbar.innerHTML = navbar();

    const taskList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

    submitBtn.addEventListener('click', () => {
        const values = { taskList, task, quantity, priority, LOCAL_STORAGE_KEY };
        dataAddition(values);

    })
}

main();