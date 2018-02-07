import Controller from '@ember/controller';

export default Controller.extend({
    showCreditscore:true,
    isLegalverified:false,
    actions:{
        
        signout:function(){
            this.transitionToRoute('login1');
        },
        reject:function (lastdetails,records,creditscore) {
            var modalvalue = this.get('showDialog')
            
                      if(modalvalue!=true){
                        this.set('showDialog',true)
                      }
                      else{
                        this.set('showDialog',false)
                      }
                var mycontroller=this;
                console.log("requestid>>>>>>>>",records)
                var date=new Date().toLocaleDateString();
                var time=new Date().toTimeString();
               var transactionstring={"id":records,"transactionstring":{
                  "loan":lastdetails.loan,
                  "amount":lastdetails.amount,
                  "propertyType":lastdetails.propertyType,
                  "income":lastdetails.income,
                  "location":lastdetails.location,
                  "year":lastdetails.year,
                  "size":lastdetails.size,
                  "income":lastdetails.income,
                  "fname":lastdetails.fname,
                  "lname":lastdetails.lname,
                  "estimated":lastdetails.estimated,
                  "age":lastdetails.age,
                  "phone":lastdetails.phone,
                  "email":lastdetails.email,
                  "address":lastdetails.address,
                  "country":lastdetails.country,
                  "occupation":lastdetails.occupation,
                  "genderType":lastdetails.genderType,
                  "nationalityType":lastdetails.nationalityType,
                  "Company":lastdetails.Company,
                  "joiningdate":lastdetails.joiningdate,
                  "salary":lastdetails.salary,
                  "address":lastdetails.address,
                  "creditscore":lastdetails.creditscore,
                  "statusForCreditRequest":" Legalverifier rejected",
                  "date":date,
                  "time":time
                }}
              console.log("creditscore------>",transactionstring);
                return $.ajax({
                url:'http://192.168.1.28:8082/updatetransaction',//web service for credit score
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
            approved:function (lastdetails,records,creditscore) {
                var modalvalue = this.get('showDialog')
                
                          if(modalvalue!=true){
                            this.set('showDialog',true)
                          }
                          else{
                            this.set('showDialog',false)
                          }
                    var mycontroller=this;
                    console.log("requestid>>>>>>>>",records)
                    var date=new Date().toLocaleDateString();
                    var time=new Date().toTimeString();
                    this.set('date',date)
                    this.set('time',time)
                   var transactionstring={"id":records,"transactionstring":{
                      "loan":lastdetails.loan,
                      "amount":lastdetails.amount,
                      "propertyType":lastdetails.propertyType,
                      "income":lastdetails.income,
                      "location":lastdetails.location,
                      "year":lastdetails.year,
                      "size":lastdetails.size,
                      "income":lastdetails.income,
                      "fname":lastdetails.fname,
                      "lname":lastdetails.lname,
                      "estimated":lastdetails.estimated,
                      "age":lastdetails.age,
                      "phone":lastdetails.phone,
                      "email":lastdetails.email,
                      "address":lastdetails.address,
                      "country":lastdetails.country,
                      "occupation":lastdetails.occupation,
                      "genderType":lastdetails.genderType,
                      "nationalityType":lastdetails.nationalityType,
                      "Company":lastdetails.Company,
                      "joiningdate":lastdetails.joiningdate,
                      "salary":lastdetails.salary,
                      "address":lastdetails.address,
                      "creditscore":lastdetails.creditscore,
                      "legal":"approved",
                      "statusForCreditRequest":"Legalverifier approved",
                      "date":date,
                      "time":time
                    }}
                  console.log("creditscore------>",transactionstring);
                    return $.ajax({
                    url:'http://192.168.1.28:8082/updatetransaction',//web service for credit score
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
