import Controller from '@ember/controller'; 

export default Controller.extend({
  isShowingModel:false,
  showhome:true,
  shoUserInfo:false,
    
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
    userdetails: function(id) {
      this.set('loanID', id);
      this.transitionToRoute('userdetails');
    }
  }  
});