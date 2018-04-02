
function takeANumber(katzDeliLine, name){
  let currentPosition = katzDeliLine(name) + 1; 
  return `Welcome, ${name}. You are number ${currentPosition} in line.`
}