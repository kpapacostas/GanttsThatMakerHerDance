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
