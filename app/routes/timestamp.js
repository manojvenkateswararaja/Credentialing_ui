import Route from '@ember/routing/route';

export default Route.extend({
    model(){
var mycontrol=this
// var creditscorebank=mycontrol.controllerFor('creditscore')
// var score=creditscorebank.get('creditscore')
// this.controllerFor('bankdashboard').set('score',score)
// console.log("creditscore in bank",score)
//  var GetBankCredit = mycontrol.controllerFor('creditscore')
//  var creditscore= GetBankCredit.get('creditscore');
//  mycontrol.controllerFor('bankdashboard').set('creditscore',creditscore);

var myroute=this
return $.ajax({
url:'http://localhost:8082/getloandetails',
type: 'GET',
contentType: 'application/json',
success: function(response){
var showrecords=response.readAllRequest; 
console.log("Allrequest",showrecords)
//myroute.controllerFor('bankdashboard').set('showrecords',showrecords)
var record=showrecords[0]
myroute.controllerFor('bankdashboard').set('record',record)
console.log("record",record)
var length=record.Record.transactionlist.length
console.log("length",length)
/*  var record=docs[len-1].Records.transactionlist[len-1]
console.log("record123...>>>",record) */
 //console.log("docs....123>>>",docs)

         var date=record.Record.transactionlist[0].transactiondetails.date
         var time=record.Record.transactionlist[0].transactiondetails.time
         myroute.controllerFor('timestamp').set('time',time)
         myroute.controllerFor('timestamp').set('date',date)
         var date1=record.Record.transactionlist[1].transactiondetails.date
         var time1=record.Record.transactionlist[1].transactiondetails.time
         myroute.controllerFor('timestamp').set('time1',time1)
         myroute.controllerFor('timestamp').set('date1',date1)
         var date2=record.Record.transactionlist[2].transactiondetails.date
         var time2=record.Record.transactionlist[2].transactiondetails.time
         myroute.controllerFor('timestamp').set('time2',time2)
         myroute.controllerFor('timestamp').set('date2',date2)
         var date3=record.Record.transactionlist[3].transactiondetails.date
         var time3=record.Record.transactionlist[3].transactiondetails.time
         myroute.controllerFor('timestamp').set('time3',time3)
         myroute.controllerFor('timestamp').set('date3',date3)
         var date4=record.Record.transactionlist[4].transactiondetails.date
         var time4=record.Record.transactionlist[4].transactiondetails.time
         myroute.controllerFor('timestamp').set('time4',time4)
         myroute.controllerFor('timestamp').set('date4',date4)
         var date5=record.Record.transactionlist[5].transactiondetails.date
         var time5=record.Record.transactionlist[5].transactiondetails.time
         myroute.controllerFor('timestamp').set('time5',time5)
         myroute.controllerFor('timestamp').set('date5',date5)
         var date6=record.Record.transactionlist[6].transactiondetails.date
         var time6=record.Record.transactionlist[6].transactiondetails.time
         myroute.controllerFor('timestamp').set('time6',time6)
         myroute.controllerFor('timestamp').set('date6',date6)
         var date7=record.Record.transactionlist[7].transactiondetails.date
         var time7=record.Record.transactionlist[7].transactiondetails.time
         myroute.controllerFor('timestamp').set('time7',time7)
         myroute.controllerFor('timestamp').set('date7',date7)
         
       

    
// console.log("length",length)
// var details=record.Record.transactionlist[length-1].transactiondetails
// myroute.controllerFor('bankdashboard').set('details',details)
// console.log("details",details)
// console.log('DEBUG: GET Enquiries OK');
// var creditscore=details.creditscore
// mycontrol.controllerFor('bankdashboard').set('creditscore',creditscore)
//  console.log(creditscore,"creditscore>>")
//  var EMI=details.EMI
//  myroute.controllerFor('bankdashboard').set('EMI',EMI)
//  console.log("emi in bank>>>" ,EMI)  
//  if(EMI!=null){
//      var statuspreclose=myroute.controllerFor('bankdashboard').get('details.statuspreclose')
//      myroute.controllerFor('bankdashboard').set('statuspreclose',statuspreclose)
//      console.log("after changing statuspreclose",statuspreclose)
//  }  
//  var date=details.date
//  var time=details.time
//  myroute.controllerFor('bankdashboard').set('date',date)
//  console.log(date)
//  myroute.controllerFor('bankdashboard').set('time',time)

},

});  

},


})
