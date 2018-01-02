class ProjectsAdapter {

  static all(){
    fetch('http://localhost:3000/api/projects')
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
        .then(json => createProjectObj(json))
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
  json.forEach((hash)=>{
    let newProject = new Project(hash)
  })
}

function createProjectObj(json){
  new Project(json)
}

function updateProjObj(json){
  let proj = Project.findById(json.id)
  proj.name = json.name
}
