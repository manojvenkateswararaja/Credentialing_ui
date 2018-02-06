import Controller from '@ember/controller';
export default Controller.extend({
    isShchedule:false,
    showUserSchedule:true,
    isBnkLoanSchedule:false,
    InterestRate:["1%","2%","3%","4%","5%","6%","7%","8%"],
    actions:{
      loanschedule:function(details,record){
        var modalvalue = this.get('showDialog')     
                  if(modalvalue!=true){
                    this.set('showDialog',true)
                  }
                  else{
                    this.set('showDialog',false)
                  }
        
        
        var loanamount=this.get('loanamount')
        this.set('loanamount',loanamount)
        console.log("loanamount is>>>>>>",loanamount);
        var loanterms=this.get('loanterms')
        this.set('loanterms',loanterms)
        console.log("loanterms>>",loanterms)
        var amountinterestrate=this.get('amountinterestrate')
        this.set('amountinterestrate',amountinterestrate)
        console.log("amountinterestrate>>",amountinterestrate)
        var paymentperyear=this.get('paymentperyear')
        this.set('paymentperyear',paymentperyear)
        console.log("paymentperyear>>",paymentperyear)
        var installmentpermonth=this.get('installmentpermonth')
        this.set('installmentpermonth',installmentpermonth)
        console.log("installmentpermonth>>",installmentpermonth)
        var date=new Date().toLocaleDateString();
        var details=record.Record
      
        var time=new Date().toTimeString();
        this.set('date',date)
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
          "loanamount": loanamount,
          "loanterms": loanterms,
          "amountinterestrate":amountinterestrate,
          "paymentperyear": paymentperyear,
          "installmentpermonth": installmentpermonth,
          "statusForCreditRequest":"Loan Scheduled",
          "date":date,
          "time":time,
          
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
            mycontroller.set('isShchedule',true)
            }   
          }) 
        },
        closeDialog:function(){
        this.set('showDialog',false)
        },
        okay:function(){
        this.set('showDialog',false)
        this.set('isBnkLoanSchedule',true)
        }, 
        signout:function() {
        this.transitionToRoute('login1');
        },
        compute:function(){
          var principal = this.get('loanamount')
          console.log("loanamount",principal)
          var payments=this.get('loanterms')
          var payment=(payments*100)/12;
           console.log("totalpayments",payments)
          console.log("totalpayments",payment)
          var interests =  this.get('loanamount');
          var interest=interests* 12
          console.log("interests",interests)
          console.log("interest",interest)

      
      
         var x = Math.pow(1 + interest, payment);
          var monthly = (principal*x*interest)/(x-1);
          console.log("x......",x);
          console.log("monthly.....",monthly);
       
          }
          
      
  //         if (!isNaN(monthly) &&
  //         (monthly != Number.POSITIVE_INFINITY) &&
  //         (monthly != Number.NEGATIVE_INFINITY)) {
  
  //        document.loandata.payment.value = round(monthly);
  //         document.loandata.total.value = round(monthly * payments)
  //         document.loandata.totalinterest.value =
  //             round((monthly * payments) - principal);
  //     }
  //     else {
  //         document.loandata.payment.value = "";
  //         document.loandata.total.value = "";
  //         document.loandata.totalinterest.value = "";
  //     }
        
  
      
        
       
    }
});
