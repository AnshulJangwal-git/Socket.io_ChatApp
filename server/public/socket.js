//it will send a message to the server
socket.emit("userConnected", username) ;

socket.on("leave", function(username){
    let leaveDiv = document.createElement("div") ;
    leaveDiv.classList.add("chat") ;
    leaveDiv.classList.add("leave") ;
    leaveDiv.textContent = `${username} left chat` ;
    chatWindow.append(leaveDiv) ;
})

socket.on("join", function(username){
    let joinDiv = document.createElement("div") ;
    joinDiv.classList.add("chat") ;
    joinDiv.classList.add("join") ;
    joinDiv.textContent = `${username} joined chat` ;
    chatWindow.append(joinDiv) ;

})

socket.on("chatLeft", function(chatObj){
    let chatDiv = document.createElement("div") ;
    chatDiv.classList.add("chat") ;
    chatDiv.classList.add("left") ;
    chatDiv.textContent = chatObj.username + " : " + chatObj.chat ;
    chatWindow.append(chatDiv) ;

})