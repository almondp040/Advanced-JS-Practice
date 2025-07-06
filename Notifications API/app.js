//Notifications API Logic

//Example: 
//First step is to ask for permission, and is all promise based in modern browsers
async function showNotification() {
    const permission = await Notification.requestPermission(); 
    if (permission === 'granted') {
         const notification = new Notification("Hello!", {body: 'This is a notification', requireInteraction: true}); 
         
        notification.addEventListener('click', ()=>{
            console.log("Notification has been Clicked!")
        })
        
    } else if (permission === 'denied') {
         new Notification("Denied Notification", {body: 'Notifications Denied!'})
    }
}



//Connect the notifications to the button: 
const button = document.getElementById('Click'); 
button.addEventListener('click', showNotification); 