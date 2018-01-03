class TaskForm {

  static newForm(){
    let newDiv = document.createElement('DIV')
    let form = document.createElement('FORM')
    newDiv.class = "dropdown"
    form.class = "dropdown-content"
    newDiv.appendChild(form)
    form.innerHTML= `
      <br/><input id="task-title" placeholder="Task Title">
      <textarea id="task-content" placeholder="Task Content"></textarea>
      <button type="button" class="create-task">Create Task</button>
    `
    return form
  }


}
