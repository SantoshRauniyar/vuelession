new Vue({
    el:'#vue-app',
    data:{
        name:'Santosh Rauniyar',
        roll:'20408'
    },
    methods:{
        greet:function(time){
            return "Good "+time;
        }
    }
});