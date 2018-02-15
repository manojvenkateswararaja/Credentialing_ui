import Route from '@ember/routing/route';

export default Route.extend({
    IsAlreadyDone:false,
    model(){
        
        this.controllerFor('userloanschedule').set('showLogin',true);
        this.controllerFor('userloanschedule').set('showUser',true);
        var usertype=this.controllerFor('login1').get('usertype');
        console.log(">>>user",usertype)
        this.controllerFor('userloanschedule').set('usertype',usertype);
        var userid= this.controllerFor('home').get('userid');
        console.log("route userid",userid)
        this.controllerFor('userloanschedule').set("userid",userid);
    var LoanController=this.controllerFor('home2').get('record')
    this.controllerFor('userloanschedule').set('record',LoanController)
    console.log("userloanschedule>>>>",LoanController)
    // console.log("userloanschedule>>>>details",Loandetails)
    if(LoanController.Records.EMI!=null){
        this.controllerFor('userloanschedule').set('IsAlreadyDone',true)

    }
        }
});
