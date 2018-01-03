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
}
