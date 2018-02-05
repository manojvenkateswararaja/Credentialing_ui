import Route from '@ember/routing/route';
export default Route.extend({
    IsStatusForCreditRequest:false,
    IsStatusForGenerated:false,
    model(){
        
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
            // var showrecords=showrecords[i]
            // console.log("statusForGenerated>>>>>>>",showrecords)
            var statusForCreditRequest=showrecords.Record.statusForCreditRequest
            console.log("statusForCreditRequest>>>>>>>",statusForCreditRequest)
          
        
       
       if(statusForCreditRequest==="Requested For Creditscore"){
              var details=showrecords[i]
              myroute.controllerFor('creditscore2').set('details',details)
              console.log("details........",details)
              myroute.controllerFor('creditscore2').set('IsStatusForCreditRequest',true)
              myroute.controllerFor('creditscore2').set('statusForCreditRequest',statusForCreditRequest)
            
           
       }else if(statusForCreditRequest==="Creditscore Generated"){
            console.log("working fine")
            var details=showrecords[i]
            myroute.controllerFor('creditscore2').set('details',details)
            console.log("details........",details)
            myroute.controllerFor('creditscore2').set('IsStatusForCreditRequest',true)  
            myroute.controllerFor('creditscore2').set('statusForCreditRequest',statusForCreditRequest)
          
            
       }
      
   }
          
        }

   });  
 
   },
    timestamp:function(){
        this.transitionToRoute('timestamp')
    }
  
})