const makeSortable = function() {
  $(".track").sortable({
    // axis: "x",
    grid: 20,
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

const makeResizable = function() {
  $(".task").resizable({
    maxHeight: 100,
    minWidth: 50,
    // containment: ".track",
    // minWidth: 50,
    handles: ('e'),
    grid: 20,
    // 'w':'.ui-resizable-w'
    // helper: "resizable-helper"
    // grid: 20,
    // autoHide: true
    update: function(e) {
      console.log(e)
    }
  })
}
