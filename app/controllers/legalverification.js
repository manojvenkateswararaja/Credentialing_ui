import Controller from '@ember/controller';

export default Controller.extend({
    showCreditscore:true,
    isLegalverified:false,
    actions:{
        
        signout:function(){
            this.transitionToRoute('login1');
        },
        reject:function (showrecords,records) {
            var modalvalue = this.get('showDialog')
            
                      if(modalvalue!=true){
                        this.set('showDialog',true)
                      }
                      else{
                        this.set('showDialog',false)
                      }
                var mycontroller=this;
                console.log("requestid>>>>>>>>",showrecords)
                var date=new Date().toLocaleDateString();
                var time=new Date().toTimeString();
               var transactionstring={"id":records,"transactionstring":{
                  "loan":showrecords.loan,
                  "amount":showrecords.amount,
                  "propertyType":showrecords.propertyType,
                  "income":showrecords.income,
                  "location":showrecords.location,
                  "year":showrecords.year,
                  "size":showrecords.size,
                  "income":showrecords.income,
                  "fname":showrecords.fname,
                  "lname":showrecords.lname,
                  "estimated":showrecords.estimated,
                  "age":showrecords.age,
                  "phone":showrecords.phone,
                  "email":showrecords.email,
                  "address":showrecords.address,
                  "country":showrecords.country,
                  "occupation":showrecords.occupation,
                  "genderType":showrecords.genderType,
                  "nationalityType":showrecords.nationalityType,
                  "Company":showrecords.Company,
                  "joiningdate":showrecords.joiningdate,
                  "salary":showrecords.salary,
                  "address":showrecords.address,
                  "bank":"applied",
                  "creditscore":showrecords.creditscore,
                  "legal":"rejected",
                  "date":date,
                  "time":time
                }}
              console.log("creditscore------>",transactionstring);
                return $.ajax({
                url:'http://localhost:8082/updatetransaction',//web service for credit score
                type: 'POST',
                contentType:'application/json',
                data:JSON.stringify(transactionstring),
                success: function(response) {
                console.log("service")
               mycontroller.set('showCredit',true)
            var creditscore=response
            console.log("credit",creditscore);
              //   mycontroller.set('creditscore',creditscore)
              //   console.log("my credit ccore>>>>>>",creditscore)
                  },
                })
            },
            closeDialog:function(){
                this.set('showDialog',false)
            },
            okay:function(){
              this.set('isLegalverified',true)
              this.set('showDialog',false)
            },
            approved:function (showrecords,records) {
                var modalvalue = this.get('showDialog')
                
                          if(modalvalue!=true){
                            this.set('showDialog',true)
                          }
                          else{
                            this.set('showDialog',false)
                          }
                    var mycontroller=this;
                    console.log("requestid>>>>>>>>",showrecords)
                    var date=new Date().toLocaleDateString();
                    var time=new Date().toTimeString();
                    this.set('date',date)
                    this.set('time',time)
                   var transactionstring={"id":records,"transactionstring":{
                      "loan":showrecords.loan,
                      "amount":showrecords.amount,
                      "propertyType":showrecords.propertyType,
                      "income":showrecords.income,
                      "location":showrecords.location,
                      "year":showrecords.year,
                      "size":showrecords.size,
                      "income":showrecords.income,
                      "fname":showrecords.fname,
                      "lname":showrecords.lname,
                      "estimated":showrecords.estimated,
                      "age":showrecords.age,
                      "phone":showrecords.phone,
                      "email":showrecords.email,
                      "address":showrecords.address,
                      "country":showrecords.country,
                      "occupation":showrecords.occupation,
                      "genderType":showrecords.genderType,
                      "nationalityType":showrecords.nationalityType,
                      "Company":showrecords.Company,
                      "joiningdate":showrecords.joiningdate,
                      "salary":showrecords.salary,
                      "address":showrecords.address,
                      "bank":"applied",
                      "creditscore":showrecords.creditscore,
                      "legal":"approved",
                      "legalstatus":"legalverification has been validated successfully",
                      "date":date,
                      "time":time
                    }}
                  console.log("creditscore------>",transactionstring);
                    return $.ajax({
                    url:'http://localhost:8082/updatetransaction',//web service for credit score
                    type: 'POST',
                    contentType:'application/json',
                    data:JSON.stringify(transactionstring),
                    success: function(response) {
                    console.log("service")
                    mycontroller.set('showCredit',true)
                    var creditscore=response
                    console.log("credit",creditscore);
                
                      },
                    })
                },
            
        }
    
    
});
