import Controller from '@ember/controller';

export default Controller.extend({
    // showDashboard:true,
    actions: {
        userdetails: function(showrecords) {
            this.set('record',showrecords)
            console.log("get credit score",showrecords)
             var score=showrecords.creditscore
             this.set('score',score)
             var userId=showrecords.Key
             this.set('userId',userId)
             console.log("i got creditscore in bank",score)
              if(score == null){
                  this.transitionToRoute('userdetails')
              }
                  else if(score!=null){
                    this.transitionToRoute('userdetails')
                  }
              }
            }
    // submitButton:function(){
    //     var userId=this.get('userid')
    //     this.set("userId",userId)
    //     console.log("userid",userId)
    //     var transactionstring={
    //         "userId":userId
    //     }
    //     console.log("datastring"+JSON.stringify(transactionstring));
    //     var mycontroller=this
       
    //     var token = sessionStorage.getItem('token');
    //     console.log("manoj",token);
    //     return $.ajax({   
    //     url:'http://localhost:8082/getHistory',
    //     type: 'POST',
    //     contentType: 'application/json',
    //     data: JSON.stringify(transactionstring),
    //     success: function(response) {
    //         var message = response.result;
    //        console.log("message>>>>>>>>>>" + message);  
    //        var showrecords=message
    //        mycontroller.set('showrecords',showrecords)
    //        console.log("FINAL",showrecords)
    //        myroute.controllerFor('bankdashboard2').set('showrecords', showrecords)
    //        var len = showrecords.length
    //        console.log("len show>>>", len);
    //        for(let i = 0; i <= len-1; i++){
    //            var record=showrecords[i]
               
    //            myroute.controllerFor('bankdashboard2').set('record', record)
    //            console.log("hi manoj",record)
    //            var statusForCreditRequest = showrecords[i].Record.statusForCreditRequest
    //            console.log("statusForCreditRequest",statusForCreditRequest)
    //            var statuspreclose=record.Record.statuspreclose
    //            console.log("statuspreclose",statuspreclose)
    //            // statusfor preclosing request
    //            var bankpreclose=record.Record.bankpreclose
    //            console.log("bankpreclose?????",bankpreclose)
    //            //creditscore status change
    //            console.log('DEBUG: GET Enquiries OK');
    //            // var statusForUser = record.Record.statusForUser
    //            // console.log("statusForUser>>uper >> console",statusForUser)
    //            myroute.controllerFor('bankdashboard2').set('isStatus',true)
               
    //            if(statusForCreditRequest==="Legalverifier approved" || statusForCreditRequest==="Requested for Legalverifier" || record.Record.statusForBankLegal==="Loan successfully accepted by user" ||statuspreclose==="User Requested For Preclose" ||bankpreclose==="Loan Closed"|| statusForCreditRequest==="Loan Rejected"){ 
    //                 myroute.controllerFor('bankdashboard2').set('isStatus',false)
    //                 myroute.controllerFor('bankdashboard2').set('statusForCreditRequest',statusForCreditRequest)
    //                 console.log(statusForCreditRequest)
    //                 myroute.controllerFor('bankdashboard2').set('IsCreditStatus',true)
    //                 myroute.controllerFor('bankdashboard2').set('IsLegalValidated',true)
    //             }else if(statusForCreditRequest==="Creditscore Generated"){ 
    //        myroute.controllerFor('bankdashboard2').set('isStatus',false)
    //        //default
    //        myroute.controllerFor('bankdashboard2').set('IsCreditStatus',true)
    //        myroute.controllerFor('bankdashboard2').set('statusForCreditRequest',statusForCreditRequest)
    //        //default status
    //        }else if(statusForCreditRequest=null){
    //            console.log("hiiii >>> this is true")
    //            myroute.controllerFor('bankdashboard2').set('IsCreditStatus',false)
    //            myroute.controllerFor('bankdashboard2').set('isStatus',true)
    //            console.log("DefaultStatus",status)
    //            myroute.controllerFor('bankdashboard2').set('status',status) 
    //        }
    //    }
        
          
    //         }
        
    //       })
    //     },
    //     userdetails: function(showrecords) {
    //         this.set('record',showrecords)
    //         console.log("get credit score",showrecords)
    //          var score=showrecords.Records.creditscore
    //          this.set('score',score)
    //          console.log("i got creditscore in bank",score)
    //           if(score == null){
    //               this.transitionToRoute('userdetails')
    //           }else if(score != null){
    //               this.transitionToRoute('userdetailsdec')   
    //           }
            
    //          // this.transitionToRoute('userdetails');
    //        },
    // }
});
