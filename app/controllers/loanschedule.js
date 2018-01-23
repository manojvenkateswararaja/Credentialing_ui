import Controller from '@ember/controller';

export default Controller.extend({
    isShchedule:false,
    showUserSchedule:true,
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
        var requestid=this.get('requestid')
        this.set('requestid',requestid)
        console.log("requestid>>",requestid)
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
        var transactionstring={"requestid":record.Key,"transactionstring":{
          // changes
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
          "bank":"applied",
          "creditscore":details.creditscore,
      //  changes
       "loanamount": loanamount,
       "loanterms": loanterms,
       "amountinterestrate":amountinterestrate,
       "paymentperyear": paymentperyear,
       "installmentpermonth": installmentpermonth,
        }
    }
        console.log(JSON.stringify(transactionstring))
        var mycontroller=this;
        return $.ajax({
            url:'http://192.168.11.149:8082/loanscheduleUser',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(transactionstring),
            success: function(response) {
            console.log(JSON.stringify(response));
            var message = response.message;
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
        },
          
         
          signout:function() {
            this.transitionToRoute('login1');
        },
    }
});
