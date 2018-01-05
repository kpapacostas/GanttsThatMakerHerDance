document.addEventListener('DOMContentLoaded', () => {

  ProjectsAdapter.all().then(makeSortable).then(makeResizable)
  App.click()
})
