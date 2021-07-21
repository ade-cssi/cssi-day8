// Retrieve the messages from the database
const getMessages = () => {
 const messagesRef = firebase.database().ref('/messages');
 messagesRef.on('value', (snapshot) => {
     const data = snapshot.val();
     console.log(data);
 });
}


// Hide the passcode view 

 const passcodeInput = document.querySelector('#passcodeInput');
 passcodeInput.style.display = 'none';

 // Show the message 

  const messageDiv = document.querySelector('#message');
 messageDiv.innerHTML = message;

 // Look through the messages retrived from the database to see if there is anyone one matching the input 

 const passcodeAttempt = document.querySelector('#passcode').value;
  for (message in messages) {
     const messageData = messages[message];
     if (messageData.passcode === passcodeAttempt) {
         // Code to hide input form, and render message as HTML
     }
 }