import Route from '@ember/routing/route';
export default Route.extend({
    precloselink:false,
    isDefaultStatus:true,
    isCreditscorestatus:false,
    isStatus:false,
    isLoanReject:false,
    isBankpreclose:false,
    model(){
        var mycontrol=this
        // var creditscorebank=mycontrol.controllerFor('creditscore')
        // var score=creditscorebank.get('creditscore')
        // this.controllerFor('bankdashboard').set('score',score)
        // console.log("creditscore in bank",score)
        //  var GetBankCredit = mycontrol.controllerFor('creditscore')
        //  var creditscore= GetBankCredit.get('creditscore');
        //  mycontrol.controllerFor('bankdashboard').set('creditscore',creditscore);
      
        var myroute=this
        return $.ajax({
        url:'http://localhost:8082/getloandetails',
        type: 'GET',
        contentType: 'application/json',
        success: function(response){
        var showrecords=response.message; 
        var len=showrecords.length
        console.log("len show>>>",len);
        for(let i=0;i<=len-1;i++){
            var statusForCreditRequest=showrecords[i].Record.statusForCreditRequest
    console.log(statusForCreditRequest)
            if(statusForCreditRequest=="Requested for legalverifier"){
                var details=showrecords
                myroute.controllerFor('legalverification2').set('details',details)
                  console.log("details........",details)

                  
                
            }
           
        }
       
     
     
      
//         var creditscore=details.creditscore
//         mycontrol.controllerFor('bankdashboard').set('creditscore',creditscore)
//         console.log(creditscore,"creditscore>>")
//         var EMI=details.EMI
//         myroute.controllerFor('bankdashboard').set('EMI',EMI)
//         var loanReject=details.loanReject
//         myroute.controllerFor('bankdashboard').set('loanReject',loanReject)
//         console.log("loanReject in bank>>>" ,loanReject)  
//         //  loan accepted by user
//         var loanAcceptedByUser=details.loanterms
//         myroute.controllerFor('bankdashboard').set('loanAcceptedByUser',loanAcceptedByUser)
//         console.log("loanReject in bank>>>" ,loanAcceptedByUser)  
// // creditscore status
// var CreditScoreGenerated=details.creditscore
// myroute.controllerFor('bankdashboard').set('CreditScoreGenerated',CreditScoreGenerated)
// //default
// var DefaultStatus=" processing"
// myroute.controllerFor('bankdashboard').set('DefaultStatus',DefaultStatus)

// myroute.controllerFor('bankdashboard').set('isDefaultStatus',true)

// myroute.controllerFor('bankdashboard').set('precloselink',false)
//          if(EMI!=null){
//             myroute.controllerFor('bankdashboard').set('isLoanReject',false)//disable loan reject
//             myroute.controllerFor('bankdashboard').set('isCreditscorestatus',false)//disable creditscore
//              myroute.controllerFor('bankdashboard').set('isDefaultStatus',false)//disable default
//              myroute.controllerFor('bankdashboard').set('legalstatus',false)
//              myroute.controllerFor('bankdashboard').set('legalstatus',null)
//              var statuspreclose=myroute.controllerFor('bankdashboard').get('details.statuspreclose')
//              myroute.controllerFor('bankdashboard').set('statuspreclose',statuspreclose)
//              console.log("after changing statuspreclose",statuspreclose)
//            //    disablinglink 
//            var precloselink= myroute.get('precloselink')
//           myroute.controllerFor('bankdashboard').set('precloselink',true)
//           console.log("precloselink>>>>>>",precloselink)
//              if(details.changestatus=="change"){
//                 myroute.controllerFor('bankdashboard').set('isLoanReject',false)//disable loan reject
//                 myroute.controllerFor('bankdashboard').set('isCreditscorestatus',false)//disable creditscore
//                 myroute.controllerFor('bankdashboard').set('isDefaultStatus',false)//disable default
//                 myroute.controllerFor('bankdashboard').set('precloselink',false)//disable preclose
//                 myroute.controllerFor('bankdashboard').set('isStatus',false)//disable stutus
//                 console.log("precloselink>>>>>>",precloselink)
//                 myroute.controllerFor('bankdashboard').set('legalstatus',false)
//                 myroute.controllerFor('bankdashboard').set('legalstatus',null)
//                 myroute.controllerFor('bankdashboard').set('isBankpreclose',true)
//                 myroute.controllerFor('bankdashboard').set('statuspreclose',null)
//              var bankpreclose=myroute.controllerFor('bankdashboard').get('details.bankpreclose')
//              myroute.controllerFor('bankdashboard').set('bankpreclose',bankpreclose)
//              console.log("after changing statuspreclose",bankpreclose)
//                           }
// }  else if(loanReject!=null){
//     myroute.controllerFor('bankdashboard').set('isCreditscorestatus',false)//disable creditscore
//     myroute.controllerFor('bankdashboard').set('isDefaultStatus',false)//disable default
//     myroute.controllerFor('bankdashboard').set('precloselink',false)
//     console.log("precloselink>>>>>>",precloselink)
//     myroute.controllerFor('bankdashboard').set('legalstatus',false)
//     myroute.controllerFor('bankdashboard').set('legalstatus',null)
//     myroute.controllerFor('bankdashboard').set('isLoanReject',true)
//     myroute.controllerFor('bankdashboard').set('isStatus',false)//disable stutus
//     myroute.controllerFor('bankdashboard').set('statuspreclose',null)
//     myroute.controllerFor('bankdashboard').set('bankpreclose',null)
//     var loanReject=myroute.controllerFor('bankdashboard').get('loanReject')
//     myroute.controllerFor('bankdashboard').set('loanReject',loanReject)
//     console.log("after changing loanReject",loanReject)

// }else if(loanAcceptedByUser!=null){                         //accepted by user creditscorestatus
//     myroute.controllerFor('bankdashboard').set('isCreditscorestatus',false)//disable creditscore
//     myroute.controllerFor('bankdashboard').set('isDefaultStatus',false)//disable default
//     myroute.controllerFor('bankdashboard').set('isStatus',true)// stutus
//     myroute.controllerFor('bankdashboard').set('precloselink',false)
//     myroute.controllerFor('bankdashboard').set('isLoanReject',false)//disable loan reject
//     console.log("precloselink>>>>>>",precloselink)
//     myroute.controllerFor('bankdashboard').set('legalstatus',false)
//     myroute.controllerFor('bankdashboard').set('legalstatus',null)
//     myroute.controllerFor('bankdashboard').set('statuspreclose',null)
//     myroute.controllerFor('bankdashboard').set('bankpreclose',null)
//     myroute.controllerFor('bankdashboard').set('loanReject',null)
//     var status=myroute.controllerFor('bankdashboard').get('details.status')
//     myroute.controllerFor('bankdashboard').set('status',status)
//     console.log("after changing status",status)
// }else if(CreditScoreGenerated!=null){                         //accepted by user creditscorestatus
//     myroute.controllerFor('bankdashboard').set('isLoanReject',false)//disable loan reject
//     myroute.controllerFor('bankdashboard').set('isCreditscorestatus',true)
//     myroute.controllerFor('bankdashboard').set('islegalstatus',true)/// creditscore

//     myroute.controllerFor('bankdashboard').set('precloselink',false)
//     myroute.controllerFor('bankdashboard').set('isDefaultStatus',false)//disable default
//     console.log("precloselink>>>>>>",precloselink)
//     myroute.controllerFor('bankdashboard').set('isStatus',false)//disable stutus
//         myroute.controllerFor('bankdashboard').set('statuspreclose',null)
//         myroute.controllerFor('bankdashboard').set('bankpreclose',null)
//         myroute.controllerFor('bankdashboard').set('loanReject',null)
//         myroute.controllerFor('bankdashboard').set('status',null)
//         var creditscorestatus=myroute.controllerFor('bankdashboard').get('details.creditscorestatus')
//         var legalstatus=myroute.controllerFor('bankdashboard').get('details.legalstatus')
//         myroute.controllerFor('bankdashboard').set('legalstatus',legalstatus)
//         console.log(legalstatus);
//         myroute.controllerFor('bankdashboard').set('creditscorestatus',creditscorestatus)
//         console.log("after changing creditscorestatus",creditscorestatus)
// }else if(EMI==null && loanReject==null && loanAcceptedByUser==null && CreditScoreGenerated==null){
//     myroute.controllerFor('bankdashboard').set('isDefaultStatus',true)//disable default
//     myroute.controllerFor('bankdashboard').set('precloselink',false) //disable preclosure status
//     myroute.controllerFor('bankdashboard').set('isStatus',false)//disable stutus
//     myroute.controllerFor('bankdashboard').set('isLoanReject',false)//disable loan reject
//     myroute.controllerFor('bankdashboard').set('legalstatus',false)
//     console.log("precloselink>>>>>>",precloselink)
//         myroute.controllerFor('bankdashboard').set('statuspreclose',null)
//         myroute.controllerFor('bankdashboard').set('bankpreclose',null)
//         myroute.controllerFor('bankdashboard').set('loanReject',null)
//         myroute.controllerFor('bankdashboard').set('status',null)
//         myroute.controllerFor('bankdashboard').set('creditscorestatus',null)
//         myroute.controllerFor('bankdashboard').set('legalstatus',null)
//         var DefaultStatus=myroute.controllerFor('bankdashboard').get('DefaultStatus')
//         myroute.controllerFor('bankdashboard').set('DefaultStatus',DefaultStatus)
//         console.log("after changing DefaultStatus",DefaultStatus)

//     }
//          var date=details.date
//          var time=details.time
//          myroute.controllerFor('bankdashboard').set('date',date)
//          console.log(date)
//          myroute.controllerFor('bankdashboard').set('time',time)
         
        
        }

    });  
  
    },
    timestamp:function(){
        this.transitionToRoute('timestamp')
    }
  
})

