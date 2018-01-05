class App {

  static click() {
    document.addEventListener('click', (e) => {

      switch (e.target.className) { // refactor with the taskElement creator from tasks adapter

//create task box
        case "track ui-sortable":
          let newTask = document.createElement('LI')
          newTask.className = "task"

          newTask.innerHTML = `
            <a class"create-new-task button" id="create-new-task" href="#">New Task?</a><br/>
            <a class"delete-blank-task button" id="or-not" href="#">Or Not.</a>
          `
          e.target.append(newTask)
          break


//task box with title
        case "create-task":
          $('.wrap, a').toggleClass('active')
          let taskTitle = toTitleCase(document.getElementById('task-title').value)
          let taskContent = document.getElementById('task-content').value
          let parent = e.target.parentElement.parentElement.parentElement.parentElement

          if (document.getElementById('task-title').value === ""){
            alert("Can't make a Task without info, brah!")
            parent.remove()
          }else {

            let xLocation = parent.getBoundingClientRect()
            let startTime = xLocation.left
            let duration = 20


            let parentTrackId = elementIdNumber(e.target.parentElement.parentElement.parentElement.parentElement.parentElement)
            TasksAdapter.create(taskTitle, taskContent, startTime, duration, parentTrackId)

            e.target.parentElement.remove()
            parent.innerHTML = `
            ${taskTitle}
            <br/><button class="edit button" id="${taskTitle}">+</button>
            <button class="delete button" id="${taskTitle}">-</button> `
          }
          break


  // add a new track
        case "new-track-button button":
          let allTracks = document.querySelectorAll("ul")
          let highestPriority = 0
          for (let track of allTracks) {
            let trackId = elementIdNumber(track)
            let currentTrack = Track.find(trackId)
            if (currentTrack.priority > highestPriority) {
              highestPriority = currentTrack.priority
            }
          }

          highestPriority++

          let projectName = document.querySelector(".project-name")
          let projectId = elementIdNumber(projectName) // 'project-1'

          let newTrack = TracksAdapter.create(projectId, highestPriority)

          break

  // delete existing track

        case "delete-track-button":
          // identify the track
          let track = Track.find(elementIdNumber(e.target))
          let trackElement = document.getElementById(`track-container-${track.id}`)
          for (let task of track.tasks) {
            TasksAdapter.delete(task)
          }
          TracksAdapter.delete(track)

          trackElement.innerHTML = ''
          trackElement.remove()
          break

  // start timer bar

        case "start-gantt":
          $(':button').prop('disabled', true);

          //disabling buttons
          let dBtns = Array.from(document.getElementsByClassName('delete button'))
          dBtns.forEach((b) => {return b.style.opacity = 0})

          let eBtns = Array.from(document.getElementsByClassName('edit button'))
          eBtns.forEach((b) => {return b.style.opacity = 0})


          let trackIds = Track.all.map(x => x.id);
          let taskArrays = trackIds.map(x => Task.findByTrack(x));
          let lengths = taskArrays.map(function(a){return a.length;});
          let maxLength = Math.max(...lengths);

          //overallanimation and timer
          let tasks = $(".track").children();
          let rightmost = App.farRightDiv(tasks);
          let leftmost = $(tasks[0]).offset().left;
          App.progressBar(leftmost,rightmost,maxLength);


          //display (below gantt chart) content
          let secondsPerTask = 5; //change this back to 300 for full 5 minutes
          let currentIndex = 0;

          App.insertDisplayDivs(trackIds);

          let totalSeconds = secondsPerTask;

          // task specific timer
          let timerInterval = setInterval(function(){
            let formattedSeconds = formattedTime(totalSeconds);
            document.getElementById("currentTimer").innerText=formattedSeconds;
            if (totalSeconds > 1){
              totalSeconds--;
            } else {
              totalSeconds = secondsPerTask
            }
          },1000);//end timerInterval


          //display update
          let changeDisplay = setInterval(function(){

            for (let index in taskArrays){
              let intIndex = parseInt(index)
              if (taskArrays[intIndex][currentIndex]) {
                document.querySelector(`#currentTrack${intIndex+1}`).innerHTML =
                  taskArrays[intIndex][currentIndex].taskDiv();
              } else {
                document.querySelector(`#currentTrack${intIndex+1}`).innerHTML =
                "";
              }
              if (taskArrays[intIndex][currentIndex+1]) {
                document.querySelector(`#nextTrack${intIndex+1}`).innerHTML =
                  taskArrays[intIndex][currentIndex+1].taskDiv();
              } else {
                document.querySelector(`#nextTrack${intIndex+1}`).innerHTML =
                "";
              }
            };

            if (currentIndex < maxLength-1){
                  currentIndex++;
                } else {
                  document.getElementById("currentTimer").innerText="";
                  clearInterval(timerInterval)

                  clearInterval(changeDisplay)}
                },5000);//end changeDisplay

          break

//edit, delete & update task buttons

        case "delete button":
          let delTask = Task.findByTitle(e.target.id)
          TasksAdapter.delete(delTask)
          e.target.parentElement.remove()
          break

        case "edit button":
          let ediTask = Task.findByTitle(e.target.id)
          let newF = TaskForm.newForm(ediTask)
          e.target.parentElement.append(newF)
          $('.wrap, a').toggleClass('active')

          break

        case "or-not-new":
          $('.wrap, a').toggleClass('active')
          e.target.parentElement.parentElement.parentElement.parentElement.remove()
          break

        case "or-not-update":
          $('.wrap, a').toggleClass('active')
          e.target.parentElement.parentElement.parentElement.remove()
          break


        case "update-task":
          let upTask = Task.findByTitle(e.target.parentElement.parentElement.parentElement.children[1].id)
          upTask.title = document.getElementById('task-title').value
          upTask.content = document.getElementById('task-content').value

          TasksAdapter.update(upTask)

          e.target.parentElement.parentElement.parentElement.innerHTML = `
          ${upTask.title}
          <br/><button class="edit button" id="${upTask.title}">+</button>
          <button class="delete button" id="${upTask.title}">-</button>
          `
          e.target.parentElement.parentElement.remove()

          break


        default:
          // console.log(e)
        }//CLASSNAME SWITCH



///////////////////////////////////////////////////////////////
//NEW SWITCH

        switch (e.target.id) {
          case "or-not":
            e.target.parentElement.remove()
          break

          case "create-new-task":
            let task = ''
            let newForm = TaskForm.newForm(task)
            e.target.parentElement.append(newForm)
            e.target.remove()
            document.getElementById('or-not').remove()
            $('.wrap, a').toggleClass('active')
            break


        }

    })//CLICK-EVENTLISTENER
  }//CLICK FUCNTION

  static farRightDiv(tasks){
    let rightmost = 0
    for (let task of tasks) {
      let rightSide = $(task).offset().left + $(task).outerWidth();
      if (rightSide > rightmost){
        rightmost = rightSide;
      }
    }
    return rightmost
  };

  static insertDisplayDivs(trackIds){
    trackIds.forEach(x => {document.querySelector(".d").innerHTML +=
      `<div id="currentTrack${x}" class="inline"></div>`
      document.querySelector(".e").innerHTML +=
      `<div id="nextTrack${x}" class="inline"></div>`
    });
  }


  static progressBar(startLength, endLength, tasksLength) {
    let totalSeconds = tasksLength*5; //add *60 back when done
    let totalMilliseconds = totalSeconds*1000;
    let barLength = endLength-startLength;
    $("#myProgress").width(barLength);
    $("#myBar").animate({width: barLength}, totalMilliseconds, "linear");
    $("#timeline").animate({left: barLength}, totalMilliseconds, "linear");
    let myInterval = setInterval(function(){
      let formattedSeconds = formattedTime(totalSeconds);
      document.getElementById("timer").innerText=formattedSeconds; // should move this somewhere, but where
      if (totalSeconds > 0){
        totalSeconds--;
      } else {
        document.getElementById("timer").innerText="" // move this somewhere, too
        $("#myBar").width("0px");
        $("#timeline").animate({left: 0}, 0, "linear");
          $("#myProgress").width("0px");
        $(':button').prop('disabled', false);
        clearInterval(myInterval)}
      }
      ,1000);
    };
}; //END OF APP CLASS


//formats time in seconds to min:seconds
function formattedTime(time) {
  let mins = 0;
  let seconds = 0;
  mins = Math.floor(time/60)
  seconds = time%60
  if (String(mins).length<2) mins="0"+String(mins)
  if (String(seconds).length<2) seconds="0"+String(seconds)
  return `${mins}:${seconds}`
};
