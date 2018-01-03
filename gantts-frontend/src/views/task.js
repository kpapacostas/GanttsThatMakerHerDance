timerEndpoint = 0;

$(function(){
  $(".track").sortable({
    axis: "x",
    grid: [20, 0],
    update: function(e) {
      let tasks = $(this).children()
      for (task of tasks) {
        let start_time = $(task).offset().left
        console.log(task, start_time)
      }


    }
  })
})
