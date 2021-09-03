//it will send a message to the server
socket.emit("userConnected", username) ;

socket.on("leave", function(dataObj){
    let leaveDiv = document.createElement("div") ;
    leaveDiv.classList.add("chat") ;
    leaveDiv.classList.add("leave") ;
    leaveDiv.textContent = `${dataObj.username} left chat` ;
    chatWindow.append(leaveDiv) ;

    deleteFromOnlineList(dataObj.id) ;
     
})

socket.on("join", function(dataObj){
    let joinDiv = document.createElement("div") ;
    joinDiv.classList.add("chat") ;
    joinDiv.classList.add("join") ;
    joinDiv.textContent = `${dataObj.username} joined chat` ;
    chatWindow.append(joinDiv) ;

    addInOnlineList(dataObj) ;

})

socket.on("chatLeft", function(chatObj){
    let chatDiv = document.createElement("div") ;
    chatDiv.classList.add("chat") ;
    chatDiv.classList.add("left") ;
    chatDiv.textContent = chatObj.username + " : " + chatObj.chat ;
    chatWindow.append(chatDiv) ;

})
socket.on("online-list", function(userList){
    console.log(userList) ;
})

function deleteFromOnlineList(id){
    console.log("inside delete") ;
}

function addInOnlineList(userObj){
    console.log("inside add") ; 
}