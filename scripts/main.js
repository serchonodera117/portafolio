let myApp = {
    data(){
        return{ 
            cardInfo:[
                {
                    name:"Gisselle's Adventure",
                    p_img:"images/projets/gisselles-adventure/01.PNG",
                    technology:"/images/projets/Icon-tech/godot.png",
                },
                {
                    name:"myFavnime",
                    p_img:"images/projets/javascript-my-favnime/01.PNG",
                    technology:"images/projets/Icon-tech/js.png",
                },
                {
                    name:"Sales app",
                    p_img:"images/projets/Kotlin-sales-app/0q.PNG",
                    technology:"images/projets/Icon-tech/kotlin.png",
                },
                {
                    name:"GPS application",
                    p_img:"images/projets/Kotlin-gps-app/01.png",
                    technology:"images/projets/Icon-tech/kotlin.png",
                },
                {
                    name: "Sales page",
                    p_img:"images/projets/prototype-html-servicios/01.PNG",
                    technology:"images/projets/Icon-tech/js.png",
                },
                {
                    name: "Local Crud nosql",
                    p_img:"images/projets/Raxor/00.PNG",
                    technology:"images/projets/Icon-tech/Blazor.png",
                },
                {
                    name: "Display numbers",
                    p_img:"images/projets/chalenge_cshar/00.PNG",
                    technology:"images/projets/Icon-tech/sechar.png",
                },
                {
                    name: "myFavnive Mobile",
                    p_img:"images/projets/ReactNative/00.PNG",
                    technology:"images/projets/Icon-tech/reactnative.png",
                }
            ]
        }
    }, 
    methods:{
    }
}
let buildApp = Vue.createApp(myApp).mount('#app');