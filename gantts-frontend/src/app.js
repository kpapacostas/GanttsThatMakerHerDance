class App {

  static click() {
    document.addEventListener('click', (e) => {
      console.log(e)
      switch (e.target.className) { // refactor with the taskElement creator from tasks adapter
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

        case "new-track-button":
          let allTracks = document.querySelectorAll("ul")
          let highestPriority = 0
          for (let track of allTracks) {
            let trackId = elementIdNumber(track)
            let currentTrack = Track.find(trackId)
            debugger
            if (currentTrack.priority > highestPriority) {
              highestPriority = currentTrack.priority
            }
          }
          let projectName = document.querySelector(".project-name")
          projectId = elementIdNumber(projectName) // 'project-1'
          debugger
          // let newTrack = TracksAdapter.create(1, highestPriority) // project id, priority
          let aDiv = document.querySelector(".a")
          // TracksAdapter.createTrackElement(aDiv, newTrack)
          break

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

  static progressBar(totalTime) {
    let totalSeconds = totalTime*60;
    let totalMilliseconds = totalTime*60*1000;
    $("#myBar").animate({width: '100%'}, totalMilliseconds);

      let myInterval = setInterval(function(){
        let formattedSeconds = formattedTime(totalSeconds);
        document.getElementById("myBar").innerText=formattedSeconds;
        if (totalSeconds > 0){
      totalSeconds--;
    } else { clearInterval(myInterval)}
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
