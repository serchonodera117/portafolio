let myApp = {
    data(){
        return{ 
            emailContact:{
                name:'',
                subject:'',
                email:'',
                message:''
            },
            section: 1, //1 default
            sectionBackup: 1,
            notValidData: false,
            searchBy: '', //search anything about technology, experience or a project
            buscando: false,
         
            project_cards:[
                {
                    name:"Gisselle's Adventure",          //--- standard for other kind of cards
                    p_img:"images/projets/gisselles-adventure/01.PNG",
                    technology:"images/projets/Icon-tech/godot.png",

                    language_or_technology: 'Godot script',
                    title:"Gisselle's Adventure",
                    slide_indicator:`
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                   `,
                    images:`
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
                    `,
                    description:
                    `
                    <p><b>Description:</b> It's an 8bit rpg platformer videogame created in godot script, 
                        and Currently i'm still developing it.<br><br>
                        Gisselles Adventure is a serious game about social anxiety,
                        it has many scenes and cinematics, you can play in different
                        modes, for example rpg and platformer.<br><br>
                        features: you can play it on web and desktop, to play also you can use 
                        keyboeard, any console control or touch buttons that apears
                        when you device has a touch screen. the game is conformed by many scenes,
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
                        </div>
                    `
                },
                {
                  name:"Sales app",
                  p_img:"images/projets/Kotlin-sales-app/0q.PNG",
                  technology:"images/projets/Icon-tech/kotlin.png",
                  language_or_technology: 'Kotlin PHP',
                  title: 'Sales App',
                  slide_indicator:`
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
                  `,
                  images: `
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
                  `,
                  description: `
                  <p><b>Description:</b> It's a final school project, is a sales app that allow to create two type of users 
                  'seller' or 'customer'
                  <br><br>
                  A customer can upload his business, seller user can upload products and items into his business or enterprises 
                  as a customer user, you can make a research of all bussiness, bussiness in your city, or make a research by name, type or city,
                  also you can make the same type of research for any product, the app has a nav menu, and some fragments, bussiness (all, local or x type),
                  products and services, shopping cart and a fragment to your profile, you can buy, cancel product, edit your bought before you pay, and finaly, 
                  once time you recieve your product, you can vote it, then, other users can se the average for that product.<br><br>
                  features: Any user can buy, comment, cancel products, add products to your shopping car, edit them and delete them,
                  as a seller user, you can add products to your store, edit them, delete them ad hide them, finaly, both users can see the process of the sale
                  both types of users have a record, but seller user has a record of his sales.
                  <br><br>
                  this project was createrd with kotlin, and it's APIS was created by me using php and phpmyandmin (in a basic level), and currently is hosted in 000webhost.
                  </p>
                  <div id="content-buton-project">
                  <a class="button-go" onclick="open('https://github.com/serchonodera117/proyecto_final','Project','height=700,width=700')">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  Github
                  </a>
                  </div>
                  `
                 },
                 {
                  name:"Real time chat",
                  p_img:"images/projets/react_chat/rc_0.png",
                  technology: "images/projets/Icon-tech/reactjs.png",
                  language_or_technology: "React js html css Firestore Firebase",
                  title:"React real time chat",
                  slide_indicator:`
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
                  `,
                  images: `
                  <div class="carousel-item active">
                   <img src="images/projets/react_chat/rc_0.png" class="d-block w-100 image-carousel" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="images/projets/react_chat/rc_1.png" class="d-block w-100 image-carousel" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="images/projets/react_chat/rc_2.png" class="d-block w-100 image-carousel" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="images/projets/react_chat/rc_3.png" class="d-block w-100 image-carousel" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="images/projets/react_chat/rc_4.png" class="d-block w-100 image-carousel" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="images/projets/react_chat/rc_5.png" class="d-block w-100 image-carousel" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="images/projets/react_chat/rc_6.png" class="d-block w-100 image-carousel" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="images/projets/react_chat/rc_7.png" class="d-block w-100 image-carousel" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="images/projets/react_chat/rc_9.png" class="d-block w-100 image-carousel" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="images/projets/react_chat/rc_10.png" class="d-block w-100 image-carousel" alt="...">
                  </div>
                `,
                  description:`
                  <p><b>Description:</b> I's a personal projact created by practicing React js'
                  <br><br>
                  On this little platform you can create your user account, start session, search other users by tagname,
                  or search for all ussers saved into the database, you can send friend recuest and receive them, accepting or refusing them, and
                  also you can reasearch into your contacts, send messages and receive notifications with the date time that they were sent.
                  <br><br>
                  this project was createrd with React js, javascript, html, css, and Firebase Firestore.
                  </p>
                  <div id="content-buton-project">
                    <a class="button-go" onclick="open('https://serchonodera117.github.io/react_chat/build/','Project','height=700,width=700')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-window" viewBox="0 0 16 16">
                      <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                    <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1H2z"/>
                    </svg>
                    Deploy 
                    </a>

                  <a class="button-go" onclick="open('https://github.com/serchonodera117/react_chat','Project','height=700,width=700')">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  Github
                  </a>
                  </div>
                  `
                 },
                 {
                  name:"React to do list",
                  p_img:"images/projets/react_todo_list/rc_0.png",
                  technology: "images/projets/Icon-tech/reactjs.png",
                  language_or_technology: "React js phpmyadmin, PHP and sql",
                  title:"React to do list",
                  slide_indicator:`
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 0"></button>
                  `,
                  images:`
                  <div class="carousel-item active">
                    <img src="images/projets/react_todo_list/rc_0.png" class="d-block w-100 image-carousel" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="images/projets/react_todo_list/rc_1.png" class="d-block w-100 image-carousel" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="images/projets/react_todo_list/rc_2.png" class="d-block w-100 image-carousel" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="images/projets/react_todo_list/rc_3.png" class="d-block w-100 image-carousel" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="images/projets/react_todo_list/rc_4.png" class="d-block w-100 image-carousel" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="images/projets/react_todo_list/rc_5.png" class="d-block w-100 image-carousel" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="images/projets/react_todo_list/rc_6.png" class="d-block w-100 image-carousel" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="images/projets/react_todo_list/rc_7.png" class="d-block w-100 image-carousel" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="images/projets/react_todo_list/rc_8.png" class="d-block w-100 image-carousel" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="images/projets/react_todo_list/rc_9.png" class="d-block w-100 image-carousel" alt="...">
                  </div>
                  `,
                  description:`
                  <p><b>Description:</b> I's a personal projact created by practicing React js'
                  <br><br>
                  On this little platform you can create your user account and log into it to create tasks, edit and delete them

                  <br><br>
                  this project was createrd with React js, javascript, html, css, and it's APIS was created by me using php and phpmyandmin (in a basic level), and currently is hosted in 000webhost.
                  </p>
                  <div id="content-buton-project">
                    <a class="button-go" onclick="open('https://serchonodera117.github.io/react_to_dp_list/build/','Project','height=700,width=700')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-window" viewBox="0 0 16 16">
                      <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                    <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1H2z"/>
                    </svg>
                    Deploy 
                    </a>

                  <a class="button-go" onclick="open('https://github.com/serchonodera117/react_to_dp_list','Project','height=700,width=700')">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  Github
                  </a>
                  </div>
                  `
                 },
                {
                    name:"myFavnime",
                    p_img:"images/projets/javascript-my-favnime/01.PNG",
                    technology:"images/projets/Icon-tech/js.png",
                    language_or_technology: 'HTML JavaScript CSS',
                    title: 'myFavnime',
                    slide_indicator:`
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    `,
                    images:`
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
                  `,
                    description: `
                    <p><b>Description:</b> It's a personal project about a simple social media or web page,
                    i'm still developing this project on vanila javascript<br><br>
                    myFavnime is a social media to watch series and read comics, it has a login to regist users
                    upload media and documents, it has it's own data basa hosted in 000webhost.<br><br>
                    features: web apllication with a sql database and api made on php and phpmyadmin<br><br>
                    </p>
                    <div id="content-buton-project">
                    <a class="button-go" onclick="open('https://github.com/serchonodera117/myFavnime_web-ver','Project','height=700,width=700')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    Github
                    </a>
                    </div>
                    `,
                },
                {
                    name:"GPS application",
                    p_img:"images/projets/Kotlin-gps-app/01.png",
                    technology:"images/projets/Icon-tech/kotlin.png",
                    language_or_technology: 'Kotlin',
                    title: 'Gps search app',
                    slide_indicator:`
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    `,
                    images: `
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
                    `,
                    description: `
                    <p><b>Description:</b> it's an exam for an specific school subject<br><br>
                    this app was created by using the api of google and kotlin in android studio.<br><br>
                    features: you can search any place you want, you can search by name and coordenates<br><br>
                    </p>
                    <div id="content-buton-project">
                    <a class="button-go" onclick="open('https://github.com/serchonodera117/gps_examen','Project','height=700,width=700')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    Github
                    </a>
                    </div>
                    `,
                },
                {
                  name: "myYTRequest",
                  p_img:"images/projets/myYTR_cshar/ytr_0.png",
                  technology:"images/projets/Icon-tech/sechar.png",
                  language_or_technology: 'C#',
                  title: 'myYTRequest',
                  slide_indicator: `
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                  `,
                  images: `
                  <div class="carousel-item active">
                  <img src="images/projets/myYTR_cshar/ytr_0.png" class="d-block w-100 image-carousel" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="images/projets/myYTR_cshar/ytr_1.png" class="d-block w-100 image-carousel" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="images/projets/myYTR_cshar/ytr_2.png" class="d-block w-100 image-carousel" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="images/projets/myYTR_cshar/ytr_3.png" class="d-block w-100 image-carousel" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="images/projets/myYTR_cshar/ytr_4.png" class="d-block w-100 image-carousel" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="images/projets/myYTR_cshar/ytr_5.png" class="d-block w-100 image-carousel" alt="...">
                  </div>
                  `,
                  description: `
                  <p><b>Description:</b>A desktop app for windows<br><br>
                  this is an app designed and created to download files .mp4 and mp3 from Youtube.<br><br>
                  features: <br>
                  <ul>
                    <li>Chose the path of the folder you want to use for your download</li>
                    <li>The folder path is saved automatically when click the folder icon</li>
                    <li>Preview of the video you want to search</li>
                    <li>Download the vido you want</li>
                    <li>Convert the video you want to audio</li>
                  <ul>
                  </p>
                  <div id="content-buton-project">
                  <a class="button-go" onclick="open('https://github.com/serchonodera117/myYTRequesr','Project','height=700,width=700')">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  Github
                  </a>
                  </div>
                  `
                },
                {
                    name: "Sales page",
                    p_img:"images/projets/prototype-html-servicios/01.PNG",
                    technology:"images/projets/Icon-tech/js.png",
                    language_or_technology: 'HTML JavaScript CSS',
                    title: 'Sales page',
                    slide_indicator:`
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    `,
                    images: `
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
                    `,
                    description: `
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
                    `,
                },
                {
                    name: "Local Crud nosql",
                    p_img:"images/projets/Raxor/00.PNG",
                    technology:"images/projets/Icon-tech/Blazor.png",
                    language_or_technology: 'C# Razor',
                    title: 'Blazor local crud',
                    slide_indicator:`
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    `,
                    images: `
                    <div class="carousel-item active">
                     <img src="images/projets/Raxor/00.PNG" class="d-block w-100 image-carousel" alt="...">
                     </div>`,
                    description: `
                    <p><b>Description:</b> This was a Blazor project to web devloping with .net
                      It was about a crud app with a local database no sql.
                     <br><br>
                    </p>
                    <div id="content-buton-project">
                    <a class="button-go" onclick="open('https://github.com/serchonodera117/blazorLocalCrudNoSQL/tree/master','Project','height=700,width=700')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    Github
                    </a>
                    </div>
                    `,
                },
                {
                  name: "Display numbers",
                  p_img:"images/projets/chalenge_cshar/00.PNG",
                  technology:"images/projets/Icon-tech/sechar.png",
                  language_or_technology: 'C#',
                    title: 'Display numbers',
                    slide_indicator: `
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>`
                  ,
                    images: `
                    <div class="carousel-item active">
                     <img src="images/projets/chalenge_cshar/00.PNG" class="d-block w-100 image-carousel" alt="...">
                     </div>
                     <div class="carousel-item">
                       <img src="images/projets/chalenge_cshar/01.PNG" class="d-block w-100 image-carousel" alt="...">
                     </div>
                     
                     <div class="carousel-item">
                       <img src="images/projets/chalenge_cshar/02.PNG" class="d-block w-100 image-carousel" alt="...">
                     </div>
                    `,
                    description: `
                    <p><b>Description:</b> This console projet was created to show programming oriented to object bases
                     I made a public classs with methods to build the display numbers, I delcared parameters, and two constructors to set a value 
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
                    `,
                },
                {
                    name: "myFavnive Mobile",
                    p_img:"images/projets/ReactNative/00.PNG",
                    technology:"images/projets/Icon-tech/reactnative.png",
                    language_or_technology: 'ReactNative Javascript',
                    title: 'myFavnime Mobile',
                    slide_indicator: `
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    `,
                    images: `
                    <div class="carousel-item active">
                     <img src="images/projets/ReactNative/00.PNG" class="d-block w-100 image-carousel" alt="...">
                     </div>`,
                    description: `
                    <p><b>Description:</b> This is the continuation of that personal projet, I'm also developing the mobile version 
                    using React Native, currently is just a simple no functional prototype.
                     <br><br>
                    </p>
                    <div id="content-buton-project">
                    <a class="button-go" onclick="open('https://github.com/serchonodera117/myFavnime-Mobile/tree/main/node_modules','Project','height=700,width=700')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    Github
                    </a>
                    </div>
                    `,
                }
            ],

            experience_cards:[
              {
              position:'Front end Developer in Educ',
              exp_img:'images/exp/educ/educ_logo.png',
              institution_logo:'images/exp/educ/universidad_de_colima.png',
              institution_name:'Dirección de educación a Distancia de la universidad de Colima',
              slide_indicator:`
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>

              `,
              images:`
                 <div class="carousel-item active">
                  <img src="images/exp/educ/educ_logo_page.png" class="d-block w-100 image-carousel" alt="...">
               </div>
               <div class="carousel-item">
                <img src="images/exp/educ/colaboradores_educ.png" class="d-block w-100 image-carousel" alt="...">
              </div>
              <div class="carousel-item">
                <img src="images/exp/educ/interface_educ.png" class="d-block w-100 image-carousel" alt="...">
              </div>
                <div class="carousel-item">
                <img src="images/exp/educ/interface_educ2.png" class="d-block w-100 image-carousel" alt="...">
              </div>
              <div class="carousel-item">
                <img src="images/exp/educ/interface_educ3.png" class="d-block w-100 image-carousel" alt="...">
              </div>
              `,
              description:`
               <p style="margin-left: auto; margin-right: auto; display: table; font-size:22"><b>Dirección de Educación a distancia de la Universidad de Colima</b></p>
               <br>
               <p><b>Description:</b> This is a platform to provide remote education created by Universidad de Colima. 
               My contract: profesional practices. </p>
                <p>
                    My role was Front-end developer with the following technologies: 
                </p>
                 <ul>
                 <li>Vue2</li>
                 <li>JavaScript</li>
                 <li>Html</li>
                 <li>Php</li>
                 <li>Css bootstrap, docker</li>
                 <li>docker</li>
                 <li>bootstrap</li>
                 </ul>

                  <p>
                    Most part of my profesional practices was about developing new modules for the platform
                    like an historial or a kind of admin mode, and provide maintenance for the platorm
                  </p>
              `,
            }
          ],


            hard_skills: [
              {
                name: 'English',
                img:'images/projets/Icon-tech/english.png',
                level:' B2'
              },
              {
              name: 'Javascript',
              img:'images/projets/Icon-tech/js.png',
              level:' Intermediate'
            },
            {
              name: 'C#',
              img:'images/projets/Icon-tech/sechar.png',
              level:' Intermediate'
            },{
              name: 'Kotlin',
              img:'images/projets/Icon-tech/kotlin.png',
              level:' Intermediate'
            },{
              name: 'Godot engine',
              img:'images/projets/Icon-tech/godot.png',
              level:' Intermediate'
            },
            {
              name: 'Vue.js',
              img:'images/projets/Icon-tech/vuejs.png',
              level:' Intermediate'
            },
            {
              name: 'React',
              img:'images/projets/Icon-tech/reactjs.png',
              level: ' Intermediate'
            },
            {
              name: 'Adove photoshop',
              img:'images/projets/Icon-tech/ps.png',
              level:' Intermediate'
            },
            {
              name: 'Android studio',
              img:'images/projets/Icon-tech/astudio.png',
              level:' Intermediate'
            },
            {
              name: 'Git',
              img:'images/projets/Icon-tech/git.png',
              level: ' Beginner'
            },
            {
              name: 'Github',
              img:'images/projets/Icon-tech/github.png',
              level: ' Beginner'
            },
            {
              name: 'Node js',
              img: 'images/projets/Icon-tech/nodejs.png',
              level: ' Beginner' 
            },
            {
              name: 'React-Native',
              img:'images/projets/Icon-tech/reactnative.png',
              level:' Beginner'
            },
            {
              name: 'Blazor',
              img:'images/projets/Icon-tech/Blazor.png',
              level:' Beginner'
            },
            {
              name:'Xamarin',
              img:'images/projets/Icon-tech/xamarin.png',
              level: ' Beginner'
            },
            {
              name: 'SQL Workbench',
              img:'images/projets/Icon-tech/sql-workbench.png',
              level:' Beginner'
            },
            {
              name: 'C++',
              img:'images/projets/Icon-tech/siplusplus.png',
              level:' Beginner'
            },
            {
              name: 'Java',
              img:'images/projets/Icon-tech/java.png',
              level: ' Beginner'
            },
            {
              name: 'Blender',
              img:'images/projets/Icon-tech/blender.png',
              level:' Beginner'
            },
            {
              name: 'C',
              img:'images/projets/Icon-tech/c.png',
              level:' Beginner'
            },
            {
              name: 'Php',
              img:'images/projets/Icon-tech/phpicon.png',
              level:' Beginner'
            },
            {
              name: 'Php myAdmin',
              img:'images/projets/Icon-tech/phpmyadmin.png',
              level:' Beginner'
            },
            {
              name: 'SQL Server',
              img:'images/projets/Icon-tech/sqlsever.png',
              level:' Beginner'
            },
            {
              name: 'Unity',
              img:'images/projets/Icon-tech/unity.png',
              level:' Beginner'
            },
          ],
          soft_skills: [{
            name: 'Communication',
            img:'images/projets/Icon-sft-skills/communication.png'
          },
          {
            name: 'Team work',
            img:'images/projets/Icon-sft-skills/teamwork.png'
          },
          {
            name: 'Problem solving',
            img:'images/projets/Icon-sft-skills/problem-solving.png'
          },
          {
            name: 'Stress management',
            img:'images/projets/Icon-sft-skills/stress_m.png'
          },
          {
            name: 'Adaptability',
            img:'images/projets/Icon-sft-skills/adaptability.png'
          },
          {
            name: 'Hardworking',
            img:'images/projets/Icon-sft-skills/hard_working.png'
          }
          ],

          certifications_cards:[
            {
              name:'Winner of Game 4 Empowerment',
              img:'images/certifications/Reconocimiento_G4E_2022_Ganadores-GARCIA_MICHEL_SERGIO.png',
              description:"my game 'Gisselles Adventure', won as the best contribution "
            },
            {
              name:'Competitor of Game 4 Empowerment',
              img:'images/certifications/Reconocimiento_G4E_2022_Participantes-GARCIA_MICHEL_SERGIO.png',
              description:"I developed a serious videogame using godot script "
            }
          ],
          modal_certifications_data:{
            name:'',
            img:'',
            description:'',
          },
          search_array: []
        }
    }, 
    methods:{
 //OPENING MODALES     
        setproject(index){
            let title = document.getElementById("selected-ptoject");
            let images = document.getElementById("photos-project");
            let sliderIndicator = document.getElementById("carousel-btn-indicators");
            let description = document.getElementById("cuerpo-texto");

            title.innerText = this.project_cards[index].title
            sliderIndicator.innerHTML = this.project_cards[index].slide_indicator
            images.innerHTML = this.project_cards[index].images
            description.innerHTML = this.project_cards[index].description
            // console.log("your index is", index)
        },
        set_experience(index){
          let title = document.getElementById("selected-exp");
          let images = document.getElementById("exp_photos");
          let sliderIndicator = document.getElementById("exp_carousel-btn-indicators");
          let description = document.getElementById("cuerpo-texto-exp");
          
          title.innerText = this.experience_cards[index].position
          sliderIndicator.innerHTML = this.experience_cards[index].slide_indicator
          images.innerHTML = this.experience_cards[index].images
          description.innerHTML = this.experience_cards[index].description

          console.log(title, sliderIndicator,images,description)
        },
        setSearchedCardModal(obj){
          let {title, imagesCarousel, slide_indicator ,description} = obj;

          let modalTitle = document.getElementById("selected-ptoject");
          let modalImages = document.getElementById("photos-project");
          let modalSliderIndicator = document.getElementById("carousel-btn-indicators");
          let modalDescription = document.getElementById("cuerpo-texto");

          modalTitle.innerText = title;
          modalDescription.innerHTML = description;
          modalImages.innerHTML =  imagesCarousel;
          modalSliderIndicator.innerHTML = slide_indicator                  
        },
        showModalCertifications(modal){
          let {name, img, description} = modal;
          this.modal_certifications_data.name = name;
          this.modal_certifications_data.img = img;
          this.modal_certifications_data.description = description;

          console.log(modal)
        },
 //WAYS TO CONTACT       
        wsp_contact(){
            let url="https://api.whatsapp.com/send?phone=+523122282017&text=Hola, buen día...";
            let newWin = open(url,'whatsapp', 'height=700, width=700');
        },
        gmail_contact(){
            if(this.checkName(this.emailContact.subject) && this.checkGmail(this.emailContact.email) && this.checkMessage(this.emailContact.message) && this.checkAsunto(this.emailContact.subject)){
                let data={
                    "asunto": this.emailContact.subject,
                    "nombre": this.emailContact.name,
                    "email": this.emailContact.email,
                    "mensaje": this.emailContact.message,
                }
                this.send(data)
                let modal = document.getElementById('close_modal')
                modal.click();
            }else{
                this.notValidData = true;
            }
        },
        send(data){
            let url= "https://myfavnime.000webhostapp.com/contact/contact.php?";
            let progressBar= document.getElementById("progressBar");
            progressBar.style.display = 'block';
            // console.log(data);
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
        },
//VALIDATIONS
         checkName(name){return (name.trim()==='')? false : true;},
         checkGmail(gmail){return (gmail.trim()==='')? false : true;},
         checkMessage(message){return (message.trim()==='')? false : true;},
         checkAsunto(asunto){return (asunto.trim()==='')?false : true;},
         menuChange(value){
          this.section = value;
          this.sectionBackup = value;
         },
//SEARCH FUNCTIONS  
         searchSomething(){
          let radio = document.querySelectorAll('input[name="option"]');
           if(this.searchBy.trim()){
             this.section = 0
             radio[this.sectionBackup-1].checked = false
             let busqueda = this.searchBy.toLowerCase()
             this.buscando =  true
             this.search_array = []

             this.searchInProjects(busqueda);

          }else{
            radio.checked 
            this.section = this.sectionBackup 
            radio[this.sectionBackup-1].checked = true
            this.buscando =  false
          }
         },
         searchInProjects(busqueda){
          let p = 0
          for(let i = 0; i < this.project_cards.length; i++){
            let anyName = this.project_cards[i].name.toLowerCase()
            let anyTech = this.project_cards[i].language_or_technology.toLowerCase()
            if(anyName.match(busqueda) || anyTech.match(busqueda)){
              let anyObject = {
                anyName:'',
                anyImage:'',
                anyCarouselImages:'',
                anySlideIndicator:'',
                anyTechIMG:'',
                anyDescription:'',
               }
              anyObject.anyName = this.project_cards[i].name
              anyObject.anyImage = this.project_cards[i].p_img
              anyObject.anyCarouselImages = this.project_cards[i].images
              anyObject.anySlideIndicator = this.project_cards[i].slide_indicator
              anyObject.anyTechIMG = this.project_cards[i].technology
              anyObject.anyDescription = this.project_cards[i].description
              this.search_array.push(anyObject);
              // console.log(anyObject)
            }
           }
         },
    }
}
let buildApp = Vue.createApp(myApp).mount('#app');