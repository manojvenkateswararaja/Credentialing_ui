import Route from '@ember/routing/route';

export default Route.extend({
    showDialog:false,
    model(){
       
        this.controllerFor('newrequest').set('usertype',usertype);
        var userid= this.controllerFor('login1').get('userid');
        this.controllerFor('newrequest').set('userid',userid)
        console.log("route userid",userid)
        this.controllerFor('newrequest').set('showLogin',true);
        this.controllerFor('newrequest').set('showUser',true);
        var usertype=this.controllerFor('login1').get('usertype');
        console.log(">>>user",usertype)




       
    }
});
