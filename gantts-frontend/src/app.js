class App {

  static singleClick() {
    document.body.addEventListener('click', (e)=>{
      alert()
    })
  };

  static progressBar(totalTime) {
    let totalSeconds = totalTime*60;
    let totalMilliseconds = totalTime*60*1000;
    $("#myBar").animate({width: '100%'}, totalMilliseconds);

      let myInterval = setInterval(function(){
        let formattedSeconds = formattedTime(totalSeconds);
        document.getElementById("myBar").innerText=formattedSeconds;
        if (totalSeconds > 0){
      totalSeconds--;
    } else { clearInterval(myInterval)}
    }
        ,1000);
    };

};


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
