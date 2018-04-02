
var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  let currentPosition = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${currentPosition} in line.`
}
