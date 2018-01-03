document.addEventListener('DOMContentLoaded', () => {

  ProjectsAdapter.all().then(makeSortable)
  App.click()
})
