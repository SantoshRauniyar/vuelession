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