function elementIdNumber(element) {
  let elementArray = element.id.split("-")
  return parseInt(elementArray[elementArray.length - 1])
}
