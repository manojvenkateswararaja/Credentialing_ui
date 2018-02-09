import Route from '@ember/routing/route';
export default Route.extend({

    IsLegalValidated:false,
    isDefaultStatus: false,
    IsCreditStatus:false,
    isStatus: true,
    isLoanReject: false,
    isBankpreclose: false,
    model() {
        var myroute = this
        return $.ajax({
            url: 'http://localhost:8082/getloandetails',
            type: 'GET',
            contentType: 'application/json',
            success: function(response) {
                var showrecords = response.message;
                console.log("Allrequest", showrecords)
                myroute.controllerFor('bankdashboard').set('showrecords', showrecords)
                var len = showrecords.length
                console.log("len show>>>", len);
                for(let i = 0; i <= len-1; i++){
                    var record=showrecords[i]
                    
                    myroute.controllerFor('bankdashboard').set('record', record)
                    console.log("hi manoj",record)
                    var statusForCreditRequest = showrecords[i].Record.statusForCreditRequest
                    console.log("statusForCreditRequest",statusForCreditRequest)
                    var statuspreclose=record.Record.statuspreclose
                    console.log("statuspreclose",statuspreclose)
                    // statusfor preclosing request
                    var bankpreclose=record.Record.bankpreclose
                    console.log("bankpreclose?????",bankpreclose)
                    //creditscore status change
                    console.log('DEBUG: GET Enquiries OK');
                    // var statusForUser = record.Record.statusForUser
                    // console.log("statusForUser>>uper >> console",statusForUser)
                    myroute.controllerFor('bankdashboard').set('isStatus',true)
                    
                    if(statusForCreditRequest==="Legalverifier approved" || statusForCreditRequest==="Requested for Legalverifier" || record.Record.statusForBankLegal==="Loan successfully accepted by user" ||statuspreclose==="User Requested For Preclose" ||bankpreclose==="Loan Closed"){ 
                         myroute.controllerFor('bankdashboard').set('isStatus',false)
                         myroute.controllerFor('bankdashboard').set('statusForCreditRequest',statusForCreditRequest)
                         console.log(statusForCreditRequest)
                         myroute.controllerFor('bankdashboard').set('IsCreditStatus',true)
                         myroute.controllerFor('bankdashboard').set('IsLegalValidated',true)
                     }else if(statusForCreditRequest==="Creditscore Generated"){ 
                myroute.controllerFor('bankdashboard').set('isStatus',false)
                //default
                myroute.controllerFor('bankdashboard').set('IsCreditStatus',true)
                myroute.controllerFor('bankdashboard').set('statusForCreditRequest',statusForCreditRequest)
                //default status
                }else if(statusForCreditRequest=null){
                    console.log("hiiii >>> this is true")
                    myroute.controllerFor('bankdashboard').set('IsCreditStatus',false)
                    myroute.controllerFor('bankdashboard').set('isStatus',true)
                    console.log("DefaultStatus",status)
                    myroute.controllerFor('bankdashboard').set('status',status) 
                } 
            }
            }
        });

    },
    timestamp: function() {
        this.transitionToRoute('timestamp')
    }
})