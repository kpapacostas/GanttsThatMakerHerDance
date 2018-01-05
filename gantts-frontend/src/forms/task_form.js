class TaskForm {

  static newForm(task){
    let newDiv1 = document.createElement('DIV')
    let newDiv2 = document.createElement('DIV')
    newDiv1.className = "wrap"
    newDiv2.className = "content"
    newDiv1.append(newDiv2)
    let form = document.createElement('FORM')

    if (document.getElementsByClassName('form').length){
      alert("Ambitious much? One task at a time!")
    } else {
      if (task === ''){
        form.innerHTML= `
          <br/><label for="task-title">Create Task</label>
          <br/><input id="task-title" placeholder="Task Title">
          <textarea id="task-content" placeholder="Task Content"></textarea>
          <button type="button" class="create-task">Create Task</button>
          <button type="button" class="or-not-new">Or Not.</button><br/>

        `
        newDiv2.appendChild(form)
        return newDiv1

      } else {
        form.innerHTML= `
          <br/><label for="task-title">Edit Task</label>
          <br/><input id="task-title" value="${task.title}">
          <textarea id="task-content" value="${task.content}"></textarea>
          <button type="button" class="update-task">Update</button><br/>
          <button type="button" class="or-not-update">Or Not.</button><br/>
        `
        newDiv2.appendChild(form)
        return newDiv1
        }
      }
  }


}
