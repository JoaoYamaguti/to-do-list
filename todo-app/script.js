const txtForm = document.querySelector('#todoTxt')
const btnForm = document.querySelector('.btnform')
const tasks = []
const listTodo = document.querySelector('.list-todo')

function showList() {
    listTodo.innerHTML = ""
    tasks.forEach(element => {
        listTodo.innerHTML += element.tags
    })
}

btnForm.addEventListener('click', () => {   
    const isEmpty = txtForm.value === ""
    if (!isEmpty) {
        tasks.push({id : tasks.length, tags : `<li><input type="checkbox" class="checkList"><span class="txtList">${txtForm.value}</span><button class="btnlist" onclick="deleteLi(${tasks.length})">Delete</button></li>`})
        txtForm.value = ""
        txtForm.focus()
        showList()
        console.log(tasks)
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
})


function deleteLi () {
    console.log()

    const btnList = document.querySelectorAll('.btnList')
    btnList.forEach(item => {
        const txtItem = item.parentNode.innerHTML
        const txthtml = `<li>${txtItem}</li>`
        console.log(txthtml)
        const indextasks = tasks.indexOf(txthtml)
        console.log(indextasks)
        tasks.splice(indextasks, 1)
        showList()
    })
}

listTodo.addEventListener('change', (event) =>{
    console.log(event)

    const btnsDelete = document.querySelectorAll('.btnlist')
    console.log(btnsDelete)

    btnsDelete.forEach(item => {
        console.log(item)
        item.addEventListener('click', () => {
            const txtItem = item.parentNode.innerHTML
            const txthtml = `<li>${txtItem}</li>`
            console.log(txthtml)
            const indextasks = tasks.indexOf(txthtml)
            console.log(indextasks)
            tasks.splice(indextasks, 1)
            showList()
        })
    })

    // const checkTask = document.querySelectorAll('.checkList')
    // checkTask.forEach(item => {
    //     item.addEventListener('change', () => {

    //         const txtItem = item.parentNode.innerHTML
    //         const txthtml = `<li>${txtItem}</li>`
    //         const indextasks = tasks.indexOf(txthtml)
    
    //         const itemCheck = item.checked
    //         if(itemCheck) {
    //             const strg = txthtml.split('<input type="checkbox" class="checkList">')
    //             strg.splice(1, 0, '<input type="checkbox" class="checkList" checked>')
    //             let txtli = ''
    //             strg.forEach(i =>{
    //                 txtli += i
    //             })
    //             tasks[indextasks] = txtli
    //         } else {
    //             const strg = txthtml.split('<input type="checkbox" class="checkList" checked>')
    //             strg.splice(1, 0, '<input type="checkbox" class="checkList">')
    //             let txtli = ''
    //             strg.forEach(i =>{
    //                 txtli += i
    //             })
    //             tasks[indextasks] = txtli
    //         }
    //     })
    // })
 
})
