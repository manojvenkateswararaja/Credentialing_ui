import Route from '@ember/routing/route';


export default Route.extend({
   
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
        var showrecords=response.readAllRequest; 
        console.log("Allrequest",showrecords)
        //myroute.controllerFor('bankdashboard').set('showrecords',showrecords)
        var record=showrecords[0]
        myroute.controllerFor('bankdashboard').set('record',record)
        console.log("record",record)
        var length=record.Record.transactionlist.length
        console.log("length",length)
        var details=record.Record.transactionlist[length-1].transactiondetails
        myroute.controllerFor('bankdashboard').set('details',details)
        console.log("details",details)
        console.log('DEBUG: GET Enquiries OK');
        var creditscore=details.creditscore
        mycontrol.controllerFor('bankdashboard').set('creditscore',creditscore)
         console.log(creditscore,"creditscore>>")
         var EMI=details.EMI
         myroute.controllerFor('bankdashboard').set('EMI',EMI)
         console.log("emi in bank>>>" ,EMI)  
         if(EMI!=null){
             var statuspreclose=myroute.controllerFor('bankdashboard').get('details.statuspreclose')
             myroute.controllerFor('bankdashboard').set('statuspreclose',statuspreclose)
             console.log("after changing statuspreclose",statuspreclose)
         }  
        },
    });  
  
    },
  
})
