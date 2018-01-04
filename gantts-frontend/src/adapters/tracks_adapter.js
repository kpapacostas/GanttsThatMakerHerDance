class TracksAdapter {

  // static all(){
  //   fetch('http://localhost:3000/api/tracks')
  //   .then(resp => resp.json())
  //   .then(json => populateTracks(json))
  // }

  static create(project_id, priority){
    const params = {
          "method": "POST",
          "headers": {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          "body": JSON.stringify({project_id: project_id, priority: priority})
        }
      return fetch('http://localhost:3000/api/tracks', params)
        .then(resp => resp.json())
        .then(json => createTrackObj(json))
      }

  static update(track) {
    const params = {
          "method": "PATCH",
          "headers": {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          "body": JSON.stringify({name: track.name})
        }
    return fetch(`http://localhost:3000/api/tracks/${track.id}`, params)
      .then(resp => resp.json())
      .then(json => updateTrackObj(json))
    }

  static delete(track) {
    const params = {
          "method": "DELETE",
          "headers": {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
    return fetch(`http://localhost:3000/api/tracks/${track.id}`, params)
    }

  }

//HELPER METHODS

function populateTracks(json){
  console.log("hit populate tracks")
  let aDiv = document.querySelector(".a")
  json.forEach((hash) => {
    let newTrack = new Track(hash)
    createTrackElement(aDiv, newTrack)
  })
}

function createTrackElement(container, track) {
  container.innerHTML += `
    <div class="track-container" id="track-container-${track.id}">
      <br>
      <button class ="delete-track-button" id="delete-track-${track.id}">X</button><h3>Track ${track.priority}</h3>
      <ul class="track" id="track-${track.id}"}></ul>
    </div>`
  makeSortable()
}

function createTrackObj(json) {
  let newTrack = new Track(json)
  let aDiv = document.querySelector(".a")
  createTrackElement(aDiv, newTrack)
}

function updateTrackObj(json) {
  let track = Track.findById(json.id)
  track.priority = json.priority
}
