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
          TasksAdapter.create(taskTitle, taskContent, startTime, duration)
      }

    })//CLICK-EVENTLISTENER
  }//CLICK FUCNTION



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
}
