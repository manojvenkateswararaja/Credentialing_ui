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
    userdetails: function(id) {
      var loanID=this.get('id')
      this.set('loanID', id);
      console.log(">>>>",loanID)
      this.transitionToRoute('userdetails');
    }
  }  
});