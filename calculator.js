const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');

   
})

app.post('/', function(req, res){

    var num1 = Number( req.body.num1);
    var num2 =Number( req.body.num2); 
    const operator = req.body.operator;
    let result;

    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operator';
    }


    res.send("the result of the calculation is " + result );
}) 

app.get('/bmicalc', function(req, res){
    res.sendFile(__dirname + '/bmicalc.html');
})

app.post('/bmicalc', function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    
    var bmi = weight / (height * height);

    res.send("your bmi is " + bmi);
});

app.listen(3002, function(){
    console.log("server is listening on port 3002");
})