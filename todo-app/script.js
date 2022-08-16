const btnForm = document.querySelector('.btnform')
const txtForm = document.querySelector('#todoTxt')

function add() {
    const listTodo = document.querySelector('.list-todo')
    
    const isEmpty = txtForm.value === ""
    if (!isEmpty) {
        listTodo.innerHTML += `
        <li>
            <input type="checkbox"  class="checkList">
            <input type="text" name="txtList" class="txtList" value="${txtForm.value}">
            <button class="btnlist">Delete</button>
        </li>
        `        
        txtForm.value = ""
        txtForm.focus()
    } else {
        alert('text your task!!!')
    }
    }

btnForm.addEventListener('click', () => {add()})
txtForm.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        btnForm.click();
    }
    console.log(event)
})