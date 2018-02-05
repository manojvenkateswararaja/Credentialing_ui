import Route from '@ember/routing/route';
export default Route.extend({
   
    model(){
        var loanID = this.controllerFor('bankdashboard').get('record');
        this.controllerFor('userdetails').set('record',loanID);
        console.log("record",loanID)
        var lastdetails= loanID.Record
        console.log(length)
        this.controllerFor('userdetails').set('lastdetails',lastdetails);
        console.log("updates",lastdetails)
        console.log("userdetails page00",loanID)
        // var date=lastdetails.date
        // var time=lastdetails.time
        // this.controllerFor('userdetails').set('date',date);
        // this.controllerFor('userdetails').set('time',time);
        //getting generated cresitscore  
        var GetBankCredit = this.controllerFor('creditscore')
        var creditscore= GetBankCredit.get('creditscore');
        this.controllerFor('userdetails').set('creditscore',creditscore);
        console.log("creditscore",creditscore)
        //score
        
        
   }
})
