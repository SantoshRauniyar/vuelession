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

new Vue({
    el:'#event-handle',
    data:{
        age:10
    },
    methods:{
        add:function(){
            return this.age++;
        },
        sub:function(){
            return this.age--;
        }
    }
});