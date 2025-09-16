var form = document.querySelector('form');
// var inp1 = document.querySelector('#inp1');
// var inp2 = document.querySelector('#inp2');
var inp= document.querySelectorAll('input[type="text"]');
var h4 = document.querySelector('#error');


form.addEventListener("submit",function(e){
    e.preventDefault();
    var hasEmpty = false;
   for(var i =0;i<inp.length;i++){
    if(inp[i].value ===''){
        h4.textContent = "All fields are mandatory";
        h4.style.color= 'red';
        hasEmpty = true;
        break;
    }
   }
   if(!hasEmpty){
    h4.textContent = '';
   }
})