new Vue({
    el:'#vue-app',
    data:{
        name:'Santosh Rauniyar',//data members
        roll:'20408',
        mysite:'http://www.techeracoding.in'//data binding
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
        age:10,
        x:0,
        y:0
    },
    methods:{
        add:function(inc){
            return this.age+=inc;
        },
        sub:function(dec){
            return this.age-=dec;
        },
        updateXY:function(event){
            //console.log(event);
            this.x=event.offsetX;
            this.y=event.offsetY;

        }
    }
});