import Controller from '@ember/controller';

export default Controller.extend({
    showPreclosure:true,
    isPreclosed:false,
    PaymentMode:["offline","online"],
    actions:{
            preclose:function(details,record){
              var modalvalue = this.get('showDialog')     
                        if(modalvalue!=true){
                          this.set('showDialog',true)
                        }
                        else{
                          this.set('showDialog',false)
                        }
              
              console.log("details>>>>preclose",details)
              console.log("record>>> preclose",record)
              var EMI=this.get('EMI')
              this.set('EMI',EMI)
              console.log("EMI is>>>>>>",EMI);
              var installment=this.get('installment')
              this.set('installment',installment)
              console.log("installment>>",installment)
              var Payment=this.get('Payment')
              this.set('Payment',Payment)
              console.log("Payment>>",Payment)
              var date=new Date().toLocaleDateString();
              this.set('date',date)
              var time=new Date().toTimeString();
              this.set('time',time)
             
              var transactionstring={
                "id":record,"transactionstring":{
                "loan":details.loan,
                "amount":details.amount,
                "propertyType":details.propertyType,
                "income":details.income,
                "location":details.location,
                "year":details.year,
                "size":details.size,
                "income":details.income,
                "fname":details.fname,
                "lname":details.lname,
                "estimated":details.estimated,
                "age":details.age,
                "phone":details.phone,
                "email":details.email,
                "address":details.address,
                "country":details.country,
                "occupation":details.occupation,
                "genderType":details.genderType,
                "nationalityType":details.nationalityType,
                "Company":details.Company,
                "joiningdate":details.joiningdate,
                "salary":details.salary,
                "address":details.address,
                "legal":details.legal,
                "bank":"applied",
                "creditscore":details.creditscore,
                "loanamount":details.loanamount,
                "loanterms":details.loanterms,
                // "status":details.status,
                "amountinterestrate":details.amountinterestrate,
                "paymentperyear":details.paymentperyear,
                "installmentpermonth": details.installmentpermonth,
                "date":date,
                "time":time,
                "installment":installment,
                "EMI":EMI,
                "statuspreclose":"User Requested For Preclose",
                "Payment":Payment,
                "date":date,
                "time":time
              }
          }
              console.log(JSON.stringify(transactionstring))
              var mycontroller=this;
              return $.ajax({
                  url:'http://localhost:8082/updatetransaction',
                  type: 'POST',
                  contentType: 'application/json',
                  data: JSON.stringify(transactionstring),
                  success: function(response) {
                  console.log(JSON.stringify(response));
                  var message = response;
                  mycontroller.set('message',message)
                  sessionStorage.setItem('message', message);
                  console.log("message>>>>>>>>>>" + message); 
                  mycontroller.set('isShchedule',true)
                  }   
                }) 
              },
              CloseDialog:function(){
              this.set('showDialog',false)
              },
              okay:function(){
              this.set('isPreclosed',true)
              this.set('showDialog',false)
              }, 
              signout:function() {
              this.transitionToRoute('login1');
              },
              closeDialog:function(){
                this.set('showDialog',false)
                },
                okay:function(){
                this.set('showDialog',false)
                }, 


    }


});
