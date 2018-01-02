import Route from '@ember/routing/route';

export default Route.extend({
    
    model(){
        this.controllerFor('home').set('showLogin',false)
        this.controllerFor('home').set('isShowHome',true)
       
    }
});
