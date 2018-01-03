class App {



  static click() {
    document.addEventListener('click', (e) => {
      switch (e.target.className) {
        case "track ui-sortable":
          let createTaskBtn = document.createElement('BUTTON')
          createTaskBtn.className = "create-task-button"
          createTaskBtn.innerHTML = "Create New Task!"
          let newTask = document.createElement('DIV')
          newTask.className = "task"
          newTask.id ="${i}"
          newTask.appendChild(createTaskBtn)
          e.target.append(newTask)
          break

        case "create-task-button":
          let newForm = TaskForm.newForm()
          e.target.parentElement.append(newForm)
          e.target.remove()
          break

        case "create-task":
          let taskTitle = document.getElementById('task-title').value
          let taskContent = document.getElementById('task-content').value
          let xLocation = e.target.parentElement.getBoundingClientRect()
          let startTime = xLocation.left
          let duration = 20

          TasksAdapter.create(taskTitle, taskContent, startTime, duration, 1)

          e.target.parentElement.innerHTML = `<h2>${taskTitle}</h2>`
          break

        case "start-gantt":
          let tasks = $(".track").children();
          let rightmost = 0;
          for (let task of tasks) {
            let rightSide = $(task).offset().left + $(task).outerWidth();
            if (rightSide > rightmost){
              rightmost = rightSide;
            }
            // let tasksEndpoint = $(tasks[tasks.length-1]).offset().right
          }
          let leftmost = $(tasks[0]).offset().left;
          App.progressBar(leftmost,rightmost,tasks.length)


      }

    })//CLICK-EVENTLISTENER
  }//CLICK FUCNTION

  // static mouseOver(){
  //
  //   document.addEventListener('mouseOver', (e)=>{
  //
  //
  //   })



  // static mouseUp() {
  //   document.body.addEventListener('mouseup', (e)=>{
  //     let element = e.target
  //     switch(e.target.className) {
  //       case "task ui-sortable-handle":
  //
  //         console.log(element.id)
  //
  //         let rect = element.getBoundingClientRect()
  //         console.log(
  //           "Width:" + element.clientWidth + ", " +
  //           "Id:" + element.id + ", " +
  //           "x:" + rect.left + ", " +
  //           "y:" + rect.right)
  //         console.log(element.parentElement)
  //
  //         break
  //       default:
  //         console.log("ya clicked")
  //     }
  //   })
  // }


  static progressBar(startLength, endLength, tasksLength) {
    let totalSeconds = tasksLength*5; //add *60 back when done
    let totalMilliseconds = totalSeconds*1000;
    $("#myBar").animate({width: endLength-startLength}, totalMilliseconds, "linear");
    $("#timeline").animate({left: endLength-startLength}, totalMilliseconds, "linear");
    let myInterval = setInterval(function(){
      let formattedSeconds = formattedTime(totalSeconds);
      document.getElementById("myBar").innerText=formattedSeconds; // should move this somewhere, but where
      if (totalSeconds > 0){
        totalSeconds--;
      } else {
        document.getElementById("myBar").innerText="Done" // move this somewhere, too
        clearInterval(myInterval)}
      }
      ,1000);
    };
}; //END OF APP CLASS

//formats time in seconds to min:seconds
function formattedTime(time) {
  let mins = 0;
  let seconds = 0;
  mins = Math.floor(time/60)
  seconds = time%60
  if (String(mins).length<2) mins="0"+String(mins)
  if (String(seconds).length<2) seconds="0"+String(seconds)
  return `${mins}:${seconds}`
};
