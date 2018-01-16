import Route from '@ember/routing/route';
export default Route.extend({
   
    model(){     
        var loanID = this.controllerFor('bankdashboard').get('record');
        this.controllerFor('userdetails').set('record',loanID);
        console.log("userdetails page00",loanID)
   }
})
