import Controller from '@ember/controller';

export default Controller.extend({
    isCommitAuthorize:false,
    actions: {

  showDialog() {
    // Will be used `app/templates/error-message.hbs` 
    this.get("dialog").alert("error-message");
  },
  dismissModal: function() {
    this.set('isCommitAuthorize', true);
},
dismissModal1: function() {
    this.set('isCommitAuthorize', false);
},

     
    userloanschedule:function(record){
        console.log("unside userloanschedule action",record);
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
        }else if(record.Records.statusForCreditRequest==="Loan Quotation"||record.Records.statusForBankLegal==="Loan successfully accepted by user"){
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
