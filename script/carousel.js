let title = document.getElementById("selected-ptoject");
let images = document.getElementById("photos-project");
let sliderIndicator = document.getElementById("carousel-btn-indicators");
let description = document.getElementById("cuerpo-texto");

function gisselles(){
title.innerHTML = "Gisselle's Adventure"
sliderIndicator.innerHTML =`
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
`   
images.innerHTML =`
 <div class="carousel-item active">
                <img src="images/projets/gisselles-adventure/01.PNG" class="d-block w-100 image-carousel image-carousel" alt="...">
              </div>
              <div class="carousel-item">
                <img src="images/projets/gisselles-adventure/02.PNG" class="d-block w-100 image-carousel image-carousel" alt="...">
              </div>
              <div class="carousel-item">
                <img src="images/projets/gisselles-adventure/03.PNG" class="d-block w-100 image-carousel image-carousel" alt="...">
              </div>
              <div class="carousel-item">
                <img src="images/projets/gisselles-adventure/04.PNG" class="d-block w-100 image-carousel image-carousel" alt="...">
              </div>
              <div class="carousel-item">
                <img src="images/projets/gisselles-adventure/05.PNG" class="d-block w-100 image-carousel image-carousel" alt="...">
              </div>
              <div class="carousel-item">
              <img src="images/projets/gisselles-adventure/06.png" class="d-block w-100 image-carousel image-carousel" alt="...">
            </div>
`;

description.innerHTML =`
<p><b>Description:</b> It's an 8bit rpg platformer videogame created in godot script, 
and Currently i'm still developing it.<br><br>

Gisselles Adventure is a serious game about social anxiety,
it has many scenes and cinematics, you can play in different
modes, for example rpg and platformer.<br><br>

features: you can play it on web and desktop, to play also you can use 
keyboeard, any console control or touch buttons that apears
when you devise has a touch screen. the game is conformed for many scenes,
and a lineal story about the protagonist<br><br>

controls: <br>
- Walk: wasd/joystic<br>
- Shoot candies: X, [xbox: B]<br>
- Jump: [keyboard: w,uparrow, space], [xbox: a]<br><br>
</p>
<div id="content-buton-project">
<a class="button-go" onclick="open('https://serch-onodera.itch.io/gisselles-adventure','Project','height=700,width=700')">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-controller" viewBox="0 0 16 16">
   <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z"/>
   <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z"/>
 </svg>
 play
</a>

<a class="button-go" onclick="open('https://github.com/serchonodera117/Gisselles_adventure','Project','height=700,width=700')">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
   <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
 </svg>
 Github
</a>
</div>
`;
}


function webfavnime(){
  title.innerHTML = "myFavnime web"
    sliderIndicator.innerHTML =`
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
 `
 images.innerHTML =`
   <div class="carousel-item active">
      <img src="images/projets/javascript-my-favnime/01.PNG" class="d-block w-100 image-carousel image-carousel" alt="...">
   </div>
   <div class="carousel-item">
    <img src="images/projets/javascript-my-favnime/02.PNG" class="d-block w-100 image-carousel image-carousel" alt="...">
   </div>
   <div class="carousel-item">
   <img src="images/projets/javascript-my-favnime/03.PNG" class="d-block w-100 image-carousel" alt="...">
 </div>
 <div class="carousel-item">
 <img src="images/projets/javascript-my-favnime/04.PNG" class="d-block w-100 image-carousel" alt="...">
</div>
 `

    description.innerHTML =`
    <p><b>Description:</b> It's a personal project about a simple social media or web page,
    i'm still developing this project on vanila javascript<br><br>

    myFavnime is a social media to watch series and read comics, it has a login to regist users
    upload media and documents, it has it's own data basa hosted in 000webhost.<br><br>

    features: web apllication with a sql database and api made in php and phpmyadmin<br><br>

    </p>
    <div id="content-buton-project">
    <a class="button-go" onclick="open('https://github.com/serchonodera117/myFavnime_web-ver','Project','height=700,width=700')">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
    </svg>
    Github
    </a>
    </div>
    `;
}

