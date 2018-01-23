import Controller from '@ember/controller';

export default Controller.extend({
  showDashboard:true,
  showDialogApprove:false,
    actions:{
      LegalValidater:function(records,showrecords){
            var modalvalue = this.get('showDialog')
            
                      if(modalvalue!=true){
                        this.set('showDialog',true)
                      }
                      else{
                        this.set('showDialog',false)
                      }
                var mycontroller=this;
                console.log("requestid>>>>>>>>",records.Key)
                console.log("records>>>>userdec",records)
                var data=showrecords
                console.log("data>>>>",data)
                var Updateddata = { "id":records.Key,
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
                  "creditscore":data.creditscore,
                  
                }}
              console.log("creditscore------>",data);
                return $.ajax({
                url:'http://localhost:8082/updatetransaction',//update legal verifier data
                type: 'POST',
                contentType:'application/json',
                data:JSON.stringify(Updateddata),
                success: function(response) {
                console.log("service")
                mycontroller.set('showCredit',true)
                var creditscore=response
                console.log(creditscore)
               
           
                  }
                  })
            },
            LoanApprove:function(record,details){
              this.transitionToRoute('loanschedule')
            
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
