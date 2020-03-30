function nameValidation(){
    var letters = /^[A-Za-z]+$/;
    var first_name=document.registration_form.fname.value; 
    var last_name=document.registration_form.lname.value;
    if(first_name.match(letters) && last_name.match(letters) && first_name!==null && first_name!=="" && last_name!==null && last_name!=="")
      { 
          return flag=true;
      }else{
          alert("Enter alphabet characters in name");
          return flag=false;
      }
}

function emailValidation(){
      var emailPattern = /\w+@(perficient)+\.(com)/;
      var email = document.registration_form.email.value;
      if(email.match(emailPattern) && email!==null && email!=="")
       {
          return flag=true;  
       }else{ 
          alert("Please include @perficient.com in the email");
          return flag=false; 
      }
}

function numberValidation(){
     var number = document.registration_form.number.value;
     var numberPattern = /([(][0-9]{3}[)]|[0-9]{3})[\s][0-9]{3}-[\s][0-9]{4}/;
     if(number.match(numberPattern) && number!==null && number!==""){
         return flag=true;
     }else{
         alert("Only US mobile number");
         return flag=false;
     }
}

function passwordValidation(){
    var passwordPattern = /^(?=.*[a-z])(?=.*[!@#\$%\^&\*])/;
    var firstpassword=document.registration_form.password1.value;  
    var secondpassword=document.registration_form.password2.value;
    if(firstpassword.match(passwordPattern) && firstpassword!==null && firstpassword!=="" && matchPassword()===true){
        return flag=true;  
    }else{
        alert("Please include atleast one special character in password");
        return flag=false;
    }
    function matchPassword(){
    if(firstpassword == secondpassword && secondpassword!==null && secondpassword!==""){
         return flag=true;  
    }else{
         alert("Please Confirm password correctly"); 
         return flag=false; 
    }
  }
}


function validateform(){
      var first_name=document.registration_form.fname.value; 
      var last_name=document.registration_form.lname.value;
      if(nameValidation()===true && emailValidation()===true && numberValidation()===true && passwordValidation()===true){
          alert("Thank You"+" "+first_name+" "+last_name+" "+"you registered successfully");
      }else{
          return false;
      }
      document.getElementById("reset").reset();
      
}   
    

//^[789]\d{9}$









































































































































































































































    
    
    
    
    
    
    
    
    
    
    
    
    
    
    