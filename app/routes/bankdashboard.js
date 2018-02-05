import Route from '@ember/routing/route';
export default Route.extend({
    precloselink:false,
    isDefaultStatus:true,
    isCreditscorestatus:false,
    isStatus:false,
    isLoanReject:false,
    isBankpreclose:false,
    model(){
        
      
        var myroute=this
        return $.ajax({
        url:'http://localhost:8082/getloandetails',
        type: 'GET',
        contentType: 'application/json',
        success: function(response){
        var showrecords=response.message; 
        console.log("Allrequest",showrecords)
        myroute.controllerFor('bankdashboard').set('showrecords',showrecords)
        var len=showrecords.length
        console.log("len show>>>",len);
        for(let i=0;i<=len;i++){
        var record=showrecords[i]
        console.log("record",record)
        
        myroute.controllerFor('bankdashboard').set('record',record)
        // myroute.controllerFor('bankdashboard').set('details',details)
        // console.log("details",details)
        console.log('DEBUG: GET Enquiries OK');
        }
    }
    });  
  
    },
    timestamp:function(){
        this.transitionToRoute('timestamp')
    }
  
})
