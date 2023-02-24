// ============hover slide==============
var left_banner=document.getElementsByClassName('left_banner')[0];
var right_banner=document.getElementsByClassName('right_banner')[0];

    right_banner.addEventListener('click', function (){
    var img_banner=document.querySelectorAll('.container_banner .img_banner');
    var container_banner= document.getElementsByClassName('container_banner')[0];
        container_banner.appendChild(img_banner[0]);
})

left_banner.addEventListener('click', function(){
    var img_banner=document.querySelectorAll('.img_banner');
    var container_banner= document.getElementsByClassName('container_banner')[0];
    var img_banner=document.querySelectorAll('.img_banner');
        container_banner.prepend(img_banner[img_banner.length-1]);
})
setInterval(function(){
    left_banner.click();
} ,3000)

var left_banner1=document.getElementsByClassName('left_banner')[1];
var right_banner1=document.getElementsByClassName('right_banner')[1];

    right_banner1.addEventListener('click', function (){
    var img_banner=document.querySelectorAll('.flex_banner_left .a');
    var container_banner1= document.getElementsByClassName('flex_banner_left')[0];
        container_banner1.appendChild(img_banner[0]);
})

left_banner1.addEventListener('click', function(){
    var img_banner=document.querySelectorAll('.flex_banner_left .a');
    var container_banner1= document.getElementsByClassName('flex_banner_left')[0];
        container_banner1.prepend(img_banner[img_banner.length-1]);
})
// setInterval(function(){
//     left_banner1.click();
// } ,3000)

//          LEFT_RIGHT DANH MỤC
let left_danhmuc=document.querySelector('.left_danhmuc');
let right_danhmuc=document.querySelector('.right_danhmuc');
let danhmucs=document.querySelector('.danhmucs');
let nut=document.querySelector('.nut');
right_danhmuc.addEventListener('click',function(){
    danhmucs.style.left="-50%";
    this.style.display="none";
    left_danhmuc.style.display="block";
})
left_danhmuc.addEventListener('click',function(){
    danhmucs.style.left="0px";
    this.style.display="none";
    right_danhmuc.style.display="block";  
})
//==============  SALE  =============
 var left_sale= document.getElementsByClassName('left_sale');
 var right_sale= document.querySelectorAll(".right_sale");
 var flash_sale2=document.getElementsByClassName('flash_sale2');
function move_right(n){
    if(n>0){    
          flash_sale2[n-1].style.left="-105%";
        left_sale[n-1].style.display="block"; 
       right_sale[n-1].style.display="none";
    }
}
function move_left(n){
    if(n>=0){
        flash_sale2[n-1].style.left="0%";
        left_sale[n-1].style.display="none";
        right_sale[n-1].style.display="block";
    }
}
// scroll search menu 
window.onscroll=function(){
    var menu=document.getElementById("bigmenu");
    var cart=document.querySelector('.cart i');
    var chat=document.querySelector('.chat_moblie i');
    var c=document.documentElement.scrollTop;
    if(document.documentElement.scrollTop>60|| document.body.scrollTop>60){
        menu.style.backgroundColor="#fff";
        cart.style.color="#f84a2f";
        chat.style.color="#f84a2f";
    }
    else{
        menu.style.backgroundColor="#ffffff14";
        cart.style.color="#fff";
        chat.style.color="#fff";
    }
}