import Route from '@ember/routing/route';

export default Route.extend({
    model(){
    var LoanController=this.controllerFor('home').get('record')
    this.controllerFor('userloanschedule').set('record',LoanController)
    var Loandetails=this.controllerFor('home').get('details')
    this.controllerFor('userloanschedule').set('details',Loandetails)
    console.log("userloanschedule>>>>",LoanController)
    console.log("userloanschedule>>>>details",Loandetails)
    }
});
