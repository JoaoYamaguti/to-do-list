window.addEventListener('load', () =>{
    const form = document.querySelector('#formAdd')
    const txtForm = document.querySelector('#txtForm')
    const listTodo = document.querySelector('.list-todo')
    
    form.addEventListener('submit', (e) => {   
        e.preventDefault()
        const isEmpty = txtForm.value == ""

        if (!isEmpty) {
            const li = document.createElement('li')
            
            const inputcheck = document.createElement('input')
            inputcheck.type ='checkbox'
            inputcheck.classList.add('checkList')
            li.appendChild(inputcheck)

            const inputtxt = document.createElement('input')
            inputtxt.type = 'text'
            inputtxt.classList.add('txtList')
            inputtxt.setAttribute('readonly', 'readonly')
            inputtxt.value = txtForm.value
            li.appendChild(inputtxt)

            const btnDel = document.createElement('button')
            btnDel.type = 'button'
            btnDel.innerText = 'Delete'
            btnDel.classList.add('btnlist')
            li.appendChild(btnDel)

            listTodo.appendChild(li)

            btnDel.addEventListener('click', ()=>{
                listTodo.removeChild(li)
            })
        } else {
            alert('type your task!!!')
        }
    })
})