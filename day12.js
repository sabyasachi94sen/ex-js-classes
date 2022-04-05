function dataUpdate(){
    var data=document.getElementsByTagName("h4");
    data[0].innerHTML="This is a h4 tag"
}



function dataAlert1(){
    var data=document.getElementById("in-text")
   

    alert(data.innerText);
   
   
    
}

function dataAlert2(){
    var data=document.getElementById("in-html")
    alert(data.innerHTML);
    
   
    
}

function createEle(){
    var x=document.createElement("h3");
    x.innerHTML="element created";
    var y=document.getElementById("container");
    y.appendChild(x);


}

function colorChange(){
    var x=document.getElementsByTagName("h5");
    x[0].style.color="red";
}