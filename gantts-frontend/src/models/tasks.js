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

};

Task.all = [];

Task.findById = (id) => {
  return Task.all.filter((e) =>{
    return e.id === id
  })[0]
}
