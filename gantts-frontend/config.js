function elementIdNumber(element) {
  let elementArray = element.id.split("-")
  return parseInt(elementArray[elementArray.length - 1])
}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}


function openForm(){
  $('a').on('click', function(){
  $('.wrap, a').toggleClass('active');

  return false;
})
}