function kotlin1(){
  title.innerHTML = "Sales Mobil App"
    sliderIndicator.innerHTML =`
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
 `

 images.innerHTML =`
 <div class="carousel-item active">
    <img src="images/projets/Kotlin-sales-app/0q.PNG" class="d-block w-100 image-carousel" alt="...">
 </div>
 <div class="carousel-item">
 <img src="images/projets/Kotlin-sales-app/02.PNG" class="d-block w-100 image-carousel" alt="...">
 </div>
 <div class="carousel-item">
 <img src="images/projets/Kotlin-sales-app/03.PNG" class="d-block w-100 image-carousel" alt="...">
 </div>
 <div class="carousel-item">
 <img src="images/projets/Kotlin-sales-app/04.PNG" class="d-block w-100 image-carousel" alt="...">
 </div>
 <div class="carousel-item">
 <img src="images/projets/Kotlin-sales-app/05.PNG" class="d-block w-100 image-carousel" alt="...">
 </div>
 <div class="carousel-item">
 <img src="images/projets/Kotlin-sales-app/06.PNG" class="d-block w-100 image-carousel" alt="...">
 </div>
 <div class="carousel-item">
 <img src="images/projets/Kotlin-sales-app/07.PNG" class="d-block w-100 image-carousel" alt="...">
 </div>
 <div class="carousel-item">
 <img src="images/projets/Kotlin-sales-app/08.PNG" class="d-block w-100 image-carousel" alt="...">
 </div>
 <div class="carousel-item">
 <img src="images/projets/Kotlin-sales-app/09.PNG" class="d-block w-100 image-carousel" alt="...">
 </div>
 `

 description.innerHTML =`
 <p><b>Description:</b> It's a final school project, is a sales app that allow to create two type of users 
 'seller' or 'customer'
 <br><br>

 A customer can upload its business, seller user can uplowad products and items into his business or enterprises 
 as a customer user, you can make a research of all bussiness, bussiness in your city, or make a research by name, type or city,
 also you can make the same type of researcch for any product, the app has a nav menu, and some fragments, bussiness (all, local or x type),
 products and services, sales car and a fragment to your profile, you can buy, cancel product, edit your bought befor you paid, and finaly, 
 once time you recieve your product, you can vote it, then, other users can se the average for that product.<br><br>

 features: Any user can buy, comment, cancel products, add products to your shopping car, edit them and delete them,
 as a seller user, you can add products to your store, edit them, delete them ad hide them, finaly, both users can see the process of the sale
 both types of users have a record, but seller user has a record of his sales.
 <br><br>

 this projet is finished.
 </p>
 <div id="content-buton-project">
 <a class="button-go" onclick="open('https://www.google.com/','Project','height=700,width=700')">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
   <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
 </svg>
 Github
 </a>
 </div>
 `;
}

function kotlin2(){
  title.innerHTML = "Gps Search App"
  sliderIndicator.innerHTML =`
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  `;

  images.innerHTML =`
  <div class="carousel-item active">
   <img src="images/projets/Kotlin-gps-app/01.png" class="d-block w-100 image-carousel" alt="...">
   </div>
   <div class="carousel-item">
     <img src="images/projets/Kotlin-gps-app/02.png" class="d-block w-100 image-carousel" alt="...">
   </div>
   
   <div class="carousel-item">
     <img src="images/projets/Kotlin-gps-app/03.png" class="d-block w-100 image-carousel" alt="...">
   </div>
   
   <div class="carousel-item">
     <img src="images/projets/Kotlin-gps-app/04.png" class="d-block w-100 image-carousel" alt="...">
   </div>
  `;

  description.innerHTML =`
  <p><b>Description:</b> it's an exam for an specific school subject<br><br>

  this app was created by using the api of google and kotlind in android studio.<br><br>

  features: you can search any place you want, you can search by name and coordenates<br><br>

  </p>
  <div id="content-buton-project">
  <a class="button-go" onclick="open('https://www.google.com/','Project','height=700,width=700')">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>
  Github
  </a>
  </div>
  `;
}

