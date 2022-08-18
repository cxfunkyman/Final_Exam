// ------------------------------------------------------- 
// Final Exam 
// Written by: Seky Perez Moya 219-5412 
// For “Front-End Web Programming” Section 05807 - Winter 2022 
// -------------------------------------------------------- 

// funtion to calculate the total of the query
function calculate(){
    if (document.querySelector('input[name="Lease"]:checked') == null) {
        alert("Please complete your order");
    }
    else {
    var fee1 = 0;
    var fee2 = 0;
    var Selection = document.querySelector('input[name="Lease"]:checked').value;
   
    if(Selection =='Yearly Lease'){
      fee1 = 5000;
    }
    else if(Selection =='6 Month Lease'){
      fee1 = 2800;
    }
    else if(Selection =='3 Month Lease'){
      fee1 = 950;
    }
    else if (Selection =='Monthly') {
      fee1 = 500;
    }
    else if (Selection =='One-Time Purchase') {
        fee1 = 20000;
      }
      document.getElementById("feelicense").setAttribute('value', '$' + fee1); 


      if(document.querySelector('[name="support"]:checked') != null) {
        fee2 += 3500;
      }
      if(document.querySelector('[name="tranning"]:checked') != null) {
        fee2 += 2000;
      }
      if(document.querySelector('[name="cloud"]:checked') != null) {
        fee2 += 300;
      }
    
    document.getElementById("feefeatures").setAttribute('value', '$' + fee2); 

} 
  }
//funtion to send the contact form
  function ContactForm() {
    var firstname = 
        document.forms["ContForm"]["firstname"];
    var lastname = 
        document.forms["ContForm"]["lastname"];
    var email = 
        document.forms["ContForm"]["email"];
    var subject = 
        document.forms["ContForm"]["subject"];
  
    if (firstname.value == "") {
        window.alert("Please enter your name.");
        firstname.focus();
        return false;
    }
  
    else if (lastname.value == "") {
        window.alert("Please enter your last name.");
        lastname.focus();
        return false;
    }
  
    else if (email.value == "") {
        window.alert(
          "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
  
    else if (subject.value == "") {
        window.alert(
          "Please enter the subject you are inquiring.");
        subject.focus();
        return false;
    }
    else {
        window.alert(
            "Thank you, we will be answering as soon as possible.");
        return window.reload(true);            
    } 

  }
