import Route from '@ember/routing/route';

export default Route.extend({
    showDialog:false,
    model(){
        this.controllerFor('newrequest').set('showLogin',true);
        this.controllerFor('newrequest').set('showUser',true);
        var userid= this.controllerFor('home').get('userid');
        console.log("route userid",userid)
        this.controllerFor('newrequest').set("userid",userid);
    }
});
