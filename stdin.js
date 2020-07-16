// console.log('this is a good place to stop')

// let count = 0;
// process.stdin.on('data', () =>{ 
//     count += 1;
//     console.log(count)
// }
// console.log('Now we continue')

//module set time interval for reading-------
const fs = require('fs');

fs.readFile("my_paragraph.txt",'utf8', (err, text)=>{

    let textArr = text.replace(/\r\n/g,"/r").replace(/\n/g,"\r").split(/\r/);

    // console.log(textArr)
    let indx= 0;
    let cycle = setInterval(()=>{
        console.log(textArr[indx])
        indx++;
        if(indx> textArr.length)
        clearInterval(cycle)
    },1000)
})


//or use to display:
// var fs = require('fs');
 
// var contents = fs.readFileSync('my_paragraph.txt', 'utf8');
// console.log(contents);








//example for timeout ---------------
// function function1() {
//     // stuff you want to happen right away
//     console.log('Welcome to My Console,');
// }

// function function2() {
//     // all the stuff you want to happen after that pause
//     console.log('Blah blah blah blah extra-blah');
// }

// // call the first chunk of code right away
// function1();

// // call the rest of the code and have it execute after 3 seconds
// setTimeout(function2, 3000);