class Project {
  constructor(data){
    this.id = data["id"];
    this.name = data["name"];
    Track.all.push(this);
  };


};

Project.all = [];

Project.findById = (id) =>{
  return Project.all.filter((p)=>{
    return p.id === id
  })[0]
}
