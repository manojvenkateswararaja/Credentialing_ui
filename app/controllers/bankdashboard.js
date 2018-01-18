import Controller from '@ember/controller'; 
export default Controller.extend({
  isShowingModel:false,
  showhome:true,
  shoUserInfo:false,
  showDashboard:true,
    
  // accept:function(item){
  //   var mycontroller=this;
  //   console.log("khetesh")
  //   console.log("requestid==========>")
  //   return $.ajax({
  //   url:'http://localhost:8082/Existing-user/NewRequest/Home',
  //   type: 'GET',
  //   contentType:'application/json',
  //   headers:{ 'requestdeatails':item.requestdeatails},
  //   success: function(response) {
  //   }
  // })
  // }
  actions: {
    userdetails: function(showrecords) {
      
      this.set('record', showrecords);
      this.transitionToRoute('userdetails');
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
  
  }  
});


