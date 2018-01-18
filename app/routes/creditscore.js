import Route from '@ember/routing/route';
export default Route.extend({
   
    model(){
        var myroute=this
        return $.ajax({
        url:'http://192.168.11.149:8082/getloandetails',
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
         myroute.controllerFor('creditscore').set('showrecords',data)
         myroute.controllerFor('creditscore').set('records',key)
        //myroute.controllerFor('bankdashboard').set('key',key)
        //myroute.controllerFor('bankdashboard').set('id',id)
        // myroute.controllerFor('creditscore').set('showrecords',showrecords)
        console.log('DEBUG: GET Enquiries OK');
        },
      
    });      
    }, 
})