function prototype_servicios(){
  title.innerHTML = "Design prototype"

  sliderIndicator.innerHTML =`
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
  `;

  images.innerHTML =`
  <div class="carousel-item active">
   <img src="images/projets/prototype-html-servicios/01.PNG" class="d-block w-100 image-carousel" alt="...">
   </div>
   <div class="carousel-item">
     <img src="images/projets/prototype-html-servicios/02.PNG" class="d-block w-100 image-carousel" alt="...">
   </div>
   
   <div class="carousel-item">
     <img src="images/projets/prototype-html-servicios/03.PNG" class="d-block w-100 image-carousel" alt="...">
   </div>
   
   <div class="carousel-item">
     <img src="images/projets/prototype-html-servicios/04.PNG" class="d-block w-100 image-carousel" alt="...">
   </div>

   
   <div class="carousel-item">
     <img src="images/projets/prototype-html-servicios/05.PNG" class="d-block w-100 image-carousel" alt="...">
   </div>
  
   
   <div class="carousel-item">
     <img src="images/projets/prototype-html-servicios/06.PNG" class="d-block w-100 image-carousel" alt="...">
   </div>

  `;


  description.innerHTML =`
  <p><b>Description:</b>A practice of human interaction computer<br><br>

  this app was created by using the html and css vanila.<br><br>

  features: is responsive<br><br>

  </p>
  <div id="content-buton-project">
  <a class="button-go" onclick="open('https://github.com/serchonodera117/design-app-cafeteria','Project','height=700,width=700')">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>
  Github
  </a>
  </div>
  `;
  
}

function razorCrud(){
  title.innerHTML = "Blazor local crud"


  sliderIndicator.innerHTML =`
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  `;
  images.innerHTML =`
  <div class="carousel-item active">
   <img src="images/projets/Raxor/00.PNG" class="d-block w-100 image-carousel" alt="...">
   </div>`

   description.innerHTML =`
   <p><b>Description:</b> This was a Blazor project to web devloping with .net
     It was about a crud app with a local database no sql.
    <br><br>
   </p>
   <div id="content-buton-project">
   <a class="button-go" onclick="open('https://www.google.com/','Project','height=700,width=700')">
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
     <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
   </svg>
   Github
   </a>
   </div>
   `;
}

function cchar_challenge(){
  sliderIndicator.innerHTML =`
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>`

 images.innerHTML =`
 <div class="carousel-item active">
  <img src="images/projets/chalenge_cshar/00.PNG" class="d-block w-100 image-carousel" alt="...">
  </div>
  <div class="carousel-item">
    <img src="images/projets/chalenge_cshar/01.PNG" class="d-block w-100 image-carousel" alt="...">
  </div>
  
  <div class="carousel-item">
    <img src="images/projets/chalenge_cshar/02.PNG" class="d-block w-100 image-carousel" alt="...">
  </div>
 `

 description.innerHTML =`
 <p><b>Description:</b> This console projet was created to show programming oriented to object bases
  I made a public classs to methods to build the display numbers, I delcared parameters, and two constructors to set a value 
  for those parameters, a public method to read the input sring and call functions to build numbers using 3d arrays. 
  <br><br>
 </p>
 <div id="content-buton-project">
 <a class="button-go" onclick="open('https://github.com/serchonodera117/challenge','Project','height=700,width=700')">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
   <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
 </svg>
 Github
 </a>
 </div>
 `;

}

function react_native(){
  title.innerHTML = "myFavnime Mobil version"

  sliderIndicator.innerHTML =`
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  `;
  images.innerHTML =`
  <div class="carousel-item active">
   <img src="images/projets/ReactNative/00.PNG" class="d-block w-100 image-carousel" alt="...">
   </div>`

   description.innerHTML =`
   <p><b>Description:</b> This is the continuation of that personal projet, I'm also developing the mobile version 
   using React Native, currently is just a simple no functional prototype.
    <br><br>
   </p>
   <div id="content-buton-project">
   <a class="button-go" onclick="open('https://www.google.com/','Project','height=700,width=700')">
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
     <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
   </svg>
   Github
   </a>
   </div>
   `;
}


function opWindow(){
  var newWin = open('./documents/cv_in_english.pdf','Curriculum','height=700,width=700');
}



