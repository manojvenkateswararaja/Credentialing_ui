import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        var loanID = this.controllerFor('bankdashboard').get('record');
        this.controllerFor('timestamp').set('record',loanID);
        console.log("record",loanID)
        var length= loanID.Record.transactionlist.length
        console.log(length)
        var lastdetails=loanID.Record.transactionlist[length-1].transactiondetails
        this.controllerFor('timestamp').set('lastdetails',lastdetails);
        console.log("updates",lastdetails)
        console.log("userdetails page00",loanID)
        var date=lastdetails.date
        var time=lastdetails.time
        this.controllerFor('timestamp').set('date',date);
        this.controllerFor('timestamp').set('time',time);
    }
});
