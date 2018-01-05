import Route from '@ember/routing/route';

export default Route.extend({
    
    model(){
        var myroute=this
        return $.ajax({
        url:'http://192.168.11.151:8082/getloandetails',
        type: 'GET',
        contentType: 'application/json',
        success: function(response){

        var showrecords=response.readAllRequest; 
        console.log("Allrequest",showrecords[0].Record.transactionlist[0].transactiondetails)
        var key = showrecords[0].Key;
        var data = showrecords[0].Record.transactionlist[0].transactiondetails
        //myroute.controllerFor('bankdashboard').set('id',id)
        myroute.controllerFor('userdetails').set('showrecords',data)
        myroute.controllerFor('userdetails').set('key',key)
        
        console.log('DEBUG: GET Enquiries OK');
        }
    });      
    }
    
});
