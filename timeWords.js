
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
