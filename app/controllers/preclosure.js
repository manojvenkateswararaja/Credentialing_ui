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
              var url=this.get('url')
              this.set('url',url)
             
              var transactionstring={
                "id":record.Key,"transactionstring":{
                "loan":record.Record.loan,
                "amount":record.Record.amount,
                "propertyType":record.Record.propertyType,
                "income":record.Record.income,
                "location":record.Record.location,
                "year":record.Record.year,
                "size":record.Record.size,
                "income":record.Record.income,
                "fname":record.Record.fname,
                "lname":record.Record.lname,
                "estimated":record.Record.estimated,
                "age":record.Record.age,
                "phone":record.Record.phone,
                "email":record.Record.email,
                "address":record.Record.address,
                "country":record.Record.country,
                "occupation":record.Record.occupation,
                "genderType":record.Record.genderType,
                "nationalityType":record.Record.nationalityType,
                "Company":record.Record.Company,
                "joiningdate":record.Record.joiningdate,
                "salary":record.Record.salary,
                "address":record.Record.address,
                "legal":record.Record.legal,
                "bank":"applied",
                "creditscore":record.Record.creditscore,
                "loanamount":record.Record.loanamount,
                "loanterms":record.Record.loanterms,
                // "status":details.status,
                "amountinterestrate":record.Record.amountinterestrate,
                "paymentperyear":record.Record.paymentperyear,
                "installmentpermonth": record.Record.installmentpermonth,
                "date":date,
                "time":time,
                "installment":installment,
                "url":url,
                "EMI":EMI,
                "statuspreclose":"Requested For Preclose",
                "Payment":Payment,
                "date":date,
                "time":time
              }
          }
              console.log(JSON.stringify(transactionstring))
              var mycontroller=this;
              var token = sessionStorage.getItem('token');
              console.log("manoj",token);
              return $.ajax({
                  url:'http://localhost:8082/updatetransaction',
                  type: 'POST',
                  contentType: 'application/json',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': token
                },
             
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
                logout:function(){
                  console.log("in logout");
                  window.location.reload(true);
              },
                
  


    }


});
