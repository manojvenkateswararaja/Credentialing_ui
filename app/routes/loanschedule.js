import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        var loanID = this.controllerFor('userdetailsdec').get('record')
        this.controllerFor('loanschedule').set('record',loanID);
        // var details = this.controllerFor('userdetailsdec').get('details');
        var userid= this.controllerFor('userdetailsdec').get('record.Key');
        console.log("route userid",userid)
        this.controllerFor('loanschedule').set("userid",userid);
        var details=loanID.Record
        this.controllerFor('loanschedule').set('details',details) 
        console.log("loan schedule details",details)
        console.log("loan schedule records>>",loanID)
        
        // this.controllerFor('loanschedule').set('reqid',reqid) 
        // console.log("this is request requestid",reqid) 
        // // for(var i=0;i<reqid.length;i++){
        // // var  loanReqId=reqid[i].reqid
        // // console.log("loan id>>>>",loanReqId)
        // //}
        
    }
});
