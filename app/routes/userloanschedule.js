import Route from '@ember/routing/route';

export default Route.extend({
    IsAlreadyDone:false,
    model(){
        var userid= this.controllerFor('home').get('userid');
        console.log("route userid",userid)
        this.controllerFor('userloanschedule').set("userid",userid);
    var LoanController=this.controllerFor('home').get('record')
    this.controllerFor('userloanschedule').set('record',LoanController)
    console.log("userloanschedule>>>>",LoanController)
    // console.log("userloanschedule>>>>details",Loandetails)
    if(LoanController.Records.EMI!=null){
        this.controllerFor('userloanschedule').set('IsAlreadyDone',true)

    }
        }
});
