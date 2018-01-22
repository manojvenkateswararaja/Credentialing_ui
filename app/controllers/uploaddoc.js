import Controller from '@ember/controller';

export default Controller.extend({
  showRequest:true,
  actions:{
  
  okay:function(){
    this.set('showDialog',false)
  },
  closeDialog:function(){
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
targetButton:function(){
   this.transitionToRoute('home');
},
// signout:function() {
//   this.transitionToRoute('login1');
// },
    }
  
})

