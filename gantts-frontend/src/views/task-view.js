const makeSortable = function(){
  $(".track").sortable({
    axis: "x",
    grid: [20, 0],
    update: function(e) {
      let tasks = $(this).children()
      for (taskElement of tasks) {
        let taskId = elementIdNumber(taskElement)
        let task = Task.findById(taskId)
        let startTime = $(taskElement).offset().left
        task.start_time = startTime
        TasksAdapter.update(task)
      }
    }
  })
}
