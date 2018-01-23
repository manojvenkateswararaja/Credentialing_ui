import Controller from '@ember/controller';

export default Controller.extend({
    showUserSchedule:true,
    actions:{
        userschedule:function(key,details){
            var modalvalue = this.get('showDialog')
            
                      if(modalvalue!=true){
                        this.set('showDialog',true)
                      }
                      else{
                        this.set('showDialog',false)
                      }

            var transactionstring={
                "id":key,"transactionstring":{
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
                "loanamount": details.loanamount,
                "loanterms":details.loanterms,
                "amountinterestrate":details.amountinterestrate,
                "paymentperyear": details.paymentperyear,
                "installmentpermonth": details.installmentpermonth,
                "status":" Loan successfully accepted "
                
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
              console.log("schedule accepted>>>>>>>>>>" + message); 
             
              }   
            })          
},
closeDialog:function(){
    this.set('showDialog',false)
},
okay:function(){
  this.set('showDialog',false)
  this.transitionToRoute('home')
},
signout:function() {
    this.transitionToRoute('login1');
},

    }
    
});
