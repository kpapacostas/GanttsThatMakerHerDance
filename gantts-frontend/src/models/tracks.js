class Track {
  constructor(data){
    this.id = data["id"];
    this.priority = data["priority"];
    Track.all.push(this);
  };

};

Track.all = [];
