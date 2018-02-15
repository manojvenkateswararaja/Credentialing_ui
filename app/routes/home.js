import Route from '@ember/routing/route';
export default Route.extend({
    showLogin:false,
    showUser:false,
    isBankPreclose:false,
    isUserstatus:false,
    DisablePrecoleButton:false,
    model(){
      
        var userid= this.controllerFor('login1').get('userid');
        console.log("route userid",userid)
        this.controllerFor('home').set("userid",userid);
//         var myroute = this
//         var token = sessionStorage.getItem('token');
//         console.log("manoj",token);
//         return $.ajax({
//             url: 'http://localhost:8082/getloandetails',
//             type: 'GET',
//             contentType: 'application/json',
//             headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'x-access-token': token
//   },
//             success: function(response) {
//                 var showrecords = response.message;
        this.controllerFor('home').set('showLogin',true);
        this.controllerFor('home').set('showUser',true);
        var usertype=this.controllerFor('login1').get('usertype');
        console.log(">>>user",usertype)
        this.controllerFor('home').set('usertype',usertype);
        var myroute = this
        var token = sessionStorage.getItem('token');
        console.log("manoj",token);
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
                var showrecords = response.message;
              
//                 console.log("Allrequest", showrecords)
               
//                 var len = showrecords.length
//                 console.log("len show>>>", len);
//                 for(var i=0;i<=len-1;i++){ 
//                   var record=showrecords[i]
//                   var statusForUser=record.Record.statusForUser
//                   console.log("home page statusForUser",statusForUser)
//                   var statusForCreditRequest=record.Record.statusForCreditRequest
//                   console.log("home page statusForCreditRequest",statusForCreditRequest)
//                   var statuspreclose=record.Record.statuspreclose
//                   console.log("home page statusForUser",statuspreclose)
//                 //  -if(showrecords[i].Record.statusForCreditRequest==="Loan Scheduled"){
//                 //  console.log("home page showrecords[i].Record.statusForCreditRequest??",showrecords[i].Record.statusForCreditRequest)
//                 //  myroute.controllerFor('home').set('showrecords', showrecords)
//                 // }
//                   //After accepting request from bank
//                  var userpreclosestatus=record.Record.userpreclosestatus;
//                   console.log("userpreclosestatus",userpreclosestatus)
//                   myroute.controllerFor('home').set('record', record)
//                   console.log("home page statusForUser",statusForUser)
//                   console.log("home page record",record)
//                   myroute.controllerFor('home').set('record', record)
//                 }
//                     if(statusForUser==="Request sent successfully" ||statuspreclose==="Requested For Preclose"||userpreclosestatus==="preclosure accepted"){ //show status
//                         myroute.controllerFor('home').set('ShowRequest',true)
//                         myroute.controllerFor('home').set('isBankPreclose',false) 
//                         // myroute.controllerFor('home').set('DisablePrecoleButton',true)
//                         myroute.controllerFor('home').set('showrecords', showrecords)  
//                     }else if(statusForCreditRequest==="Loan Scheduled"){
//                         myroute.controllerFor('home').set('ShowRequest',true)
//                         myroute.controllerFor('home').set('isBankPreclose',false) 
//                         myroute.controllerFor('home').set('DisablePrecoleButton',true)
//                         myroute.controllerFor('home').set('showrecords', showrecords)
                var len = showrecords.length
                console.log("len show>>>", len);
                for(var i=0;i<=len-1;i++){ 
                  var record=showrecords[i]
                  var statusForUser=record.Record.statusForUser
                  console.log("home page statusForUser",statusForUser)
                  var statusForCreditRequest=record.Record.statusForCreditRequest
                  console.log("home page statusForCreditRequest",statusForCreditRequest)
                  var statuspreclose=record.Record.statuspreclose
                  console.log("home page statusForUser",statuspreclose)
                
                 var userpreclosestatus=record.Record.userpreclosestatus;
                  console.log("userpreclosestatus",userpreclosestatus)
                  myroute.controllerFor('home').set('record', record)
                  console.log("home page statusForUser",statusForUser)
                  console.log("home page record",record)
                  myroute.controllerFor('home').set('record', record)
                }
                    if(statusForUser==="Request sent successfully" ||statuspreclose==="Requested For Preclose"||userpreclosestatus==="preclosure accepted"){ //show status
                        myroute.controllerFor('home').set('ShowRequest',true)
                        myroute.controllerFor('home').set('isBankPreclose',false) 
                        // myroute.controllerFor('home').set('DisablePrecoleButton',true)
                        myroute.controllerFor('home').set('showrecords', showrecords)  
                    }else if(statusForCreditRequest==="Loan Scheduled"){
                        myroute.controllerFor('home').set('ShowRequest',true)
                        myroute.controllerFor('home').set('isBankPreclose',false) 
                        myroute.controllerFor('home').set('DisablePrecoleButton',true)
                        myroute.controllerFor('home').set('showrecords', showrecords)
                          
//                     } else if(record.Record.statusForBankLegal==="Loan successfully accepted by user"){
//                         myroute.controllerFor('home').set('ShowRequest',true)
//                         myroute.controllerFor('home').set('isBankPreclose',false) 
//                         myroute.controllerFor('home').set('DisablePrecoleButton',false)
//                         // myroute.controllerFor('home').set('DisablePrecoleButton',false)
//                         myroute.controllerFor('home').set('showrecords', showrecords)
                          
//                     } 
                    }
                }
           })
            
          

            
        
        
    }
});
