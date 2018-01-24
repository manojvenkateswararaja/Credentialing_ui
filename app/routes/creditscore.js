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
        console.log("showrecords",showrecords);
        var record=showrecords[0]
        console.log("record>>>",record)
        myroute.controllerFor('creditscore').set('record',record)
        console.log("record",record)
        var length=record.Record.transactionlist.length
        var details=record.Record.transactionlist[length-1].transactiondetails
        myroute.controllerFor('creditscore').set('details',details)
        console.log("details",details)
        // var key=showrecords[0].Key
        var date=details.date
        var time=details.time
        myroute.controllerFor('creditscore').set('date',date)
        myroute.controllerFor('creditscore').set('time',time)
        // var len =showrecords[0].Record.transactionlist.length
        // var data = showrecords[0].Record.transactionlist[len-1].transactiondetails;
        // console.log(data);
        // console.log(key);
        // console.log(len);
        // myroute.controllerFor('creditscore').set('showrecords',data)
        // myroute.controllerFor('creditscore').set('records',key)
        console.log('DEBUG: GET Enquiries OK');
        },
      
    });      
    }, 
})

