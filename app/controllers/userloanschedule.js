import Controller from '@ember/controller';

export default Controller.extend({
    showUserSchedule:true,
    isLoanSchedule:false,
    actions:{
        
        userschedule:function(details,record){
            var modalvalue = this.get('showDialog')
            
                      if(modalvalue!=true){
                        this.set('showDialog',true)
                      }
                      else{
                        this.set('showDialog',false)
                      }
                      console.log('records',record)
                      console.log('details',details)
                      var date=new Date().toLocaleDateString();
                      var time=new Date().toTimeString();
                      this.set('date',date)
                        this.set('time',time)
            var transactionstring={
                "id":details.Key,"transactionstring":{
                "loan":details.Record.loan,
                "amount":details.Record.amount,
                "propertyType":details.Record.propertyType,
                "income":details.Record.income,
                "location":details.Record.location,
                "year":details.Record.year,
                "size":details.Record.size,
                "income":details.Record.income,
                "fname":details.Record.fname,
                "lname":details.Record.lname,
                "estimated":details.Record.estimated,
                "age":details.Record.age,
                "phone":details.Record.phone,
                "email":details.Record.email,
                "address":details.Record.address,
                "country":details.Record.country,
                "occupation":details.Record.occupation,
                "genderType":details.Record.genderType,
                "nationalityType":details.Record.nationalityType,
                "Company":details.Record.Company,
                "joiningdate":details.Record.joiningdate,
                "salary":details.Record.salary,
                "address":details.Record.address,
                "legal":details.Record.legal,
                "bank":"applied",
                "creditscore":details.Record.creditscore,
                "loanamount": details.Record.loanamount,
                "loanterms":details.Record.loanterms,
                "amountinterestrate":details.Record.amountinterestrate,
                "paymentperyear": details.Record.paymentperyear,
                "installmentpermonth": details.Record.installmentpermonth,
                "statusForBankLegal":"Loan successfully accepted by user",
                "time":time,
                "date":date
                
              }
          }

          console.log("userloan schedule",JSON.stringify(transactionstring))
          var mycontroller=this;
          var token = sessionStorage.getItem('token');
          console.log("manoj",token)
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
              console.log("schedule accepted>>>>>>>>>>" + message); 
             
              }   
            })          
},
closeDialog:function(){
    this.set('showDialog',false)
},
okay:function(){
    this.set('isLoanSchedule',true)
    this.set('showDialog',false)
},

signout:function() {
    this.transitionToRoute('login1');
},

    }
    
});
