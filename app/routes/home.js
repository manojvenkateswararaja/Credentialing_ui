import Route from '@ember/routing/route';

export default Route.extend({
    
    model(){
        
        var status=this.controllerFor('login1').get('status')
        this.controllerFor('home').set('status',status)
        console.log("Home>>>>status",status)
        var ShowRequest=this.controllerFor('login1').get('ShowRequest')
        this.controllerFor('home').set('ShowRequest',ShowRequest)
        this.controllerFor('home').set('showLogin',false)
        this.controllerFor('home').set('isShowHome',true)
        var HomeController=this.controllerFor('login1').get('record')
       this.controllerFor('home').set('record',HomeController)
       var details=this.controllerFor('login1').get('details')
       this.controllerFor('home').set('details',details)
       console.log("HomeController>>>>",HomeController)
       console.log("HomeController>>>>details",details)
       var LoanSchedule=details.loanterms
       this.set('LoanSchedule',LoanSchedule)
       console.log("LoanSchedule>>>>",LoanSchedule)
       var ChangeStatus="Loan Scheduled"
       this.set('ChangeStatus',ChangeStatus)
       if(LoanSchedule==null)
       {
       
       }else if(LoanSchedule!=null)
       {  this.get('ChangeStatus')
           this.set('ChangeStatus',ChangeStatus)
           console.log(ChangeStatus)
       }
       

    }
});
