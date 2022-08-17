const btnForm = document.querySelector('.btnform')
const txtForm = document.querySelector('#todoTxt')
const listTodo = document.querySelector('.list-todo')
const tasks = []

let cont = 0


btnForm.addEventListener('click', () => {   
    const isEmpty = txtForm.value === ""
    if (!isEmpty) {
        tasks.push(`
        <li id="${cont}">
            <input type="checkbox"  class="checkList">
            <input type="text" name="txtList" class="txtList" value="${txtForm.value}">
            <button class="btnlist" onclick="btndel(${cont})">Delete</button>
        </li>
        `)       
        txtForm.value = ""
        txtForm.focus()
        listTodo.innerHTML = ""
        for (let i = 0; i < tasks.length; i++) {
            listTodo.innerHTML += tasks[i]   
        }
    } else {
        alert('text your task!!!')
    }
    cont++  
})
txtForm.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        btnForm.click();
    }
    console.log(event)
})

console.log(btnDelete)


function btndel(idnum) {
    tasks[idnum] = ""
    listTodo.innerHTML = ""
    for (let i = 0; i < tasks.length; i++) {
        listTodo.innerHTML += tasks[i]
    }
    console.log(tasks)
}


