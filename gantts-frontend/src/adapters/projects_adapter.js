class ProjectsAdapter {

  static all() {
    return fetch('http://localhost:3000/api/projects')
    .then(resp => resp.json())
    .then(json => populateProjects(json))
  }

  static create(name){
    const params = {
          "method": "POST",
          "headers": {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          "body": JSON.stringify({name: name})
        }
    return fetch('http://localhost:3000/api/projects', params)
      .then(resp => resp.json())
      .then(json => createProjectObj(json)) // chain this to where we actually call create
    }

  static update(project){
    const params = {
          "method": "PATCH",
          "headers": {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          "body": JSON.stringify({name: project.name})
        }
    return fetch(`http://localhost:3000/api/projects/${project.id}`, params)
      .then(resp => resp.json())
      .then(json => updateProjObj(json))
    }

    static delete(project){
      const params = {
            "method": "DELETE",
            "headers": {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }
      return fetch(`http://localhost:3000/api/projects/${project.id}`, params)
      }

  }



//HELPER METHODS

function populateProjects(json){
  json.forEach((data)=>{
    let newProject = new Project(data)
    createProjectElement(newProject)
    populateTracks(data.tracks)
    populateTasks(data.tasks)
  })
}

function createProjectElement(project) {
  let projectName = document.querySelector(".project-name")
  projectName.innerHTML = project.name
  projectName.id = `project-${project.id}`
}

function createProjectObj(json){
  new Project(json)
}

function updateProjObj(json){
  let proj = Project.findById(json.id)
  proj.name = json.name
}
