class EventsAdapter {

  static all(){
    fetch('http://localhost:3000/api/events')
    .then(resp => resp.json())
    .then(json => populateEvents(json))
  }

  static create(title, content, startTime, duration){
    const params = {
          "method": "POST",
          "headers": {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          "body": JSON.stringify({title: title, content: content, start_time: startTime, duration: duration})
        }
      return fetch('http://localhost:3000/api/events', params)
        .then(resp => resp.json())
        .then(json => createEventObj(json))
      }

  static update(e){
    const params = {
          "method": "PATCH",
          "headers": {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          "body": JSON.stringify({title: e.title, content: e.content, start_time: e.start_time, duration: e.duration})
        }
      return fetch(`http://localhost:3000/api/events/${e.id}`, params)
        .then(resp => resp.json())
        .then(json => updateEventObj(json))
      }

    static delete(e){
      const params = {
            "method": "DELETE",
            "headers": {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }
        return fetch(`http://localhost:3000/api/events/${e.id}`, params)
        }

}



//HELPER METHODS

function populateEvents(json){
  json.forEach((hash)=>{
    let newEvent = new Event(hash)
  })
}

function createEventObj(json){
  let newEvent = new Event(json)
}

function updateEventObj(json){
  let e = Event.findById(json.id)
  e.title = json.title
  e.content = json.content
  e.start_time = json.start_time
  e.duration = json.duration
}
