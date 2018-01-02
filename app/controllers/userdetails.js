import Controller from '@ember/controller';
export default Controller.extend({
    isShowUserDetails:true,
    showCredit:false,
    isShowSCheduleLoan:false,
    isShowReject:false,
    actions:{
        userdetails:function(requestid){
              var mycontroller=this;
              console.log("requestid>>>>>>>>",requestid)
              var reqid= {"requestid":requestid}
              return $.ajax({
              url:'http://192.168.0.20:8082/creditscore',//web service for credit score
              type: 'POST',
              contentType:'application/json',
              data:JSON.stringify(reqid),
              success: function(response) {
              console.log("service")
              mycontroller.set('showCredit',true)
              var creditscore=response.creditscore
              mycontroller.set('creditscore',creditscore)
              console.log("my credit ccore>>>>>>",creditscore)
                }
                })
          },
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
