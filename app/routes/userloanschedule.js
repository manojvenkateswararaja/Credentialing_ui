import Route from '@ember/routing/route';

export default Route.extend({
    IsAlreadyDone:false,
    model(){
    var LoanController=this.controllerFor('home').get('record')
    this.controllerFor('userloanschedule').set('record',LoanController)
    console.log("userloanschedule>>>>",LoanController)
    // console.log("userloanschedule>>>>details",Loandetails)
    if(LoanController.Record.EMI!=null){
        this.controllerFor('userloanschedule').set('IsAlreadyDone',true)

    }
        }
});
