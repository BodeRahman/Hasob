function checkButton() {    
    var getSelectedValue = document.querySelector(   
        'input[name="optradio"]:checked');   
        
    if(getSelectedValue != null) {   
        document.getElementById("disp").innerHTML   
            = getSelectedValue.value   
            + " is selected";   
    }   
    else {   
        document.getElementById("error").innerHTML   
            = "*You have not selected any option ";   
    }   
}    

function smallestTag() {  
    var mylist = document.getElementById("myList");  
    document.getElementById("smallest").value = mylist.options[mylist.selectedIndex].text;  
}  

function checkCheckbox() {  
    var yes = document.getElementById("myCheck1");  
    var no = document.getElementById("myCheck2");  
    if (yes.checked == true && no.checked == true){  
      return document.getElementById("error").innerHTML = "Please mark only one checkbox either Yes or No";  
    }  
    else if (yes.checked == true){  
      var y = document.getElementById("myCheck1").value;  
      return document.getElementById("result").innerHTML = y;   
    }   
    else if (no.checked == true){  
      var n = document.getElementById("myCheck2").value;  
      return document.getElementById("result").innerHTML = n;  
    }  
    else {  
      return document.getElementById("error").innerHTML = "*Please mark any of checkbox";  
    }  
} 

function validateemail()  
{  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  }  
}