import Controller from '@ember/controller';

export default Controller.extend({
    isShowUserDetails:true,
    showCredit:false,
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
              var creditscore=response
              console.log("my credit ccore>>>>>>",creditscore)
             
                                   }
                                              
                  })
          }
  },
  
});
