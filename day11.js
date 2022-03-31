var arr=[23,45,67,78,91];   //Q1

arr.forEach((value,index)=>{
    arr[index]=value+10;
})

console.log(arr);


var arr=[23,45,67,78,91];

var tempArr;

tempArr=arr.filter((value)=>value<65); //Q2
console.log(tempArr);


var total=arr.reduce((sum,value)=>{ //Q3
   return sum+=value;
},0)

console.log(total);

var str="Peter is a good friend of mike.Peter is working in an IT company in Australia"; //Q4

str=str.replaceAll("Peter","John");
console.log(str);

var str1="Hello this is me";  //Q5
var tempStr=str1.split(" ");
var tempArr=tempStr.reverse();
var revStr=tempArr.join(" ");
console.log(revStr);

var obj={   //Q6
    name: "vivek",
    salary:"Rs 30000",
    age: "24"
}

console.log(Object.keys(obj));
console.log(Object.values(obj));

          var obj={
                name: "rahul",
                age:34,
                
            }

            function a(degree){
                console.log("name is "+this.name+" age is "+this.age+" and degree is "+degree);
            }

            a.call(obj,"b.tech");


            var obj={
                name: "rahul",
                age:34,
                
            }

            function a(degree){
                console.log("name is "+this.name+" age is "+this.age+" and degree is "+degree);
            }

            a.apply(obj,["b.tech"]);

            var obj={
                name: "rahul",
                age:34,
                
            }
            
            function a(degree){
                console.log("name is "+this.name+" age is "+this.age+" and degree is "+degree);
            }
            
            var tempBind=a.bind(obj,"b.tech");
            tempBind();

            var obj={
                name: "vivek",
                age:22
            }

            console.log(obj.__proto__.proto__);





