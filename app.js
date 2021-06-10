new Vue({
    el:'#vue-app',
    data:{
        name:'Santosh Rauniyar',//data members
        roll:'20408'
    },
    methods:{
        greet:function(time){
            return "Good "+ time +'  '+ this.name;
        }
    }
});