import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        var myroute = this
        var token = sessionStorage.getItem('token');
        console.log("token",token);
        var userid= this.controllerFor('bankdashboard').get('userId');
        console.log("route userid",userid)
        this.controllerFor('bankdashboard2').set("userid",userid);
    
        return $.ajax({
           
            url: 'http://localhost:8082/getHistory',
            type: 'GET',
            contentType: 'application/json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': userid
            },
          
            success: function(response) {
                var showrecords = response.result;
                console.log("manoj", showrecords)
                // var token=showrecords.token
                // console.log("token", token)
                myroute.controllerFor('bankdashboard2').set('showrecords', showrecords)
                var len = showrecords.length
                console.log("len show>>>", len);
                for(let i = 0; i <= len-1; i++){
                    var record=showrecords[i]
                    
                    myroute.controllerFor('bankdashboard2').set('record', record)
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
                    myroute.controllerFor('bankdashboard2').set('isStatus',true)
                    
                    if(statusForCreditRequest==="Legalverifier approved" || statusForCreditRequest==="Requested for Legalverifier" || record.Record.statusForBankLegal==="Loan successfully accepted by user" ||statuspreclose==="User Requested For Preclose" ||bankpreclose==="Loan Closed"|| statusForCreditRequest==="Loan Rejected"){ 
                         myroute.controllerFor('bankdashboard2').set('isStatus',false)
                         myroute.controllerFor('bankdashboard2').set('statusForCreditRequest',statusForCreditRequest)
                         console.log(statusForCreditRequest)
                         myroute.controllerFor('bankdashboard2').set('IsCreditStatus',true)
                         myroute.controllerFor('bankdashboard2').set('IsLegalValidated',true)
                     }else if(statusForCreditRequest==="Creditscore Generated"){ 
                myroute.controllerFor('bankdashboard2').set('isStatus',false)
                //default
                myroute.controllerFor('bankdashboard2').set('IsCreditStatus',true)
                myroute.controllerFor('bankdashboard2').set('statusForCreditRequest',statusForCreditRequest)
                //default status
                }else if(statusForCreditRequest=null){
                    console.log("hiiii >>> this is true")
                    myroute.controllerFor('bankdashboard2').set('IsCreditStatus',false)
                    myroute.controllerFor('bankdashboard2').set('isStatus',true)
                    console.log("DefaultStatus",status)
                    myroute.controllerFor('bankdashboard2').set('status',status) 
                }
            }
            }
        });

    },
    
});