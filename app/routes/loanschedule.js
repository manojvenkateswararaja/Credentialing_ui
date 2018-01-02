import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        var reqid=this.controllerFor('bankdashboard').get('id')
        console.log(reqid)
        this.controllerFor('loanschedule').set('reqid',reqid) 
        console.log("this is request requestid",reqid) 
        for(var i=0;i<reqid.length;i++){
        var  loanReqId=reqid[i].reqid
        console.log("loan id>>>>",loanReqId)
        }
        
    }
});
