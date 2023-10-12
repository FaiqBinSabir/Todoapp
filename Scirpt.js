
const a = document.getElementById("log");
const b = document.getElementById("signup");
const c =document.getElementById("login");
const d = document.getElementById("sign");
var userid = 1000;

a.addEventListener('click',function () {
   // event.preventDefault();

    b.style.display = "block";
    c.style.display = "none"

})

d.addEventListener('click',function (event) {
    event.preventDefault();

    c.style.display = "block";
    b.style.display = "none"

})


var users=[];

function myfunction(event) {
    event.preventDefault();
    
    var email = document.getElementById("signupemail").value;
   var password=  document.getElementById("signuppassword").value;
   var confirmpassword=  document.getElementById("confirmpassword").value;



   if (email  !="") {
  let csd = email.split("");

  let a ='';
  csd.forEach((b,i)=>{
  
      if (csd[i] =="@") {
          
          a= "@";
      }
      if (csd[i]==".") {
          a = a+ "."
          
      }
  
  })
  if (a !="@." ) {
    document.getElementById("errormsgemail").style.display = "block";
  }
  else{


    if (password!="" && password == confirmpassword) {
        
        
        if (localStorage.getItem('userData') == null) {
  
            users.push({email,password,userid : ++userid});
             localStorage.setItem("userData",JSON.stringify(users));
            
          } else {
          
             users = JSON.parse(localStorage.getItem('userData'))
            users.push({email,password});
             localStorage.setItem("userData",JSON.stringify(users));
          
          }
                        
        swal({
            title: "Welcome!",
            text: "Account Created!",
            icon: "success",
          }).then(() => {
                    b.style.display = "none";
                    c.style.display = "block";
                 
        document.getElementById("errorpasswordsignin").style.display ="none";
        
        
    document.getElementById("errormsgemail").style.display = "none";
    
    document.getElementById("match").style.display="none";
    
    document.getElementById("signupemail").value = "";
 document.getElementById("signuppassword").value ="";
    document.getElementById("confirmpassword").value ="";
    


          })


    }

    else{

        if (password =="") {
            
        document.getElementById("errorpasswordsignin").style.display ="block";
            
        }
       
        if (confirmpassword != password) {
            
            
        document.getElementById("match").style.display="block";
        }


    }
   }
}}

function logincheck(event) {
    
    
    event.preventDefault();
    var c = document.getElementById("loginemail").value;
    var d = document.getElementById("loginpassword").value;


      
  var email = document.getElementById("loginemail").value;

  if(d ==="" ){
    document.getElementById("errorpasswordlogin").style.display ="block";
    

}

  let csd = email.split("");

  let a ='';
  csd.forEach((b,i)=>{
  
      if (csd[i] =="@") {
          
          a= "@";
      }
      if (csd[i]==".") {
          a = a +"."
          
      }
  
  })

if (a!="@.") {
    document.getElementById("errormsgemaillogin").style.display = "block";
        
    document.getElementById("signupemail").value="";
    
}



users = JSON.parse(localStorage.getItem('userData'))
   
    const user = users.find((user) => user.email === c && user.password === d);

if (user) {

    swal({
        title: "Welcome!",
        text: "Login Sucessful!",
        icon: "success",
      }).then(() => {
    location.href = "DashBoard.html";
    document.getElementById("loginemail").value = "";
    document.getElementById("loginpassword").value = ""; });
    return;
} else {



    if (c == "") {

        document.getElementById("errormsgemaillogin").style.display = "block";
        
        
    } else if (d == "") {
        
        
        document.getElementById("errorpasswordlogin").style.display = "block";
    }
    
    else if (c=="" && d =="") {
        
        document.getElementById("errormsgemaillogin").style.display = "block";
        
        document.getElementById("errorpasswordlogin").style.display = "block";
        
    }
    else{

        swal({
            title: "Failure!",
            text: "Incorrect credientials!",
            icon: "error",
          });
    document.getElementById("loginpassword").value = "";
    
    document.getElementById("errormsgemaillogin").style.display = "none";
        
    document.getElementById("errorpasswordlogin").style.display = "none";

}
}

   
    if (users.length ==0 ) {
    

        document.getElementById("dat").style.display ='block'
    }
}


// authetication done till here 


function logout() {
        

    // swal({
    //     title: 'Are you sure?',
    //     text: 'Confirm to logout?',
    //     icon: 'warning',
    //     showCancelButton: true,
    //     ButtonText: 'Yes!',
    //     ButtonText: 'No',
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //         location.href = "index.html";
    //     } else if (result.isDenied) {


    //     }
    //   });
    swal({
        title: 'Are you sure?',
       text: 'Confirm to logout?',
            icon: 'warning',
      })
      .then(()=>{

      location.href = "index.html"});
}