import Route from '@ember/routing/route';

export default Route.extend({
    isApprove:true,
    isLegalVerifierDone:false,
    model(){
        //var UserdetailsDecision=this.controllerFor('userdetails')
        var loanID = this.controllerFor('bankdashboard').get('record');
        var details = this.controllerFor('bankdashboard').get('details');
       // var record=this.get('record');
        this.controllerFor('userdetailsdec').set('record',loanID)  
        this.controllerFor('userdetailsdec').set('details',details)  
        console.log("record>>>>",loanID)
        console.log("details>>>>",details)
    // setting legal verification
    var legal=this.controllerFor('userdetailsdec').get('details.legal')
    this.controllerFor('userdetailsdec').set('legal',legal)
    var date=this.controllerFor('userdetailsdec').get('details.date')
    this.controllerFor('userdetailsdec').set('date',date)
    var time=this.controllerFor('userdetailsdec').get('details.time')
    this.controllerFor('userdetailsdec').set('time',time)
    console.log("legal>>>>>",legal)
    console.log("date>>>>>",date)
    console.log("time>>>>>",time)

    if(legal==null){
      this.set('isApprove',true)
    }else if(legal!=null){
      this.set('isApprove',false)
    }
    else if(legal=="rejected"){
      this.set('isApprove',false)
    }//set legal property
    //disable the lrgal verification
    var LegalVerification=this.controllerFor('userdetailsdec').get('details.legal')
    this.controllerFor('userdetailsdec').set('LegalVerification',LegalVerification)
    console.log("LegalVerification>>>>>",LegalVerification)
    if(LegalVerification==null){
      this.set('isLegalVerifierDone',false)
    }else if(LegalVerification!=null){
      this.set('isLegalVerifierDone',true)
    }

        //   var userdata=UserdetailsDecision.get('record');
        //   UserdetailsDecision.set('userdetailsdec').set('record',userdata)  
        //   console.log("record>>>>>>>>>>>>>>>>>userdecpage>>",record)
        //   var lastdetails=UserdetailsDecision.get('lastdetails');
        //   UserdetailsDecision.set('userdetailsdec').set('lastdetails',lastdetails)  
        //     console.log("record>>>>lastdetails>>userdecpage",lastdetails)

        // var myroute=this
        // return $.ajax({
        // url:'http://localhost:8082/getloandetails',
        // type: 'GET',
        // contentType: 'application/json',
        // success: function(response){
        // var showrecords=response.readAllRequest; 
        // console.log("showrecords",showrecords);
        // var key=showrecords[0].Key
        // var len = showrecords[0].Record.transactionlist.length
        // var data = showrecords[0].Record.transactionlist[len-1].transactiondetails;
        //myroute.controllerFor('bankdashboard').set('id',id)
        // console.log(data);
        // console.log(key);
        //  myroute.controllerFor('userdetailsdec').set('showrecords',data)
        //  myroute.controllerFor('userdetailsdec').set('records',key)
        // myroute.controllerFor('bankdashboard').set('key',key)
        // myroute.controllerFor('bankdashboard').set('id',id)
        // myroute.controllerFor('creditscore').set('showrecords',showrecords)
        console.log('DEBUG: GET Enquiries userdetailsdec OK');
        // },
      
    // });      
    }, 
});
