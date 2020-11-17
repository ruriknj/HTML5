let data = [{
    id: 1,
    title: "Estudar HTML"
}, {
    id: 2,
    title: "Estudar CSS"
}, {
    id: 3,
    title: "Estudar JavaScript"
}, {
    id: 4,
    title: "Estudar PHP"
}];

function renderTudo() {

document.querySelector('.todo').innerHTML = '';

data.forEach(task => {

    let li = document.createElement('li');
    
    li.innerHTML = 
    `<input type="checkbox" id="task-${task.id}">
    <label for="task-${task.id}">${task.title}</label>
    <button type = "button">x</button>
    `;

    li.querySelector('input').addEventListener('change', e => {

        if(e.target.checked) {
            li.classList.add('complete');
        } else {
            li.remove('complete');
        }
    });

    li.querySelector('button').addEventListener('click', e => {
        let button = e.target;
        let li = button.parentNode;
        let input = li.querySelector('input');
        let id  = input.id;
        let idArray = id.split('-');
        let todoId = idArray[1];
        let title = li.querySelector('label').innerText;

       if(confirm(`Deseja realmente excluir a tarefa ${title} ?`)){

        data = data.filter(task => task.id !== parseInt(todoId));
        
        renderTudo();
       }

    });

    document.querySelector('.todo').append(li);
});

}

document.querySelector('#new-task').addEventListener('keyup', e => {
   
   if(e.key == 'Enter') {
       console.log(e.target.value);

       data.push( {
           id:data.length+1,
           title: e.target.value
       });

       e.target.value = '';

       renderTudo();
   }

});

renderTudo();