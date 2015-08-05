var whitespace = "Field must not contain whitespace characters.";
var blank = "Field must not be blank.";
var trueNum = "Field must contain numerical characters.";
var falseNum = "Field must not contain numerical characters.";
var trueAlpha = "Field must contain alphabetical characters.";
var falseAlpha = "Field must not contain alphabetical characters.";

function nameerr(name) {
    document.getElementById("nameerr").innerHTML='';
    
    //not alphabet, is whitespace
    if(!name.match(/^[a-zA-Z]+$/)){
        document.getElementById("nameerr").innerHTML=trueAlpha;
        
        if(name.match(".*\\d.*"))
            document.getElementById("nameerr").innerHTML=falseNum;
        
        if(name.match(" "))
            document.getElementById("nameerr").innerHTML=whitespace;
    }
    
    //Matches Empty String
    if(!name.match(/\S/))
        document.getElementById("nameerr").innerHTML=blank;
}

function gendererr(gender) {
    document.getElementById("gendererr").innerHTML='';
    
    if(!gender.checked) {
        document.getElementById("gendererr").innerHTML="Select your gender";
    }
}

function ageerr(age){
    document.getElementById("ageerr").innerHTML='';

    //if not a number, age is between 1 and 100
    if(isNaN(age) || age < 1 || age > 100){
        document.getElementById("ageerr").innerHTML="Invalid age specified";
        
        if((age.match(/[a-zA-Z]+$/)))
            document.getElementById("ageerr").innerHTML=falseAlpha;
        
        if(age.match(" "))
            document.getElementById("ageerr").innerHTML=whitespace;
    }
    
    //if empty
    if((!age.match(/\S/)))
        document.getElementById("ageerr").innerHTML=blank;
}

function eduerr(edu){
    document.getElementById("eduerr").innerHTML='';
    
    if(edu.match("empty")){
        document.getElementById("eduerr").innerHTML="Select your education.";
    }
}

function validateForm() {

    var first = document.getElementById("firstName").value;
    var last = document.getElementById("lastName").value;
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    
    var age = document.getElementById("ageInput").value;
    var edu = document.getElementById("edu").value;
    var state = document.getElementById("state").value;
    var occ = document.getElementById("occ").value;
    var hobby = document.getElementById("hobby").value;
    var num = document.getElementById("num").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var explain = document.getElementById("expain").value;

    
    //*******************************
    //START NAME VALIDATION (nameerr)
    //*******************************
    nameerr(first)
    nameerr(last)

    //***********************************
    //START GENDER VALIDATION (gendererr)
    //***********************************
    gendererr(male, female)
    
    //*****************************
    //START AGE VALIDATION (ageerr)
    //*****************************
    ageerr(age)
    
    //*******************************
    //START EDU VALIDATION (eduerr)
    //*******************************
    eduerr(edu)
    
    //*********************************
    //START STATE VALIDATION (stateerr)
    //*********************************
    document.getElementById("stateerr").innerHTML='';
    
    if(state.match("empty")){
        document.getElementById("stateerr").innerHTML="Select your state.";
    }
    
    //************************************
    //START OCCUPATION VALIDATION (occerr)
    //************************************
    document.getElementById("occerr").innerHTML='';
    
    if(!occ.match(/\S/))
        document.getElementById("occerr").innerHTML=blank;
    
    //*********************************
    //START HOBBY VALIDATION (hobbyerr)
    //*********************************
    document.getElementById("hobbyerr").innerHTML='';
    
    if(!hobby.match(/\S/))
        document.getElementById("hobbyerr").innerHTML=blank;
    
    //*********************************
    //START PHONE VALIDATION (phoneerr)
    //*********************************
    document.getElementById("phoneerr").innerHTML='';
	
    if(!num.match(/\d+.\d+.\d+/)){
        document.getElementById("phoneerr").innerHTML="Incorrect format";
    
        if((num.match(/[a-zA-Z]+$/)))
            document.getElementById("phoneerr").innerHTML=falseAlpha;

    	if(!num.match(/\S/))
        	document.getElementById("phoneerr").innerHTML=blank;
    }
    
    var defaultArea = "618";
    if(num.length == 7){
        num = defaultArea + num;
    }
        
    var areaCode = num.substring(0, 2);
    var endNumber = num.substring(3, 9);
        
    num.value = areaCode + endNumber;
    
    //*********************************
    //START EMAIL VALIDATION (emailerr)
    //*********************************
    document.getElementById("emailerr").innerHTML='';
    
    if(!email.match("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$")){
       document.getElementById("emailerr").innerHTML="Incorrect format";
	
	if(!email.match(/\S/))
		document.getElementById("emailerr").innerHTML=blank;
    }
    
    //*************************************
    //START SUBJECT VALIDATION (subjecterr)
    //*************************************
    document.getElementById("subjecterr").innerHTML='';
    
    if(!subject.match(/\S/))
        document.getElementById("subjecterr").innerHTML=blank;
    
    //*************************************
    //START EXPLAIN VALIDATION (explainerr)
    //*************************************
    document.getElementById("explainerr").innerHTML='';
    
    if(!explain.match(/\S/))
        document.getElementById("explainerr").innerHTML=blank;
    
}


