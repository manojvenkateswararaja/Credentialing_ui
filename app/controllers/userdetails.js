import Controller from '@ember/controller';
export default Controller.extend({
    isShowUserDetails:true,
    showCredit:false,
    showUserDetails:true,
    isCreditRequested:false,
    actions:{
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
             var len = record.Record.length
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
                "statusForCreditRequest":"Requested For Creditscore"
              }}
              console.log(data)
              return $.ajax({
              url:'http://192.168.1.28:8082/updatetransaction',//web service for credit score
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
          var isCreditRequested=this.get('isCreditRequested')
          console.log("this.set('isCreditRequested',true)",isCreditRequested)
          this.set('isCreditRequested',true)
          this.set('showDialog',false)
          },
          signout:function(){
            this.transitionToRoute('login1');
          },          
                        }      
});