import Route from '@ember/routing/route';
export default Route.extend({
   
    model(){
        var loanID = this.controllerFor('bankdashboard').get('record');
        this.controllerFor('userdetails').set('record',loanID);
        console.log("record",loanID)
        var length= loanID.Record.transactionlist.length
        console.log(length)
        var lastdetails=loanID.Record.transactionlist[length-1].transactiondetails
        this.controllerFor('userdetails').set('lastdetails',lastdetails);
        console.log("updates",lastdetails)
        console.log("userdetails page00",loanID)
        //getting generated cresitscore  
        var GetBankCredit = this.controllerFor('creditscore')
        var creditscore= GetBankCredit.get('creditscore');
        this.controllerFor('userdetails').set('creditscore',creditscore);
        console.log("creditscore",creditscore)
        //score
        
        
   }
})
