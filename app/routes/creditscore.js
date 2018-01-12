import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        var myroute=this
        var requestid = this.controllerFor('bankdashboard').get('requestid')
        return $.ajax({
        url:'http://192.168.11.149:8082/getparticulardetails',
        type: 'GET',
        headers: {
            'authorization' : requestid  ,
          
            },
        contentType: 'application/json',
        success: function(response){
        var showrecords=response.readAllRequest; 
        console.log("Allrequest",showrecords)
        // var data = showrecords[0].Record.transactionlist[0].transactiondetails;
        //myroute.controllerFor('bankdashboard').set('id',id)
        // myroute.controllerFor('bankdashboard').set('showrecords',data)userhome
        //myroute.controllerFor('bankdashboard').set('key',key)
        //myroute.controllerFor('bankdashboard').set('id',id)
        myroute.controllerFor('bankdashboard').set('showrecords',showrecords)
        console.log('DEBUG: GET Enquiries OK');
        },
      
    });      
    }, 
});
