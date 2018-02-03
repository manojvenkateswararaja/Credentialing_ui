import Controller from '@ember/controller'; 
export default Controller.extend({
  isShowingModel:false,
  showhome:true,
  shoUserInfo:false,
  showCreditscore:true,
  isCreditGen:false,
  actions: {
    // ApproveUpdate:function (showrecords,records,creditscore)
    ApproveUpdate:function (transactiondetails,records,creditscore) {
      var modalvalue = this.get('showDialog')
      
                if(modalvalue!=true){
                  this.set('showDialog',true)
                }
                else{
                  this.set('showDialog',false)
                }
          var mycontroller=this;
          console.log("record>>>>>>>>loan",transactiondetails)
          console.log("creditscore>>>>>>",creditscore)
          console.log("key>>>>>>",records)
          var date=new Date().toLocaleDateString();
          var time=new Date().toTimeString();
         var transactionstring={
           "id":records,"transactionstring":{
            "loan":transactiondetails.loan,
            "amount":transactiondetails.amount,
            "propertyType":transactiondetails.propertyType,
            "income":transactiondetails.income,
            "location":transactiondetails.location,
            "year":transactiondetails.year,
            "size":transactiondetails.size,
            "income":transactiondetails.income,
            "fname":transactiondetails.fname,
            "lname":transactiondetails.lname,
            "estimated":transactiondetails.estimated,
            "age":transactiondetails.age,
            "phone":transactiondetails.phone,
            "email":transactiondetails.email,
            "address":transactiondetails.address,
            "country":transactiondetails.country,
            "occupation":transactiondetails.occupation,
            "genderType":transactiondetails.genderType,
            "nationalityType":transactiondetails.nationalityType,
            "Company":transactiondetails.Company,
            "joiningdate":transactiondetails.joiningdate,
            "salary":transactiondetails.salary,
            "address":transactiondetails.address,
            "bank":"applied",
            "creditscore":creditscore,
            "creditscorestatus":"creditscore has been generated successfully ",
            "statusForCreditRequest":" Creditscore Generated",
            "legal":"",
            "date":date,
            "time":time
          }}
        console.log("transactionstring-update Approve----->",transactionstring);
          return $.ajax({
          url:'http://192.168.1.28:8082/updatetransaction',//web service for credit score
          type: 'POST',
          contentType:'application/json',
          data:JSON.stringify(transactionstring),
          success: function(response) {
          console.log("service update transaction")
          mycontroller.set('showCredit',true)
          var record=response
          console.log("my updated data with creditscore>>>>>>>>>>>>.",record);
          var statusForCreditRequest=transactiondetails.statusForCreditRequest
          console.log("?????",statusForCreditRequest)
          if(statusForCreditRequest==="Creditscore Generated"){
          mycontroller.controllerFor('creditscore').set(statusForCreditRequest,'Creditscore Generated')
          }
     
            },
          })
        },
        closeDialog:function(){
          this.set('showDialog',false)
      },
      okay:function(){
        this.set('isCreditGen',true)
        // console.log("isCreditGen",isCreditGen)
        this.set('showDialog',false)
      },
      creditscore: function(records) {
         var requestid={
           "records":records
         }
        console.log("creditscore---request id--->",requestid);
        var mycontroller=this
          return $.ajax({
          url:'http://192.168.1.28:8082/creditscore',//web service for credit score
          type: 'POST',
          contentType:'application/json',
          data:JSON.stringify(requestid),
          success: function(response) {
          console.log("service creditscore")   
          var creditscore=response.creditscore
          mycontroller.set('creditscore',creditscore)
          // myroute.controllerFor('creditscore').set('creditscore',creditscore)
          console.log(creditscore);
            }
            })
      },
    },
    signout:function() {
      this.transitionToRoute('login1');
  },
  openNav:function(){
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
},
closeNav: function() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
},
    
  
})
  
  



