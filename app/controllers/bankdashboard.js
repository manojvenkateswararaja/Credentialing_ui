import Controller from '@ember/controller'; 
export default Controller.extend({
  isShowingModel:false,
  showhome:true,
  shoUserInfo:false,
  showDashboard:true,
    
  actions: {
   
    userdetails: function(showrecords) {
      this.set('record', showrecords);

      var score=this.get('creditscore')
      this.set('score',score)
      console.log("i got creditscore in bank",score)
       if(score == null){
           this.transitionToRoute('userdetails')
       }else if(score != null){
           this.transitionToRoute('userdetailsdec')   
       }
     
      // this.transitionToRoute('userdetails');
    },
    signout:function() {
      this.transitionToRoute('login1');
  },
  openNav:function(){
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
},
closeNav: function() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
},
timestamp:function(){
  this.transitionToRoute('timestamp')
}
  
  }  
});


