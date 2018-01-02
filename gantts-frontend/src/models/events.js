class Event {
  constructor(data){
    this.id = data["id"];
    this.title = data["title"];
    this.content = data["content"];
    this.start_time = data["start_time"];
    this.duration = data["duration"];
    Event.all.push(this);
  };

};

Event.all = [];

Event.findById = (id) => {
  return Event.all.filter((e) =>{
    return e.id === id
  })[0]
}
