import Controller from '@ember/controller';
var id;  

export default Controller.extend({
  isShowingModel:false,
  showhome:true,
    actions:{
    requestid:function(item){
            var mycontroller=this;
            console.log("khetesh")
            console.log("requestid==========>",item.requestid)
            return $.ajax({
            url:'http://localhost:8082/BankDashboard/GetCreditScore',//web service for credit score
            type: 'GET',
            contentType:'application/json',
            headers:{ 'requestid':item.requestid},
            success: function(response) {
            console.log("service")
            // mycontroller.set('isShowingModel',true)
                             var creditscore = (JSON.stringify(response.creditscore));
                             mycontroller.set('creditscore',creditscore)
                             console.log("creditscore"+ creditscore);
                             var req=item.requestid
                             console.log(">>>>>>>>>>>>>>>>",req)
                              if(req=="12345"){
                              mycontroller.set('isShowingModel',true)
                              var id=item.requestid
                              console.log(id)
                              mycontroller.set('id',id)
                              var name=item.name
                              console.log(name)
                              mycontroller.set('name',name)
                              var purposeOfloan=item.purposeOfloan
                              console.log(purposeOfloan)
                              mycontroller.set('purposeOfloan',purposeOfloan)
                              var needAmt=item.needAmt
                              console.log(needAmt)
                              mycontroller.set('needAmt',needAmt)
                              var Status=item.Status
                              console.log(Status)
                              mycontroller.set('Status',Status)
                              }else if(req=="51616"){
                               var myid=mycontroller.get(item.name)
                               mycontroller.set('myid',myid)
                              
                            }else{
                               var myid=mycontroller.get(item.name)
                               mycontroller.set('myid',myid)
                               console.log("************>>>>>",myid)
                             }
                            }
                                            
                })
        }
},

  // accept:function(item){
  //   var mycontroller=this;
  //   console.log("khetesh")
  //   console.log("requestid==========>")
  //   return $.ajax({
  //   url:'http://localhost:8082/Existing-user/NewRequest/Home',
  //   type: 'GET',
  //   contentType:'application/json',
  //   headers:{ 'requestdeatails':item.requestdeatails},
  //   success: function(response) {
  //   }
  // })
  // }
});