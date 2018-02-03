import Route from '@ember/routing/route';
export default Route.extend({
   
    model(){
        var myroute=this
        //changes Requested For Creditscore
        return $.ajax({
        url:'http://192.168.1.28:8082/getloandetails',
        type: 'GET',
        contentType: 'application/json',
        success: function(response){
        var record=response.readAllRequest; 
        console.log("record",record);
        var len=record.length
        console.log("len show>>>",len);
       for(let i=0;i<=len-1;i++){
      
    var length=record[i].Record.transactionlist.length
    console.log(">>>>>length of transactlist",length)  
    var Status=record[i].Record.transactionlist[length-1].transactiondetails      
    console.log("record>>>please come>>>",Status)
    
    if(Status.statusForCreditRequest === "Requested For Creditscore"){
       var record=record[i]
       console.log("completeRecord>?>?>?>",record)
       var transactiondetails=record.Record.transactionlist[length-1]
       myroute.controllerFor('creditscore').set('transactiondetails',transactiondetails)
       console.log("transactiondetails>?>?>?>",transactiondetails)
       myroute.controllerFor('creditscore').set('record',record)
       console.log("record>?>?>?>",record)
    }
}
        }
    });     
    }
})
    

