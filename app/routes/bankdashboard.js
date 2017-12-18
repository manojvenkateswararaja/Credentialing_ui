import Route from '@ember/routing/route';


export default Route.extend({
    model(){
        var myroute=this
        var  AlRequest;
        return $.ajax({
        url:'http://localhost:8082/Bank_Dashboard/GetAllRequest',
        type: 'GET',
        contentType: 'application/json',
        data: JSON.stringify(AlRequest),
        success: function(response) {
        // console.log("console",JSON.stringify(response));
        var id=response.AlRequest; 
        console.log("Alrequest",id)
        // sessionStorage.setItem('id',id);
        myroute.controllerFor('bankdashboard').set('id',id)
        console.log(id)
        console.log('DEBUG: GET Enquiries OK');
        console.log("fsdhgbhdf>>>>>>>>>>",id)
        // columns: [
        //     {
        //       "propertyName": "requestid",
        //       "title": "Request ID"
        //     },
        //     {
        //       "propertyName": "date",
        //       "title": "Date"
        //     },
        //     {
        //       "propertyName": "name",
        //       "title": "Name"
        //     },
        //     {
        //       "propertyName": "purposeOfloan",
        //       "title": "Purpose Of Loan"
        //     },
        //     {
        //         "propertyName": "needAmt",
        //         "title": "Needed Amount"
        //       },
        //       {
        //         "propertyName": "Status",
        //         "title": "status Of Loan"
        //       },
    
        //   ]
        }
    });
   
       
    
    }
})
