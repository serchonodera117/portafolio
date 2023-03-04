let myApp = {
    data(){
        return{ 
            text:'hola'
        }
    }, 
    methods:{

    }
}
let buildApp = Vue.createApp(myApp).mount('#app');