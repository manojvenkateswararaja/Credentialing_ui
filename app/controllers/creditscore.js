import Controller from '@ember/controller'; 
export default Controller.extend({
  isShowingModel:false,
  showhome:true,
  shoUserInfo:false,
  showCreditscore:true,
  actions: {
    // ApproveUpdate:function (showrecords,records,creditscore)
    ApproveUpdate:function (showrecords,records,creditscore) {
      var modalvalue = this.get('showDialog')
      
                if(modalvalue!=true){
                  this.set('showDialog',true)
                }
                else{
                  this.set('showDialog',false)
                }
          var mycontroller=this;
          console.log("record>>>>>>>>loan",showrecords)
          console.log("creditscore>>>>>>",creditscore)
          console.log("key>>>>>>",records)
          
         var transactionstring={
           "id":records,"transactionstring":{
            "loan":showrecords.loan,
            "amount":showrecords.amount,
            "propertyType":showrecords.propertyType,
            "income":showrecords.income,
            "location":showrecords.location,
            "year":showrecords.year,
            "size":showrecords.size,
            "income":showrecords.income,
            "fname":showrecords.fname,
            "lname":showrecords.lname,
            "estimated":showrecords.estimated,
            "age":showrecords.age,
            "phone":showrecords.phone,
            "email":showrecords.email,
            "address":showrecords.address,
            "country":showrecords.country,
            "occupation":showrecords.occupation,
            "genderType":showrecords.genderType,
            "nationalityType":showrecords.nationalityType,
            "Company":showrecords.Company,
            "joiningdate":showrecords.joiningdate,
            "salary":showrecords.salary,
            "address":showrecords.address,
            "bank":"applied",
            "creditscore":creditscore,
            "legal":"",
          }}
        console.log("transactionstring-update Approve----->",transactionstring);
          return $.ajax({
          url:'http://localhost:8082/updatetransaction',//web service for credit score
          type: 'POST',
          contentType:'application/json',
          data:JSON.stringify(transactionstring),
          success: function(response) {
          console.log("service update transaction")
          mycontroller.set('showCredit',true)
          var creditscore=response
          console.log("my updated data with creditscore>>>>>>>>>>>>.",creditscore);
     
            },
          })
        },
        closeDialog:function(){
          this.set('showDialog',false)
      },
      okay:function(){
        this.set('showDialog',false)
      },
    creditscore: function(records) {
         var requestid={
           "records":records
         }
        console.log("creditscore---request id--->",requestid);
        var mycontroller=this
          return $.ajax({
          url:'http://localhost:8082/creditscore',//web service for credit score
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
  
  



