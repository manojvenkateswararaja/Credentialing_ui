import Route from '@ember/routing/route';

export default Route.extend({
    showDialog:false,
    model(){
        this.controllerFor('newrequest').set('showLogin',true);
        this.controllerFor('newrequest').set('showUser',true);
    }
});
