class TaskForm {

  static newForm(task){
    let newDiv1 = document.createElement('DIV')
    let form = document.createElement('FORM')
    newDiv1.className = "container"
    newDiv1.appendChild(form)


    if (task === ''){
      form.innerHTML= `
        <br/><input id="task-title" placeholder="Task Title">
        <button type="button" class="create-task">Create Task</button><br/>
      `
      return newDiv1

    } else {
      form.innerHTML= `
        <br/><label for="task-title">Edit Task</label>
        <br/><input id="task-title" placeholder="${task.title}">
        <button type="button" class="update-task">Update</button><br/>
      `
      return newDiv1

  }
  }


}
