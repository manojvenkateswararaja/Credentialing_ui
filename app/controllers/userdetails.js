import Controller from '@ember/controller';
export default Controller.extend({
    isShowUserDetails:true,
    showCredit:false,
    showUserDetails:true,
    isCreditRequested:false,
    actions:{
  //     //creditscore
  //   bankcreditscore: function(records) {
  //     var requestid={
  //       "records":records
  //     }
  //    console.log("creditscore---request id--->",requestid);
  //    var mycontroller=this
  //      return $.ajax({
  //      url:'http://localhost:8082/creditscore',//web service for credit score
  //      type: 'POST',
  //      contentType:'application/json',
  //      data:JSON.stringify(requestid),
  //      success: function(response) {
  //      console.log("service creditscore")   
  //      var creditscore=response.creditscore
  //      mycontroller.set('creditscore',creditscore)
  //     //myroute.controllerFor('creditscore').set('creditscore',creditscore)
  //     console.log(creditscore);
  //        }
  //        })
  //  },
    
        credit:function(record,lastdetails){
          var modalvalue = this.get('showDialog')
          
                    if(modalvalue!=true){
                      this.set('showDialog',true)
                    }
                    else{
                      this.set('showDialog',false)
                    }
              var mycontroller=this;
              console.log("requestid>>>>>>>>",record.Key)
              
             var key = record.Key
            //  var Recordlen = record.length
            //  console.log("Record length",Recordlen)
             var len = record.Record.transactionlist.length
             var data = lastdetails;
             console.log("updated data",data)
             var date=new Date().toLocaleDateString();
             var time=new Date().toTimeString();

              var data = { 
               "id":key,
               "transactionstring":{
                "loan":data.loan,
                "amount":data.amount,
                "propertyType":data.propertyType,
                "income":data.income,
                "location":data.location,
                "year":data.year,
                "size":data.size,
                "income":data.income,
                "fname":data.fname,
                "lname":data.lname,
                "estimated":data.estimated,
                "age":data.age,
                "phone":data.phone,
                "email":data.email,
                "address":data.address,
                "country":data.country,
                "occupation":data.occupation,
                "genderType":data.genderType,
                "nationalityType":data.nationalityType,
                "Company":data.Company,
                "joiningdate":data.joiningdate,
                "salary":data.salary,
                "address":data.address,
                "bank":"applied",
                "date":date,
                "time":time,
                "legal":"",
              }}
              return $.ajax({
              url:'http://localhost:8082/updatetransaction',//web service for credit score
              type: 'POST',
              contentType:'application/json',
              data:JSON.stringify(data),
              success: function(response) {
              console.log("service")
              mycontroller.set('showCredit',true)
              var creditscore=response
              //mycontroller.set('creditscore',creditscore)
              console.log("my updatetransaction data response>>>>>>",creditscore)
              }
              })
          },
          closeDialog:function(){
          this.set('showDialog',false)
          },
          okay:function(){
            this.set('isCreditRequested',true)
          this.set('showDialog',false)
          },
          signout:function(){
            this.transitionToRoute('login1');
          },





          
     
    //       Approve:function(){
    //         console.log("close");
    //         this.toggleProperty('isShowSCheduleLoan');
    //         var message=this.get('message');
    //         this.set('message',message) 
    //        return $.ajax({
    //           url:'http://192.168.0.20:8082/creditscore',//web service for credit score
    //           type: 'POST',
    //           contentType:'application/json',
    //           data:JSON.stringify(reqid),
    //           success: function(response) {
    //           console.log("service") 
    //         var mymodal= this.get('isShowSCheduleLoan');
    //         console.log(mymodal);
          //   this.transitionToRoute('loanschedule')
    //         },
    //     });
    // },
            // Schedule:function(){
            //     var mymodal= this.get('isShowSCheduleLoan');
            //     console.log(mymodal)
            //     if(mymodal){
            //     this.transitionToRoute('loanschedule')
            //         }
            //     },
            //           Rejected:function(){
            //             var mymodal= this.get('isShowReject');
            //             this.set('isShowReject',true)
            //             console.log(mymodal)
            //             if(mymodal){
            //             this.set('isShowReject',false)
            //             }
            //                 }
                             
                        }      
});