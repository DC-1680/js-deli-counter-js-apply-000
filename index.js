
var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  let currentPosition = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${currentPosition} in line.`
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
};

function currentLine(line){
  if (!line.length) {
    return "The line is currently empty.";
  }

  let finalString = "The line is currently: "

  for (let i = 0; i < line.length; i++){
    if (i === 0){
      finalString += `${i+1}. ${line[i]}`;
    } else {
      finalString += `, ${i+1}. ${line[i]}`;
    }
  }
}
