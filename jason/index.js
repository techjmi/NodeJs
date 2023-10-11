//json stand for javaScript Notation......it used for storing and transporting data
//json is used when data is sent from server to webpage
// first create object
const biodata={
    name:"shamim",
    age:24,
    channel:"kiltech"
}
console.log(biodata.name)
// convert  above object into json format.....
const jasonData= JSON.stringify(biodata)
console.log(jasonData)
// form output we can say that we have to use double quote in JSON
//{"name":"shamim","age":24,"channel":"kiltech"}
//double quote are used in key also
// we cant call json data like object....like with name.data etc.....


//convert json into object....use pase method..
const jsonToObj=JSON.parse(jasonData);
console.log(jsonToObj) //out put look like this .....{ name: 'shamim', age: 24, channel: 'kiltech' }


const { isUtf8 } = require("buffer");
// add json data into a file...
const fs = require("fs");

fs.writeFile('json1.json', jasonData, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('File created and empty content added');
    }
});


// now read above file......
// const fs = require("fs");

fs.readFile("json1.json", "UTF-8", (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
