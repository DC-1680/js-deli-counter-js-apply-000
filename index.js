
var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  let currentPosition = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${currentPosition} in line.`
}

function nowServing(){

  if (katzDeliLine < 0){
    return 'There is nobody waiting to be served!';
  }

  let currentPerson = katzDeliLine[0];
  katzDeliLine = katzDeliLine.shift();
  return `Currently serving ${currentPerson}``;

}
