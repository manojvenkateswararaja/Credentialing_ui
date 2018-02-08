import Controller from '@ember/controller';

export default Controller.extend({
    showPreclosure:true,
    isPreclosed:false,
    PaymentMode:["offline","online"],
    actions:{
            preclose:function(record){
              var modalvalue = this.get('showDialog')     
                        if(modalvalue!=true){
                          this.set('showDialog',true)
                        }
                        else{
                          this.set('showDialog',false)
                        }
              
              // console.log("details>>>>preclose",details)
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
                "loan":record.loan,
                "amount":record.amount,
                "propertyType":record.propertyType,
                "income":record.income,
                "location":record.location,
                "year":record.year,
                "size":record.size,
                "income":record.income,
                "fname":record.fname,
                "lname":record.lname,
                "estimated":record.estimated,
                "age":record.age,
                "phone":record.phone,
                "email":record.email,
                "address":record.address,
                "country":record.country,
                "occupation":record.occupation,
                "genderType":record.genderType,
                "nationalityType":record.nationalityType,
                "Company":record.Company,
                "joiningdate":record.joiningdate,
                "salary":record.salary,
                "address":record.address,
                "legal":record.legal,
                "bank":"applied",
                "creditscore":record.creditscore,
                "loanamount":record.loanamount,
                "loanterms":record.loanterms,
                // "status":details.status,
                "amountinterestrate":record.amountinterestrate,
                "paymentperyear":record.paymentperyear,
                "installmentpermonth": record.installmentpermonth,
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
              closeDialog1:function(){
              this.set('showDialog',false)
              },
              okay1:function(){
              this.set('isPreclosed',true)
              this.set('showDialog',false)
              this.transitionToRoute('home');
              }, 
              signout:function() {
              this.transitionToRoute('login1');
              },
              closeDialog:function(){
                this.set('showDialogUpload',false)
                },
                okay:function(){
                this.set('showDialogUpload',false)
                }, 
                
  


    }


});
