function takeANumber (currentLine) {
  currentLine.push(currentLine.length + 1)
return ("Welcome." + " You are number " + (currentLine.length) + " in line." )
}
function nowServing (katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return ("There is nobody waiting to be served!");
  } else { 
    var x = "Currently serving " + katzDeliLine[0] + "."
  katzDeliLine.shift ();
  return (x);
  }
}
function currentLine (customerArray) {
  if (customerArray.length >=1) {
        return "The line is currently: " + currentLine.length;
      } else {
   return ("The line is currently empty.");
      }
}