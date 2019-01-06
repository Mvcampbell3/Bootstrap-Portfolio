document.getElementById('addBtn').addEventListener('click', checkValue);

function checkValue(){
    var name = document.getElementById('taskName').value;
    var detail = document.getElementById('taskDetail').value;

    if (name != "" && detail !=""){
        addTask()
    } else {
        alert("Must have vaules in both fields")
    }
}


function addTask(){

    var name = document.getElementById('taskName').value;
    var detail = document.getElementById('taskDetail').value;

    var taskItem = {
        taskName: name,
        taskDetail: detail,
    }


    if (localStorage.getItem('taskList')===null){

        var taskList = [];

        taskList.push(taskItem);

        localStorage.setItem('taskList', JSON.stringify(taskList));

    } else {

        var taskList = JSON.parse(localStorage.getItem('taskList'));

        taskList.push(taskItem);

        localStorage.setItem('taskList', JSON.stringify(taskList));
    }

    document.getElementById('taskName').value = "";
    document.getElementById('taskDetail').value = "";
    getTask();
}
//Add getlist function and do stuff, im tired

function getTask(){

        var taskList = JSON.parse(localStorage.getItem('taskList'));

        var output = document.getElementById('outputArea');

        output.innerHTML = "";

        for (var i = 0; i < taskList.length; i++){
            var name = taskList[i].taskName;
            var info = taskList[i].taskDetail;

            output.innerHTML += '<div class="task">'+
                                '<h3 class="taskTitle">'+name+'</h3>'+
                                '<p class="taskInfo">'+info+'</p>'+
                                '<div class="btnDel" onclick="deleteTask(\''+name+'\')">&times;</div>'
                                '</div>'
        }
}

function deleteTask(name){

    console.log('so far so good');

    var taskList = JSON.parse(localStorage.getItem('taskList'));

    for (var i = 0; i < taskList.length; i++){
        if (taskList[i].taskName == name){
            taskList.splice(i, 1);
        }
    }
    localStorage.setItem('taskList', JSON.stringify(taskList));
    getTask();
}