const fs = require('fs');

fs.readFile("my_paragraph.txt",'utf8', (err, data)=>{
    if (err) throw err;

    console.log(data)
})
