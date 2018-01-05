import Route from '@ember/routing/route';


export default Route.extend({
   
    model(){
        var myroute=this
        return $.ajax({
        url:'http://localhost:8082/getloandetails',
        type: 'GET',
        contentType: 'application/json',
        success: function(response){

        var showrecords=response.readAllRequest; 
        console.log("Allrequest",showrecords)
        // var data = showrecords[0].Record.transactionlist[0].transactiondetails;
        //myroute.controllerFor('bankdashboard').set('id',id)
        // myroute.controllerFor('bankdashboard').set('showrecords',data)
        //myroute.controllerFor('bankdashboard').set('key',key)
        //myroute.controllerFor('bankdashboard').set('id',id)
        myroute.controllerFor('bankdashboard').set('showrecords',showrecords)
        console.log('DEBUG: GET Enquiries OK');
        }
    });      
    }
})
