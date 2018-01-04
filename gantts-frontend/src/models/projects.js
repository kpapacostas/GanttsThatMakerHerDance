class Project {
  constructor(data){
    this.id = data["id"];
    this.name = data["name"];
    Project.all.push(this);
  };

};

Project.all = [];

Project.findById = (id) =>{
  return Project.all.filter((p)=>{
    return p.id === id
  })[0]
}
