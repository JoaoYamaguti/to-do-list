const btnForm = document.querySelector('.btnform')
const txtForm = document.querySelector('#todoTxt')
const listTodo = document.querySelector('.list-todo')
const tasks = []

btnForm.addEventListener('click', () => {   
    const isEmpty = txtForm.value === ""
    let cont = (tasks.length + 1)
    if (!isEmpty) {
        tasks.push(`
        <li>
            <input type="checkbox"  class="checkList">
            <span class="txtList">${txtForm.value}</span>
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

function btndel(idnum) {
    tasks[idnum - 1] = ""
    listTodo.innerHTML = ""
    for (let i = 0; i < tasks.length; i++) {
        listTodo.innerHTML += tasks[i]
    }
    console.log(tasks)
}
