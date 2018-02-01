import Route from '@ember/routing/route';

export default Route.extend({
    model(){
         //if it is user request id generated
         var status="Processing"
         this.controllerFor('login1').set('status',status)
         console.log("status>>>>>>property",status)
          var mycontroller=this
          return $.ajax({
          url:'http://192.168.1.28:8082/getloandetails',
          type: 'GET',
          contentType: 'application/json',
          success: function(response){
          var showrecords=response.readAllRequest; 
          console.log("Allrequest",showrecords)
          mycontroller.controllerFor('login1').set('showrecords',showrecords)
          console.log("showrecords>>>login",showrecords)
          var record=showrecords[0]
          mycontroller.controllerFor('login1').set('record',record)
          console.log("record>>>login",record)
          var length=record.Record.transactionlist.length
          console.log("length",length)
          var details=record.Record.transactionlist[length-1].transactiondetails
          mycontroller.controllerFor('login1').set('details',details)
          console.log("details>>>login",details)
          console.log('DEBUG: GET Enquiries OK for login page');
          var creditscore=details.creditscore
          mycontroller.controllerFor('login1').set('creditscore',creditscore)
          console.log(creditscore,"creditscore>>")
          }
      }); 
    }
});
