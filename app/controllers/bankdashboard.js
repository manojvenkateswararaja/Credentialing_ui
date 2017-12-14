import Controller from '@ember/controller';
var id;  
isShowingModel:false;
export default Controller.extend({
    actions:{
        toggle:function() {
           alert("bank controller")
           var mycontroller=this;
           alert("bank route")
           var  AlRequest;
           return $.ajax({
           url:'http://192.168.0.18:8082/Bank_Dashboard/GetAllRequest',
           type: 'GET',
           contentType: 'application/json',
           data: JSON.stringify(AlRequest),
           success: function(response) {
           console.log(JSON.stringify(response));
           id=response.AlRequest
           sessionStorage.setItem('id',id);
           mycontroller.set('id',id)
          //  for(var i=0;i<=id;i++){
          //    var a=id[i].requestid;  
         //  colNames = ["a"]
          //  rowNames = [1]
          //  comrades = []
          //  comrades.push colName: "a", rowName: 1, id: "Mikhail"
          
         //  }    
          console.log('DEBUG: GET Enquiries OK');
          //  alert("bank route leaving")
        }
      })
    },
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
            mycontroller.set('isShowingModel',false)
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
}

});