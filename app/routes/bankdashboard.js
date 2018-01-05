import Route from '@ember/routing/route';


export default Route.extend({
   
    model(){
        var myroute=this
        return $.ajax({
        url:'http://localhost:8082/getloandetails',
        type: 'GET',
        contentType: 'application/json',
        success: function(response){
        var id=response.readAllRequest; 
        // var key=id.Record.transactiondetails
        // console.log("Allrequest",key)
        myroute.controllerFor('bankdashboard').set('id',id)
        console.log('DEBUG: GET Enquiries OK');
        }
    });      
    }
})
