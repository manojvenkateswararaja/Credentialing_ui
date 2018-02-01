import Controller from '@ember/controller';

export default Controller.extend({
isPreclose:true,
isBankPreclosed:false,
    actions:{
        finalPreclose:function(record,details){
            var modalvalue = this.get('showDialog')     
            if(modalvalue!=true){
              this.set('showDialog',true)
            }
            else{
              this.set('showDialog',false)
            }
  
  console.log("details>>>>bnkpreclose",details)
  console.log("record>>>bnkpreclose",record)

  var date=new Date().toLocaleDateString();
  this.set('date',date)
  var time=new Date().toTimeString();
  this.set('time',time)
  var transactionstring={
    "id":record.Key,"transactionstring":{
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
    //"loanterms":details.loanterms,
    "status":details.status,
    "amountinterestrate":details.amountinterestrate,
    "paymentperyear":details.paymentperyear,
    "installmentpermonth": details.installmentpermonth,
    "date":date,
    "time":time,
    "installment":details.installment,
    "EMI":details.EMI,
    "changestatus":"change",
    "userpreclosestatus":"bank accepted preclosure request and closed, soon you will be notified",
    "bankpreclose":"bank accepted preclosure request and closed ",
    "Payment":details.Payment,
    "statuspreclose":"User Requested For Preclose",

  }
}
  console.log(JSON.stringify(transactionstring))
  var mycontroller=this;
  return $.ajax({
      url:'http://192.168.1.28:8082/updatetransaction',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(transactionstring),
      success: function(response) {
      console.log(JSON.stringify(response));
      var message = response;
      mycontroller.set('message',message)
      sessionStorage.setItem('message', message);
      console.log("message>>>>>>>>>>" + message); 
     
      }   
    }) 
  },
  closeDialog:function(){
  this.set('showDialog',false)
  },
  okay:function(){
  this.set('isBankPreclosed',true)
  this.set('showDialog',false)
  }, 
  signout:function() {
  this.transitionToRoute('login1');
  },

        }
    
    

});
