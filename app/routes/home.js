import Route from '@ember/routing/route';

export default Route.extend({
    // notifications: Ember.inject.service('notification-messages'),
    model(){
        // var notification=this.get('notifications').info('You have one unread message');
        // this.set('notification',notification)
        var status=this.controllerFor('login1').get('details.status')
        this.controllerFor('home').set('status',status)
        console.log("after changing",status)
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
       
       if(LoanSchedule==null)
       {
        var status=this.controllerFor('login1').get('status')
        this.controllerFor('home').set('status',status)
        console.log("Home>>>>status",status)
       }else if(LoanSchedule!=null)
       { 
       this.get('status')
       this.set('status',status)
       console.log("after changing",status)
       }
       

    }
});
