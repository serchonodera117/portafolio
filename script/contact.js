

let whatsapp = document.getElementById('whats');
whatsapp.addEventListener('click',() => {
    let url="https://api.whatsapp.com/send?phone=+523122282017&text=Hola, buen día...";
    let newWin = open(url,'whatsapp', 'height=700, width=700');
})


let asunto = document.getElementById('asunto');
let thename = document.getElementById('emisor-name');
let gmail = document.getElementById('emisor-email');
let message = document.getElementById('emisor-mensaje');

function send(){

      
   let valMessage = document.getElementById('validationMessage');


   if(checkName(thename.value) && checkGmail(gmail.value) && checkMessage(message.value) && checkAsunto(asunto.value)){
    
      let data={
         "asunto": asunto.value,
         "nombre": thename.value,
         "email": gmail.value,
         "mensaje": message.value,
      }
     
      enviar(data)
   
     // console.log('mensajes listos')
      validationMessage.style.display = 'none';
   }
   else{
      validationMessage.style.display='block'
      console.log("mensajes vacios")
   }
}


function unactiveM(){
   let valMessage = document.getElementById('validationMessage');
   validationMessage.style.display = 'none';
}

function checkName(name){return (name.trim()==='')? false : true;}
function checkGmail(gmail){return (gmail.trim()==='')? false : true;}
function checkMessage(message){return (message.trim()==='')? false : true;}
function checkAsunto(asunto){return (asunto.trim()==='')?false : true;}

function enviar(data){
   let url= "https://registrosappinventor.000webhostapp.com/contacto/thecontact.php?";

   let progressBar= document.getElementById("progressBar");
   progressBar.style.display = 'block';
   console.log(data);
 
   fetch(url , {
      method: 'POST',
      body: JSON.stringify(data),
   })
   
   .then(response => response.text())
   .then(response =>{

      progressBar.style.display = 'none';
      alert(response);
      asunto.value="";
      thename.value="";
      gmail.value="";
      message.value="";
   })
   .catch(err =>{
      console.log(err);
   })
}