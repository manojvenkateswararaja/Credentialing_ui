import Route from '@ember/routing/route';

export default Route.extend({
    isApprove:false,
    isLegalVerifierDone:false,
    
    model(){
     
        var loanID = this.controllerFor('bankdashboard').get('record');
        var details = this.controllerFor('bankdashboard').get('details');
   
        this.controllerFor('userdetailsdec').set('record',loanID)  
    this.controllerFor('userdetailsdec').set('details',details)  
    console.log("record>>>>",loanID)
    console.log("details>>>>",details)
    // setting legal verification
    // var legal=details.legal
    // this.set('legal',legal)
    // console.log("legal>>>>>",legal)
    // var date=this.controllerFor('userdetailsdec').get('details.date')
    // this.controllerFor('userdetailsdec').set('date',date)
    // var time=this.controllerFor('userdetailsdec').get('details.time')
    // this.controllerFor('userdetailsdec').set('time',time)
   
    // console.log("date>>>>>",date)
    // console.log("time>>>>>",time)

    // if(legal==null){
    //   console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>")
    //   var isApprove=this.controllerFor('userdetailsdec').get('isApprove')
    //   this.controllerFor('userdetailsdec').set('isApprove',false)
    
    // }else if(legal=="approved"){
    //   var isApprove=this.controllerFor('userdetailsdec').get('isApprove')
    //   this.controllerFor('userdetailsdec').set('isApprove',false)
    //  }
    // else if(legal=="rejected"){
    //   var isApprove=this.controllerFor('userdetailsdec').get('isApprove')
    //   this.controllerFor('userdetailsdec').set('isApprove',true)
    
    // }
    //set legal property
  
console.log('DEBUG: GET Enquiries userdetailsdec OK');         
    }, 
});
