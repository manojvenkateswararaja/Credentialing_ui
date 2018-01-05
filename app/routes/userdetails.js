import Route from '@ember/routing/route';
export default Route.extend({
    model(){     
         var loanID = this.controllerFor('bankdashboard').get('loanID');
         this.controllerFor('userdetails').set('loanID',loanID);
         console.log("userdetails page00",loanID)
    }
    
});
