// Access key
document.querySelector('button').accessKey = "c";

document.querySelector('button').onclick = function(){
    // Boş input sahəsinə alert
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please enter a Task!")
    // Main part
    }else{
        document.querySelector('#tasks').innerHTML +=  `<div class="task">
                                                            <span id="taskname">
                                                                ${document.querySelector
                                                                ('#newtask input').value}
                                                            </span>
                                                            <button class="delete">
                                                            <i class="fa-solid fa-trash-can"></i>
                                                            </button>
                                                        </div>`;
    // Taskı Silmək
    var current_task = document.querySelectorAll(".delete");
    for(var i=0; i<current_task.length; i++){
        current_task[i].onclick = function(){
            this.parentNode.remove();
        }
    }
    // Tamamlanmış taskın üstündən xətt çəkmək
    var tasks = document.querySelectorAll(".task");
    for(var i=0; i<tasks.length; i++){
        tasks[i].onclick = function(){
            this.classList.toggle('completed');
        }
    }
    // İnputun təmizlənməsi
    document.querySelector("#newtask input").value = "";
    }
}