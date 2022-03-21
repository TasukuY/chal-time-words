
var ze_ni = ['','one','two','three','four','five','six','seven','eight','nine']; 
var tn_ni =['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']; 
var tw_ni = ['twenty','thirty','forty','fifty']; 
var hours = ['twelve','one','two','three','four','five','six','seven','eight','nine', 'ten','eleven',
'twelve', 'one','two','three','four','five','six','seven','eight','nine', 'ten','eleven'];

let timeWord = (time) => {
    if(time === "00:00"){
        return 'midnight';
    }else if(time === "12:00"){
        return 'noon';
    }       

    let timeString = '';
    let hour = Number(time.split(':')[0]);
    let minute = Number(time.split(':')[1]); 
    let miniteString = '';
    let amPm = '';

    if(minute < 10){
        if(minute === 0){
            miniteString += "o'clock";
        }
        miniteString = 'oh ' + ze_ni[minute] 
    }else if(minute < 20){
        let tens = String(minute).split('')[0];
        let ones = String(minute).split('')[1];
        miniteString += tn_ni[ones]
    }else{
        let tens = String(minute).split('')[0];
        let ones = String(minute).split('')[1];
        miniteString = tw_ni[(+tens) - 2] + ' ' + ze_ni[ones]
    }
  
    if(hour < 12){
        amPm = 'am';
    }else{
        amPm = 'pm'
    }

    return timeString = hours[hour] + ' ' + miniteString + ' ' + amPm; 
}


console.log(timeWord("12:23"));

var converter = require('number-to-words');

function convert(time) {
    timeArray = time.split(":");
    hour = +timeArray[0];
    minute = +timeArray[1];

    if ((hour === 0) && (minute === 0)) {
        return 'midnight';
    } else if ((hour === 12) && (minute === 0)) {
        return 'noon';
    } else if ((minute === 0) && (hour <= 12)) {
        return `${converter.toWords(hour)} o'clock am`;
    } else if ((minute === 0) && (hour > 12)) {
        return `${converter.toWords(hour - 12)} o'clock pm`;
    } else if ((hour <= 12) && (minute < 10)) {
        return `${converter.toWords(hour)} oh ${converter.toWords(minute)} am`;
    } else if ((hour > 12) && (minute < 10)) {
        return `${converter.toWords(hour - 12)} oh ${converter.toWords(minute)} pm`;
    } else if ((hour <= 12) && (minute >= 10)) {
        return `${converter.toWords(hour)} ${converter.toWords(minute)} am`;
    } else if ((hour > 12) && (minute >= 10)) {
        return `${converter.toWords(hour - 12)} ${converter.toWords(minute)} pm`;
    } else {
        return "Please enter a valid time";
    }
}

console.log(convert("23:09"));