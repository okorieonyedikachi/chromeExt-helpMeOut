 document.addEventListener("DOMContentLoaded", () => {
    //get selectors
    const startVideoButton = document.querySelector("button#recordBtn")
    const stopVideoButton = document.querySelector("button#stopBtn")

    //event listeners
    startVideoButton.addEventListener("click", ()=>{
        chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action:"request_recording"}, function(response){
                if(!chrome.runtime.lastError){
                    console.log(response);
                }else{
                    console.log(chrome.runtime.lastError, "error line 12");
                }
            })
            
        })
    })

    stopVideoButton.addEventListener("click", ()=>{
        chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action:"stopvideo"}, function(response){
                if(!chrome.runtime.lastError){
                    console.log(response);
                }else{
                    console.log(chrome.runtime.lastError, "error line 27");
                }
            })
        })
    })

 })

//  const checkbox = document.getElementById('useCamera');

//  checkbox.addEventListener('click', function (e) {
//      if(e.checked) {
//          //run code that asks for camera permissions
//      }
//  })