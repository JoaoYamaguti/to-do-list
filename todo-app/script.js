window.addEventListener('load', () =>{
    const form = document.querySelector('#formAdd')
    const txtForm = document.querySelector('#txtForm')
    const listTodo = document.querySelector('.list-todo')

    let todos = [] || JSON.parse(localStorage.getItem('todos'))

    form.addEventListener('submit', (event) => {   
        event.preventDefault()
        const isEmpty = txtForm.value == ""
        if (!isEmpty) {

            const todo = {
                'id' : listTodo.childElementCount,
                'content' : txtForm.value
            }

            todos.push(todo)
            localStorage.setItem('todos', JSON.stringify(todos))
            
            txtForm.value = ""
            txtForm.focus()
            showTodos()

        } else {
            alert('type your task!!!')
        }
    })

    showTodos()
})

function showTodos() {
    const listTodo = document.querySelector('.list-todo')
    listTodo.innerHTML = ""

    const todoList = JSON.parse(localStorage.getItem('todos'))

    console.log(todoList)
    

    todoList.forEach(item => {
        const li = document.createElement('li')
        li.setAttribute('id', `${item.id}`)
        
        const inputcheck = document.createElement('input')
        inputcheck.type ='checkbox'
        inputcheck.classList.add('checkList')
        li.appendChild(inputcheck)

        const inputtxt = document.createElement('input')
        inputtxt.type = 'text'
        inputtxt.classList.add('txtList')
        inputtxt.setAttribute('readonly', 'readonly')
        inputtxt.value = item.content
        li.appendChild(inputtxt)

        const btnDel = document.createElement('button')
        btnDel.type = 'button'
        btnDel.innerText = 'Delete'
        btnDel.classList.add('btnlist')
        li.appendChild(btnDel)

        listTodo.appendChild(li)

        btnDel.addEventListener('click', ()=>{
            let indexItem = todoList.indexOf(item)
            todoList.splice(indexItem, 1)
            localStorage.setItem('todos', JSON.stringify(todoList))
            listTodo.removeChild(li)
        })
    })
}