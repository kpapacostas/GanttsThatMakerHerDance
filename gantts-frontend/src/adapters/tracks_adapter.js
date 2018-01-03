class TracksAdapter {
  //
  // static all(){
  //   fetch('http://localhost:3000/api/tracks')
  //   .then(resp => resp.json())
  //   .then(json => populateTracks(json))
  // }

  static create(priority){
    const params = {
          "method": "POST",
          "headers": {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          "body": JSON.stringify({priority: priority})
        }
      return fetch('http://localhost:3000/api/tracks', params)
        .then(resp => resp.json())
        .then(json => createTrackObj(json))
      }

  static update(track){
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

    static delete(track){
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
//
// function populateTracks(json){
//   json.forEach((hash) =>{
//     new Track(hash)
//   })
// }

function createTrackObj(json){
  new Track(json)
}

function updateTrackObj(json){
  let track = Track.findById(json.id)
  track.priority = json.priority
}
