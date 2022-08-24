window.addEventListener('load', () =>{
    const form = document.querySelector('#formAdd')
    const txtForm = document.querySelector('#txtForm')
    const listTodo = document.querySelector('.list-todo')

    let todos = [] || JSON.parse(localStorage.getItem('todos'))
    showTodos()

    form.addEventListener('submit', (event) => {   
        event.preventDefault()
        const isEmpty = txtForm.value == ""
        if (!isEmpty) {
            todos = JSON.parse(localStorage.getItem('todos')) || []

            const todo = {
                'content' : txtForm.value,
                'done' : false
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
})

function showTodos() {
    const listTodo = document.querySelector('.list-todo')
    listTodo.innerHTML = ""

    let todos = JSON.parse(localStorage.getItem('todos')) || []

    console.log(todos)
    

    todos.forEach(item => {
        const li = document.createElement('li')
        li.setAttribute('id', `${item.id}`)
        
        const inputcheck = document.createElement('input')
        inputcheck.type ='checkbox'
        inputcheck.classList.add('checkList')
        if (item.done) {
            inputcheck.checked = true
        }
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
            todos = todos.filter(t => t!= item)
            localStorage.setItem('todos', JSON.stringify(todos))
            listTodo.removeChild(li)
        })
        
        let indexItem = todos.indexOf(item)
        inputcheck.addEventListener('change', () => {
            if (inputcheck.checked) {
                todos[indexItem].done = true
            } else {
                todos[indexItem].done = false
            }
            localStorage.setItem('todos', JSON.stringify(todos))
        })
    })
}