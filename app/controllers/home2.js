import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        steps:function(){
            swal("step1) After Agreeing Loan schedule>>step2)check response>>step3)you can see button called as preclose >>step4)you can apply by click on it.", "steps", "info");

        },
    userloanschedule:function(record){
        console.log("hi manoj",record);
        this.set('record',record)
        if(record.Records.statusForUser==="Request sent successfully"){
            swal("You Applied for loan sucessfully!! Wait for further process", "status", "info");
        }else if(record.Records.statusForCreditRequest=="Requested For Creditscore"){
            swal("Your RequestID sent to Creditscore Validator!! ", "status", "info");
        }else if(record.Records.statusForCreditRequest=="Creditscore Generated"){
            swal("Your Creditscore Generated!! ", "status", "info");
        }else if(record.Records.statusForCreditRequest=="Requested for Legalverifier"){
            swal("Your RequestID sent to  Legalverifier!!", "status", "info");
        }else if(record.Records.statusForCreditRequest=="Legalverifier approved"){
            swal("Your Legalverifier approved!!", "status", "info");
        }else if(record.Records.statusForCreditRequest==="Loan Scheduled"||record.Records.statusForBankLegal==="Loan successfully accepted by user"){
        swal("Your Loan Successfully scheduled!! Navigating to LoanQuotation>>", "status", "info");
        this.transitionToRoute('userloanschedule')
        }
    },
    logout:function(){
        console.log("in logout");
        window.location.reload(true);
    },

     },
});
