import Controller from '@ember/controller';

export default Controller.extend({
    showDashboard:true,
    isShowSCheduleLoan:false,
    isShowReject:false,
    actions:{
        Approve:function(){
               console.log("close");
                    this.toggleProperty('isShowSCheduleLoan');
                    var message=this.get('message');
                    this.set('message',message) 
                   return $.ajax({
                      url:'http://192.168.0.20:8082/creditscore',//web service for credit score
                      type: 'POST',
                      contentType:'application/json',
                      data:JSON.stringify(reqid),
                      success: function(response) {
                      console.log("service") 
                    var mymodal= this.get('isShowSCheduleLoan');
                    console.log(mymodal);
                    //   this.transitionToRoute('loanschedule')
                    },
                });
            },
        Schedule:function(){
            var mymodal= this.get('isShowSCheduleLoan');
            console.log(mymodal)
            if(mymodal){
            this.transitionToRoute('loanschedule')
                }
            },
                  Rejected:function(){
                    var mymodal= this.get('isShowReject');
                    this.set('isShowReject',true)
                    console.log(mymodal)
                    if(mymodal){
                    this.set('isShowReject',false)
                    }
                        }
                         
                    }      
    
});
