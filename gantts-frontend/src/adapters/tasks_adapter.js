class TasksAdapter {

  // static all(){
  //   fetch('http://localhost:3000/api/tasks')
  //   .then(resp => resp.json())
  //   .then(json => populateTasks(json))
  // }

  static create(title, content, startTime, duration, trackId){
    const params = {
          "method": "POST",
          "headers": {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          "body": JSON.stringify({title: title, content: content, start_time: startTime, duration: duration, track_id: trackId})
        }
      return fetch('http://localhost:3000/api/tasks', params)
        .then(resp => resp.json())
        .then(json => createTaskObj(json))
      }

  static update(task){
    const params = {
          "method": "PATCH",
          "headers": {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          "body": JSON.stringify({title: task.title, content: task.content, start_time: task.start_time, duration: task.duration})
        }
      return fetch(`http://localhost:3000/api/tasks/${task.id}`, params)
        .then(resp => resp.json())
        .then(json => updateTaskObj(json))
      }

    static delete(task){
      const params = {
            "method": "DELETE",
            "headers": {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }
        return fetch(`http://localhost:3000/api/tasks/${task.id}`, params)
        }

}



//HELPER METHODS

function populateTasks(json){
  let taskArray = Object.keys(json).sort((a, b) => {
    return json[a].start_time - json[b].start_time
  }).map((key) => {
    return json[key]
  })
  taskArray.forEach((hash)=>{
    let newTask = new Task(hash)
    let trackId = newTask.track_id
    let parentTrack = document.getElementById(`track-${trackId}`)
    createTaskElement(parentTrack, newTask)
  })
}

function createTaskElement(trackElement, task) {

  let newTask = document.createElement('li')
  newTask.className = "task"
  newTask.id = `task-${task.id}`
  newTask.innerHTML = `

  <button class="delete button" id="${task.title}">x</button>
  <br>
  <div class="task-title">${task.title}</div>
  <div class="task-buttons">
    <button class="edit button" id="${task.title}">Edit</button>

  </div>

  <div class="ui-resizable-handle ui-resizable-e">
  </div>`

  newTask.style.width = `${task.duration}px`
  trackElement.append(newTask)
  makeResizable()
}

function createTaskObj(json){
  let newTask = new Task(json)
  let trackElement = document.getElementById(`track-${newTask.track_id}`)
  createTaskElement(trackElement, newTask)
}

function updateTaskObj(json){
  let t = Task.findById(json.id)
  t.title = json.title
  t.content = json.content
  t.start_time = json.start_time
  t.duration = json.duration
}
