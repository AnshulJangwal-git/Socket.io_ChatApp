//it will send a message to the server
socket.emit("userConnected", username) ;

socket.on("join", function(username){
    let joinDiv = document.createElement("div") ;
    joinDiv.classList.add("chat") ;
    joinDiv.classList.add("join") ;
    joinDiv.textContent = `${username} joined chat` ;
    chatWindow.append(joinDiv) ;
    
})