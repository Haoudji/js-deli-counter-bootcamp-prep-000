var katzDeli = [];
function takeANumber(katzDeliLine, newPersonName){
    katzDeliLine.push(newPersonName)
     return ("Welcome, "+ newPersonName+ ". You are number "+ katzDeliLine.length + " in line.")
}
<<<<<<< HEAD
function nowServing(katzDeliLine) {
  if(!katzDeliLine.length) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine.shift()+ ".";
  }
}
function currentLine(katzDeliLine){
  if(!katzDeliLine.length){
    return "The line is currently empty.";
  }
  var numberWithName = [];
  for(var j=0; j<katzDeliLine.length; j++){
    numberWithName.push(j+1 + ". "+ katzDeliLine[j])
  }
  return "The line is currently: "+ numberWithName.join(", ");
=======
function nowServing(katzDeliLine){
  if(katzDeliLine.length === true){
    return " Currently serving " + katzDeliLine.shift() + "." 
  }else{
    return "There is nobody waiting to be served!";
  }
>>>>>>> 84e234ea605a42e831adc793889504e1f68fbd16
}