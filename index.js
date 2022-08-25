//----------------------------------------------- FIRST ASSIGNMENT -----------------------------------------------
//Concatenating the string
document.querySelector(".concate-string").addEventListener("click",function(){
    var firstName = prompt("Your first Name","");
    let firstNameFirstLetter = firstName.slice(0,1);
        firstNameFirstLetter = firstNameFirstLetter.toUpperCase();
    let firstNameRemainLetter = firstName.slice(1,firstName.length);
        firstNameRemainLetter = firstNameRemainLetter.toLowerCase();
    let fullFirstName = firstNameFirstLetter + firstNameRemainLetter;
    // console.log(fullFirstName);
    var lastName = prompt("Your last Name","");
    let lastNameFirstLetter = lastName.slice(0,1);
        lastNameFirstLetter = lastNameFirstLetter.toUpperCase();
    let lastNameRemainLetter = lastName.slice(1,lastName.length);
        lastNameRemainLetter = lastNameRemainLetter.toLowerCase();
    let fullLastName = lastNameFirstLetter + lastNameRemainLetter;
    // console.log(fullLastName);
    var fullName = fullFirstName +" "+ fullLastName;
    document.querySelector(".input").textContent= `"Hi "+fullName+" how are you?";`;
    document.querySelector("#out").innerHTML= "Hi "+fullName+" how are you?";
});

//Ask name from user
document.querySelector(".ask-name").addEventListener("click",function(){
    var name = prompt("Your Name","");
    let nameFirstLetter = name.slice(0,1);
        nameFirstLetter = nameFirstLetter.toUpperCase();
    let nameRemainLetter = name.slice(1,name.length);
        nameRemainLetter = nameRemainLetter.toLowerCase();
    let fullName = nameFirstLetter + nameRemainLetter;
    document.querySelector(".input").textContent= `"Hi "+fullName+" how are you?";`;
    document.querySelector("#out").innerHTML= "Hi "+fullName+" how are you?";
});

// Comparison operator
document.querySelector(".comp-op").addEventListener("click",function(){
    var firstNum = parseInt(prompt("Enter first number",""));
    var secNum = parseInt(prompt("Enter second number",""));
    // if we dont we parseInt the result will be the same because both number from prompt are string which are with same datatype
    if (firstNum===secNum){
        document.querySelector(".input").textContent= "Both numbers are equal";
        document.querySelector("#out").innerHTML= firstNum = secNum;
    }
    else{
        document.querySelector(".input").textContent= "Both numbers are not equal";
        document.querySelector("#out").innerHTML= "Check the data type you entered";
    };
});

//Testing set of conditions
document.querySelector(".test-set").addEventListener("click",function(){
    // BMI formula = weight/(height(m))2
    let height = prompt("Enter height(foot) in numbers ","");
        height = ((height*0.3048)*2);
    var weight = prompt("Enter weight in numbers","");
    var result = (weight/height).toFixed(3);
    console.log(height);
    if (result<=18.4){
        document.querySelector(".input").textContent= "Your BMI is "+result;
        document.querySelector("#out").innerHTML= "You are underweight";
    }
    else if(result>18.5 && result<=24.9){
        document.querySelector(".input").textContent= "Your BMI is "+result;
        document.querySelector("#out").innerHTML= "You are Normal";
    }
    else if(result>25 && result<=39.9){
        document.querySelector(".input").textContent= "Your BMI is "+result;
        document.querySelector("#out").innerHTML= "You are overweight";
    }
    else if(result>40){
        document.querySelector(".input").textContent= "Your BMI is "+result;
        document.querySelector("#out").innerHTML= "You are Obese";
    }
    else{
        document.querySelector(".input").textContent= "Enter correct values";
        document.querySelector("#out").innerHTML= "Enter correct values";
    }
});

//if else if 
document.querySelector(".if-else").addEventListener("click",function(){
    var age = prompt("Enter age","");
    if (age<16){
        document.querySelector(".input").textContent= "you are under 16";
        document.querySelector("#out").innerHTML= age;
    }
    else if(age<25){
        document.querySelector(".input").textContent= "you are under 25";
        document.querySelector("#out").innerHTML= age;
    }
    else if(age<50){
        document.querySelector(".input").textContent= "you are under 50";
        document.querySelector("#out").innerHTML= age;
    }
    else{
        document.querySelector(".input").textContent= "you are 50 years old or above 50 years old";
        document.querySelector("#out").innerHTML= age;
    }
});

// if nested
document.querySelector(".if-nest").addEventListener("click",function(){
    var age = prompt("Enter age","");
    var height = prompt("Enter height(ft)","");
    if (age<=25){
        if (height>=7){
        document.querySelector(".input").textContent= "your age is "+age+" and your height is "+height+" and you are eligible for this post";
        document.querySelector("#out").innerHTML= "Age is "+age+" and height is "+height;
        }
        else{
            document.querySelector(".input").textContent= "your age is "+age+" and your height is "+height+" and you are not eligible for this post, for this post age must be 25 or less and height must be above 6 foot";
            document.querySelector("#out").innerHTML= "Age is "+age+" and height is "+height;
        }
    }
    else{
        document.querySelector(".input").textContent= "your age is "+age+" and your height is "+height+" and you are not eligible for this post, for this post age must be 25 or less and height must be above 6 foot";
            document.querySelector("#out").innerHTML= "Age is "+age+" and height is "+height;
    }
});

// Login
document.querySelector(".login").addEventListener("click",function(){
    var uName = prompt("Enter username","");
    var pwd = prompt("Enter password","");
    if (uName===pwd){
            document.querySelector(".input").textContent= "username is "+uName+" and password is "+pwd;
            document.querySelector("#out").innerHTML= "Welcome to our App store";
        }
        else{
            document.querySelector(".input").textContent= "username is "+uName+" and password is "+pwd;
            document.querySelector("#out").innerHTML= "You enter different username and password or with different datatypes";
        }
});

// check
document.querySelector(".chk").addEventListener("click",function(){
    var name = prompt("Enter any name","");
    var nam = prompt("Enter any name","");
    if (name==nam){
            document.querySelector(".input").textContent= "First prompt is "+name+" and second prompt is "+nam;
            document.querySelector("#out").innerHTML= "Same string detected";
        }
        else if (name!==nam){
            document.querySelector(".input").textContent= "First prompt is "+name+" and second prompt is "+nam;
            document.querySelector("#out").innerHTML= "Both are same datatypes but different names, now try to enter same value in prompt";
        }
});

// Clear individual 
document.querySelectorAll(".clear")[0].addEventListener("click",function(){
    document.querySelector(".input").innerHTML="";
});
document.querySelectorAll(".clear")[1].addEventListener("click",function(){
    document.querySelectorAll(".output")[1].innerHTML="";
});

// Clear both
document.querySelector(".clr-bth").addEventListener("click",function(){
    document.querySelector(".input").innerHTML="";
    document.querySelectorAll(".output")[1].innerHTML="";
});

// Copyright year 
var copyRightYear=new Date().getFullYear();
document.querySelector(".copyright-year").innerHTML=`<em>${copyRightYear}</em>`;