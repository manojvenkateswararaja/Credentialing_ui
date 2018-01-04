import Controller from '@ember/controller';

export default Controller.extend({
  // Myshowhome:true,
  actions:{
  //   apply:function(){
  //    var message=this.get('message');
  //    this.set('message',message)   
  Okay:function(){
    this.set('showDialog',false)
  },
  openNav:function(){
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
},

closeNav: function() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
},
    }
  
})

