"use strict"
var anchors = document.getElementsByTagName("a");
var a1 = document.getElementsByTagName("a")[0];
var a2 = document.getElementsByTagName("a")[1];
var a3 = document.getElementsByTagName("a")[2];
var a4 = document.getElementsByTagName("a")[3];
var a5 = document.getElementsByTagName("a")[4];
var burger = document.getElementById("burger");

burger.addEventListener("click", function(){
    for(var x of anchors){
        x.classList.toggle("block");
    }
    this.classList.toggle("rotateZ");
});



a1.addEventListener("click", function(){
    if(!this.classList.contains("a-color")){
        this.classList.add("a-color");
        
        a2.classList.remove("a-color");
        a3.classList.remove("a-color");
        a4.classList.remove("a-color");
   } 
        this.classList.toggle("rotate360");
    
});

a2.addEventListener("click", function(){
    if(!this.classList.contains("a-color")){
        this.classList.add("a-color");
        
        a1.classList.remove("a-color");
        a3.classList.remove("a-color");
        a4.classList.remove("a-color");
   } 
        this.classList.toggle("rotate360");

});

a3.addEventListener("click", function(){
    if(!this.classList.contains("a-color")){
        this.classList.add("a-color");
        a1.classList.remove("a-color");
        a2.classList.remove("a-color");
        a4.classList.remove("a-color");
   } 
        this.classList.toggle("rotate360");
});

a4.addEventListener("click", function(){
    if(!this.classList.contains("a-color")){
        this.classList.add("a-color");
        a1.classList.remove("a-color");
        a2.classList.remove("a-color");
        a3.classList.remove("a-color");
   } 
        this.classList.toggle("rotate360");
});

