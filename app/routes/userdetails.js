import Route from '@ember/routing/route';
export default Route.extend({
   
    model(){
        this.controllerFor('userdetails').set('showLogin',true);
        this.controllerFor('userdetails').set('showUser',true);
        var usertype=this.controllerFor('login1').get('usertype');
        console.log(">>>user",usertype)
        this.controllerFor('userdetails').set('usertype',usertype);
        var userid= this.controllerFor('bankdashboard2').get('userid');
        console.log("route userid",userid)
        this.controllerFor('userdetails').set("userid",userid);
        var loanID = this.controllerFor('bankdashboard2').get('record');
        this.controllerFor('userdetails').set('record',loanID);
        console.log("record",loanID)
        var lastdetails= loanID.Records
         console.log("hi.....",lastdetails)
        this.controllerFor('userdetails').set('lastdetails',lastdetails);
         console.log("updates",lastdetails)
         if(lastdetails.creditscore == null){
            this.controllerFor('userdetails').set('isDetailsDisableButton',false)
        }else if(lastdetails.creditscore!=null){
            this.controllerFor('userdetails').set('isDetailsDisableButton',true)
            }
        // console.log("userdetails page00",loanID)
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
