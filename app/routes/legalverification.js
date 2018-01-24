import Route from '@ember/routing/route';

export default Route.extend({
    LegalVerifierParticipant:true,
    model(){
        var myroute=this
        return $.ajax({
        url:'http://localhost:8082/getloandetails',
        type: 'GET',
        contentType: 'application/json',
        success: function(response){
        var showrecords=response.readAllRequest; 
        console.log("Allrequest",showrecords);
        var key=showrecords[0].Key
        var len = showrecords[0].Record.transactionlist.length
        var data = showrecords[0].Record.transactionlist[len-1].transactiondetails;
        //myroute.controllerFor('bankdashboard').set('id',id)
        console.log(data);
        console.log(key);
         myroute.controllerFor('legalverification').set('showrecords',data)
         myroute.controllerFor('legalverification').set('records',key)
         var date=data.date
         var time=data.time
         myroute.controllerFor('legalverification').set('date',date)
         myroute.controllerFor('legalverification').set('time',time)
        //myroute.controllerFor('bankdashboard').set('key',key)
        //myroute.controllerFor('bankdashboard').set('id',id)
        // myroute.controllerFor('creditscore').set('showrecords',showrecords)
        console.log('DEBUG: GET Enquiries OK');
        },
      
    });      
    }, 
});
