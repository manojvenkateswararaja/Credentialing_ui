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
        for(let i=0;i<=len;i++){
        //     var showrecords=showrecords
        //    console.log(">>>>>>>",showrecords)
            var statusForCreditRequest=showrecords[i].Record.statusForCreditRequest
            console.log("statusForCreditRequest>>>>>>>",statusForCreditRequest)
        if(statusForCreditRequest==="Requested for Legalverifier"){
              var details=showrecords[i]
              myroute.controllerFor('legalverification2').set('IsStatusForCreditRequest',true) 
              myroute.controllerFor('legalverification2').set('details',details)
              console.log("details.....loop1...",details)
              myroute.controllerFor('legalverification2').set('statusForCreditRequest',statusForCreditRequest) 
            
        }else if(statusForCreditRequest==="Legalverifier Generated"){
            console.log("working fine")
            var details=showrecords[i]
            myroute.controllerFor('legalverification2').set('details',details)
            console.log("details llopp2........",details)
            myroute.controllerFor('legalverification2').set('IsStatusForCreditRequest',true)   
            myroute.controllerFor('legalverification2').set('statusForCreditRequest',statusForCreditRequest)
           
            
        }
      
    }
           
        }

   });  
 
   },
    timestamp:function(){
        this.transitionToRoute('timestamp')
    }
  
})