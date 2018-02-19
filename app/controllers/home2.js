import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
    userloanschedule:function(record){
        console.log("hi manoj",record);
        this.set('record',record)
        if(record.Records.statusForUser==="Request sent successfully"){
            swal("You Applied for loan sucessfully!! Wait for further process", "status", "info");
        }else if(record.Records.statusForCreditRequest=="Requested For Creditscore"){
            swal("You have Requested For Creditscore!! ", "status", "info");
        }else if(record.Records.statusForCreditRequest=="Creditscore Generated"){
            swal("Your Creditscore Generated!! ", "status", "info");
        }else if(record.Records.statusForCreditRequest=="Requested for Legalverifier"){
            swal("You have Requested for Legalverifier!! Navigating to LoanQuotation>>", "status", "info");
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
