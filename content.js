
var locationToExecute="binance.com"
var currentBrowserLocation=window.location.href
if(currentBrowserLocation.includes(locationToExecute)){
    if(currentBrowserLocation =="https://www.binance.com/en"){
        window.location.href="https://www.binance.com/en/my/dashboard"
    }
}