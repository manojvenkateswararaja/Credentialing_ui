import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        // var UserdetailsDecision=this.controllerFor('userdetails').get('record');
        // var record=UserdetailsDecision.set('userdetailsdec').set('record',record)  
        //    console.log("record>>>>",record)
   




        var myroute=this
        return $.ajax({
        url:'http://localhost:8082/getloandetails',
        type: 'GET',
        contentType: 'application/json',
        success: function(response){
        var showrecords=response.readAllRequest; 
        console.log("showrecords",showrecords);
        var key=showrecords[0].Key
        var len = showrecords[0].Record.transactionlist.length
        var data = showrecords[0].Record.transactionlist[len-1].transactiondetails;
        //myroute.controllerFor('bankdashboard').set('id',id)
        console.log(data);
        console.log(key);
         myroute.controllerFor('userdetailsdec').set('showrecords',data)
         myroute.controllerFor('userdetailsdec').set('records',key)
        myroute.controllerFor('bankdashboard').set('key',key)
        myroute.controllerFor('bankdashboard').set('id',id)
        myroute.controllerFor('creditscore').set('showrecords',showrecords)
        console.log('DEBUG: GET Enquiries OK');
        },
      
    });      
    }, 
});
