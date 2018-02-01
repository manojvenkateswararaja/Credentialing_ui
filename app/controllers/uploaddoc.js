import Controller from '@ember/controller';

export default Controller.extend({
  showRequest:true,
  IdProof:false,
  IdProof2:false,
  actions:{
  okay1:function(){
    this.set('showDialog1',false)
    this.set('IdProof',true)

  },
  okay2:function(){
    this.set('showDialog2',false)
    this.set('IdProof2',true)
  },
  closeDialog1:function(){
    this.set('showDialog1',false)
  },
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

