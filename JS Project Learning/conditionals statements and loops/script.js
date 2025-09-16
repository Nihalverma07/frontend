if(12>13) console.log("12 is less than 13");
else if(12>13) console.log("12 is greater than 13");
else console.log("12 is equal to 13");
// condition ? true : false
12>13 ? console.log("12 is less than 13") : 12<13 ? console.log("12 is greater than 13") : console.log("12 is equal to 13");  

for(let i=0; i<5; i++){
    console.log(i);
}

while(true){
    console.log("infinite loop");
    break;
}

do{
    console.log("do while loop");
}while(false);

for (var i of [1,2,3,4,5]){
    console.log(i);
}