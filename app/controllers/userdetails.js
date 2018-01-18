import Controller from '@ember/controller';
export default Controller.extend({
    isShowUserDetails:true,
    showCredit:false,
    showUserDetails:true,
    actions:{
        credit:function(record){
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
             var len = record.Record.transactionlist.length
             var data = record.Record.transactionlist[len-1].transactiondetails;
              var data = { "id":key,
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
                "creditscore":"",
                "legal":"",
              }}
            console.log("creditscore------>",data);
              return $.ajax({
              url:'http://192.168.11.149:8082/updatetransaction',//web service for credit score
              type: 'POST',
              contentType:'application/json',
              data:JSON.stringify(data),
              success: function(response) {
              console.log("service")
             mycontroller.set('showCredit',true)
          var creditscore=response.creditscore
            //   mycontroller.set('creditscore',creditscore)
            //   console.log("my credit ccore>>>>>>",creditscore)
                }
                })
          },
          closeDialog:function(){
            this.set('showDialog',false)
        },
        okay:function(){
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
