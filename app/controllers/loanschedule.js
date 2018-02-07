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
        var amountinterestrate=this.get('interestrate')
        this.set('amountinterestrate',amountinterestrate)
        console.log("amountinterestrate>>",amountinterestrate)
        var emi=this.get('emi')
        console.log(emi)
        var total=this.get('total')
        console.log(total)
        var tot=this.get('tot')
        console.log(tot)
        // var paymentperyear=this.get('paymentperyear')
        // this.set('paymentperyear',paymentperyear)
        // console.log("paymentperyear>>",paymentperyear)
        // var installmentpermonth=this.get('installmentpermonth')
        // this.set('installmentpermonth',installmentpermonth)
        // console.log("installmentpermonth>>",installmentpermonth)
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
          "emi":emi,
          "total":total,
          "tot":tot,
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
          var mycontroller=this;
       var amount=this.get('loanamount')
       console.log("loanamount",amount)
       var months=this.get('loanterms')
       console.log("loanterms",months)
       var interest=this.get('interestrate')
       console.log("interest",interest)
       var intersts=interest/1200;
       console.log("intersts",intersts)
       var emi = (amount * intersts  / (1 - (Math.pow(1/(1 + intersts), months)))).toFixed(2);
       console.log(emi)
       mycontroller.set('emi',emi)
       var total=emi*months
       console.log(total)
       mycontroller.set('total',total)
       var tot=(total-amount).toFixed(2);
       console.log(tot)
       mycontroller.set('tot',tot)
   
    }
        
  
      
        
       
    }
});
