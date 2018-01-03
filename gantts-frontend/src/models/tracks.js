class Track {
  constructor(data){
    this.id = data["id"];
    this.priority = data["priority"];
    Track.all.push(this);
  };

  static find(id) {
    return Track.all.find((track) => {
      return track.id === id
    })
  }

};

Track.all = [];
