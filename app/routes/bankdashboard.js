import Route from '@ember/routing/route';


export default Route.extend({
    model(){
        var myroute=this
        return $.ajax({
        url:'http://192.168.0.20:8082/getloandetails',
        type: 'GET',
        contentType: 'application/json',
        success: function(response){
        var id=response.message; 
        console.log("Allrequest",id)
        myroute.controllerFor('bankdashboard').set('id',id)
        console.log('DEBUG: GET Enquiries OK');
        }
    });
   
       
    
    }
})
