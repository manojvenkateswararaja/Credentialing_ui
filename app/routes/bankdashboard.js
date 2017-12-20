import Route from '@ember/routing/route';


export default Route.extend({
    model(){
        var myroute=this
        return $.ajax({
        url:'http://192.168.0.20:8082/getloandetails',
        type: 'GET',
        contentType: 'application/json',
        //data: JSON.stringify(AlRequest),
        success: function(response){
        //console.log("console",JSON.stringify(response));
        var id=response; 
        console.log("Allrequest",id)
        myroute.controllerFor('bankdashboard').set('id',id)
        // console.log("fsdhgbhdf>>>>>>>>>>",id)
        // var alldata=id[0]
        // console.log(" show>>>>>>>>>>>>",alldata)
        // for(var i=0;i<=id.length;i++){
        //     var alldata=id[i]
        //     console.log("please show>>>>>>>>>>>>",alldata)
        //        }
        console.log('DEBUG: GET Enquiries OK');
        }
    });
   
       
    
    }
})
