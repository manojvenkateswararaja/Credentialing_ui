import Controller from '@ember/controller';

export default Controller.extend({
  showRequest:true,
  emailValidation: [{
    message: 'Please provide email in a valid format',
    validate: (inputValue) => {
      let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(inputValue);
    }
  }],
  selectedOption: null,
    mylist: ["house","condo","land"],
    mortgaugeTypeList:["home","car"],
    downPaymentList:["Not Applicable","0% - 5%","6% - 10%","11%-15%"],
    jobOption:["First choice","Second choice","Third choice"],
    CompanytList:["Company One","Company Two"],
    genderlist:["male","female"],
    nationalitylist:["indian","other"],
 
  actions:{
    
    targetButton:function(){

      var fname=this.get('fname');
      console.log("firstname",fname);
      var lname=this.get('lname');
      console.log("lastname",lname);
      var email=this.get('email');
      console.log("email",email);
      var age=this.get('age');
      console.log("age",age);
      var phone=this.get('phone');
      console.log("phone number",phone);
      // var loanamount=this.get('loanamount');
      // console.log("loanamount",loanamount);
      // var property=this.get('property');
      // console.log("property",property);
      // var location=this.get('location');
      // console.log("location",location);
      var address=this.get('address');
      console.log("address",address);
      var country=this.get('country');
      console.log("country",country);
      var occupation=this.get('occupation');
      console.log("occupation",occupation);
    //   var transactionstring={transactionstring:{
    //     "fname":fname,
    //     "lname":lname,
    //     "age":age,
    //     "email":email,
    //     "phone":phone,
    //     "loanamount":loanamount,
    //     "property":property,
    //     "location":location,
    //     "street":street,
    //     "country":country,
    //     "occupation":occupation,
    //   }
    // };
    // console.log("datastring"+  JSON.stringify(transactionstring));
    
    // return $.ajax({
    // url:'http://192.168.11.149:8082/loandetails',
    // type: 'POST',
    // contentType: 'application/json',
    // data: JSON.stringify(transactionstring),
    // success: function(response) {
    // console.log(JSON.stringify(response));
    // var message = response.message;
    // console.log("message" + message); 
    // console.log("hii");
    this.transitionToRoute('page2');
   
    },
    openNav:function(){
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
  },
  
  closeNav: function() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
  },
  goTonewrequest:function(){
    this.transitionToRoute('newrequest');
},
goToloan:function(){
    this.transitionToRoute('page2');  
},
goToproperty:function(){
    this.transitionToRoute('page3');  
},
goToemployment:function(){
    this.transitionToRoute('page4');  
    
},
saveModel:function(){
  this.transitionToRoute('page2');  
},
nextStep:function(){
 
}
   }
})