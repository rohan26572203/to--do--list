//Constants
export const LOCAL_STORAGE_KEY = 'taskList';

export const cleanInputBox = (...inputBoxes) => {
    for (const inputBox of inputBoxes) {
        inputBox.value = null;
    }
}

export const dataAddition = ({ quantity, priority, LOCAL_STORAGE_KEY, taskList, task }) => {
    const payload = {
        task: task.value,
        quantity: quantity.value,
        priority: priority.value,
        completed: false
    }
    if (payload.task === '' || payload.quantity === '') {
        alert('Error: Field(s) are empty')
    } else {
        taskList.push(payload);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(taskList));
        cleanInputBox(task, quantity);
    }
}

export const createTableRow = (index, { task, quantity, priority, completed }) => {
    return (
        `<tr>
        <td>${index + 1}</td>
        <td>${task}</td>
        <td>${quantity}</td>
        <td>${priority}</td>
        <td><button id="${index}" class="completedBtn">${completed}</button></td>
        <td><button name="${index}" class="deleteBtn">Delete</button></td>
    </tr>`
    )
};

export const navbar = () => {
    return (
        `<div id="navbar">
        <a href="display.html">Todo List</a>
        <a href="index.html">Todo Task Add</a>
    </div>`
    )
};

export const updateCompletedColumn = (data, index) => {
    data[index].completed = !data[index].completed;
}

export const deleteSpecificRow = (data, index) => {
    console.log('index:', index)
    data.splice(index, 1);
}