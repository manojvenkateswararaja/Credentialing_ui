import Route from '@ember/routing/route';

export default Route.extend({
    
    model(){
        this.controllerFor('home').set('showLogin',false)
        this.controllerFor('home').set('isShowHome',true)
        var HomeController=this.controllerFor('login1').get('record')
       this.controllerFor('home').set('record',HomeController)
       var details=this.controllerFor('login1').get('details')
       this.controllerFor('home').set('details',details)
       console.log("HomeController>>>>",HomeController)
       console.log("HomeController>>>>details",details)
    }
});
