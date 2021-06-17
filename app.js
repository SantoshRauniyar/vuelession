new Vue({
    el:'#vue-app',
    data:{
        name:'Santosh Rauniyar',//data members
        roll:'20408',
        mysite:'http://www.techeracoding.in',//data binding is a way to bind thee dynamic data,
        websiteTag:'<a href="http://www.santoshrauniyarweb.xyz" target="_blank">My profile</a>'
    },
    methods:{
        greet:function(time){
            return "Good "+ time +'  '+ this.name;
        },
        click:function(){
            alert('I am clicked');
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

new Vue({
    el:'#event-handle2',
    data:{
        age:10,
        x:0,
        y:0
    },
    methods:{
        logName:function(){
            console.log('You are enter name');
        },
        logEmail:function(){

            console.log('entered Email');
        }
    }
});
