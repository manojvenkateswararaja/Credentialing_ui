import Route from '@ember/routing/route';
export default Route.extend({
    isStatus:true,
    precloselink: false,
    isDefaultStatus: false,
    IsCreditStatus:false,
    isStatus: false,
    isLoanReject: false,
    isBankpreclose: false,
    model() {

        var myroute = this
        return $.ajax({
            url: 'http://192.168.1.28:8082/getloandetails',
            type: 'GET',
            contentType: 'application/json',
            success: function(response) {
                var showrecords = response.message;
                console.log("Allrequest", showrecords)
                myroute.controllerFor('bankdashboard').set('showrecords', showrecords)
                var len = showrecords.length
                console.log("len show>>>", len);
                
                
                for (let i = 0; i <= len-1; i++) {
              
                    var statusForCreditRequest = showrecords[i].Record.statusForCreditRequest
                    console.log("statusForCreditRequest",statusForCreditRequest)
                      //creditscore status change
                    console.log('DEBUG: GET Enquiries OK');
                    var record=showrecords[i]
                    myroute.controllerFor('bankdashboard').set('record', record)
                    
                if(statusForCreditRequest==="Creditscore Generated"){ 
                //default
                myroute.controllerFor('bankdashboard').set('IsCreditStatus',true)
                myroute.controllerFor('bankdashboard').set('statusForCreditRequest',statusForCreditRequest)
                myroute.controllerFor('bankdashboard').set('isStatus',false)
                //default status
                }else if(statusForCreditRequest=null){
                    myroute.controllerFor('bankdashboard').set('IsCreditStatus',false)
                    myroute.controllerFor('bankdashboard').set('isStatus',true)
                    var status=myroute.controllerFor('login1').get('status')
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