class TaskForm {

  static newForm(task){
    let newDiv = document.createElement('DIV')
    let form = document.createElement('FORM')
    newDiv.class = "dropdown"
    form.class = "dropdown-content"

    if (task === ''){
      newDiv.appendChild(form)
      form.innerHTML= `
        <br/><input id="task-title" placeholder="Task Title">
        <textarea id="task-content" placeholder="Task Content"></textarea>
        <button type="button" class="create-task">Create Task</button><br/>
      `
      return form

    } else {
      newDiv.appendChild(form)
      form.innerHTML= `
        <br/><label for="task-title">Edit Task</label>
        <br/><input id="task-title" placeholder="${task.title}">
        <textarea id="task-content" placeholder="${task.content}"></textarea>
        <button type="button" class="update-task">Update Task</button><br/>
      `
      return form

  }
  }


}
