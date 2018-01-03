class App {

  static doubleClick() {
    document.addEventListener('dblclick', (e)=>{

  })

  }


  static mouseUp() {
    document.body.addEventListener('mouseup', (e)=>{
      let element = e.target
      switch(e.target.className) {
        case "task ui-sortable-handle":

          console.log(element.id)

          let rect = element.getBoundingClientRect()
          console.log(
            "Width:" + element.clientWidth + ", " +
            "Id:" + element.id + ", " +
            "x:" + rect.left + ", " +
            "y:" + rect.right)
          console.log(element.parentElement)

          break
        default:
          console.log("ya clicked")
      }
    })
  }
}
