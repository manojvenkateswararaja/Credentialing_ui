import Route from '@ember/routing/route';

export default Route.extend({
    
    model(){
         //if it is user request id generated
         var status="Processing"
         this.controllerFor('login1').set('status',status)
         console.log("status>>>>>>property",status)
        //   var loanID = this.controllerFor('login1').get('token');
        //   this.controllerFor('login1').set('token',loanID);
        //   console.log("loanID",loanID)
         
     
     
    }
});
