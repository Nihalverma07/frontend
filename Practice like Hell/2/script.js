document.addEventListener('DOMContentLoaded', function() {
    var img1= document.querySelector(".img1")
    var img2= document.querySelector(".img2")
    var btn = document.querySelector('button');

    btn.addEventListener('click',function(){
        var src1 = img1.src;
        var src2 = img2.src;
        img1.src = src2;
        img2.src = src1;
    })

    var form = document.querySelector('form');
    var inp1 = document.querySelector('#inp1');
    var inp2 = document.querySelector('#inp2');
    form.addEventListener("submit",function(e){
        e.preventDefault();
        console.log(inp1.value,inp2.value);
    })
})