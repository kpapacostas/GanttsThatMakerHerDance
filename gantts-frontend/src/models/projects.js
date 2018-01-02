class Project {
  constructor(data){
    this.id = data["id"];
    this.name = data["name"];
    Track.all.push(this);
  };


};

Project.all = [];
