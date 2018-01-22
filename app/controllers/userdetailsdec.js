import Controller from '@ember/controller';

export default Controller.extend({
  showDashboard:true,
    actions:{
        credit:function(records,showrecords){
            var modalvalue = this.get('showDialog')
            
                      if(modalvalue!=true){
                        this.set('showDialog',true)
                      }
                      else{
                        this.set('showDialog',false)
                      }
                var mycontroller=this;
                console.log("requestid>>>>>>>>",records)
                console.log("showrecords")
                var data=showrecords
                var data = { "id":records,
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
                url:'http://localhost:8082/updatetransaction',//web service for credit score
                type: 'POST',
                contentType:'application/json',
                data:JSON.stringify(data),
                success: function(response) {
                console.log("service")
               mycontroller.set('showCredit',true)
            var creditscore=response
            console.log(creditscore)
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
    }
    
});
