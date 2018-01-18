import Controller from '@ember/controller'; 
export default Controller.extend({
  isShowingModel:false,
  showhome:true,
  shoUserInfo:false,
  showDashboard:true,
    
  // accept:function(item){
  //   var mycontroller=this;
  //   console.log("khetesh")
  //   console.log("requestid==========>")
  //   return $.ajax({
  //   url:'http://localhost:8082/Existing-user/NewRequest/Home',
  //   type: 'GET',
  //   contentType:'application/json',
  //   headers:{ 'requestdeatails':item.requestdeatails},
  //   success: function(response) {
  //   }
  // })
  // }
  actions: {
    update:function (showrecords,records,creditscore) {
      var modalvalue = this.get('showDialog')
      
                if(modalvalue!=true){
                  this.set('showDialog',true)
                }
                else{
                  this.set('showDialog',false)
                }
          var mycontroller=this;
          console.log("requestid>>>>>>>>",showrecords)
          console.log("creditscore>>>>>>",creditscore)
          console.log("key>>>>>>",records)
          
         var transactionstring={"id":records,"transactionstring":{
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
        console.log("creditscore------>",transactionstring);
          return $.ajax({
          url:'http://192.168.11.149:8082/updatetransaction',//web service for credit score
          type: 'POST',
          contentType:'application/json',
          data:JSON.stringify(transactionstring),
          success: function(response) {
          console.log("service")
         mycontroller.set('showCredit',true)
      var creditscore=response
      console.log("credit",creditscore);
        //   mycontroller.set('creditscore',creditscore)
        //   console.log("my credit ccore>>>>>>",creditscore)
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
     
        
        
        //  console.log();
        //  var len = record.Record.transactionlist.length
        //  var data = record.Record.transactionlist[len-1].transactiondetails;
         var requestid={
           "records":records
         }
        console.log("creditscore------>",requestid);
        var mycontroller=this
          return $.ajax({
          url:'http://192.168.11.149:8082/creditscore',//web service for credit score
          type: 'POST',
          contentType:'application/json',
          data:JSON.stringify(requestid),
          success: function(response) {
          console.log("service")
       
      var creditscore=response.creditscore
      mycontroller.set('creditscore',creditscore)
      // myroute.controllerFor('creditscore').set('creditscore',creditscore)
      console.log(creditscore);
        //   mycontroller.set('creditscore',creditscore)
        //   console.log("my credit ccore>>>>>>",creditscore)
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
  
  



