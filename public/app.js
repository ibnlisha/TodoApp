
var list = document.querySelector('#alltodos'),
    todoInput = document.querySelector("#todoId");
var lis = [];
var crossX = document.querySelector('span');

document.querySelector('body').onload = function(){
    fetch("/api/todos")
    .then(res => {
        return res.json();
    })
    .then((todos)=>{
        for(let i=0; i<todos.length; i++){
            var span = document.createElement('span');
            span.appendChild(document.createTextNode('X'));
            lis.push(document.createElement('li'));
            lis[i].appendChild(document.createTextNode(todos[i].todo));
            lis[i].appendChild(span);
            list.appendChild(lis[i]);
        }
    })
    .catch((err)=>{
        console.log("Someting went wrong");
    });

    todoInput.addEventListener('keypress', (e)=>{
        if(e.keyCode === 13){
            fetch('api/todos', {
                method: 'POST',
                // headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    todo: todoInput.value,
                    completed: "started"
                })
            }).then(res => res.json())
            .then((resp)=>{
                todoInput.value = "";
            })
            .catch(err=>{
                console.log("Sorry! Your request could not be sent");
            });
        }
    });
    // Add a click listener to the X span
    list.addEventListener('click', changer);
    //Removes Li if X is clicked or updates if otherwise
    function changer(e){
        let target = e.target;
        if(target.tagName == 'SPAN'){
            fetch('todos/id/delete', {
                method: 'delete'
            }).then()
            target.parentElement.remove();
        }else if(target.tagName === 'LI')
            alert("LI was clicked");
    }

}