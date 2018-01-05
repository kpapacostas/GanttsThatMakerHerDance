class Task {
  constructor(data){
    this.id = data["id"];
    this.title = data["title"];
    this.content = data["content"];
    this.start_time = data["start_time"];
    this.duration = data["duration"];
    this.track_id = data["track_id"];
    Task.all.push(this);
  };

  taskDiv(){
    return `
    <h2>Track ${this.track_id}</h2>
    <h3>${this.title}</h3
    <p>${this.content}</p>
    `
  }

};

Task.all = [];

Task.findByTitle = (title) =>{
  return Task.all.filter((t)=>{
    return t.title === title
  })[0]
}

Task.findById = (id) => {
  return Task.all.filter((t) =>{
    return t.id === id
  })[0]
}

Task.findByTrack = (track_id) => {
  return Task.all.filter((t) =>{
    return t.track_id === track_id
  })
}
