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
      var modalvalue = this.get('showDialog')
      
                if(modalvalue!=true){
                  this.set('showDialog',true)
                }
                else{
                  this.set('showDialog',false)
                }

    
        var loan=this.get('loan');
        this.set("loan",loan);  
        console.log(loan);
        var amount=this.get('amount');
        this.set("amount",amount);
        console.log(amount);
        var propertyType=this.get('propertyType');
        this.set("propertyType",propertyType);
        console.log(propertyType);
        var location=this.get('location');
        this.set("location",location);
        console.log("location",location);
        var year=this.get('year');
        this.set("year",year);
        console.log("year",year);
        var size=this.get('size');
        this.set("size",size);
        console.log("size",size);
        var income=this.get('income');
        this.set("income",income);
        console.log("income",income);
        var fname=this.get('fname');
        this.set("fname",fname);
        console.log("firstname",fname);
        var lname=this.get('lname');
        this.set("lname",lname);
        console.log("lastname",lname);
        var email=this.get('email');
        this.set("email",email);
        console.log("email",email);
        var age=this.get('age');
        this.set("age",age);
        console.log("age",age);
        var phone=this.get('phone');
        this.set("phone",phone);
        console.log("phone number",phone);
        var address=this.get('address');
        this.set("address",address);
        console.log("address",address);
        var country=this.get('country');
        this.set("country",country);
        console.log("country",country);
        var occupation=this.get('occupation');
        this.set("occupation",occupation);
        console.log("occupation",occupation);
        var estimated=this.get('price');
        this.set("estimated",estimated);
        var genderType=this.get('genderType');
        this.set("genderType",genderType);
        console.log(genderType);
        var nationalityType=this.get('nationalityType');
        this.set("nationalityType",nationalityType);
        console.log(nationalityType);
        var Company=this.get('company')
        this.set("Company",Company);
        console.log(Company);
        var joiningdate=this.get('joining');
        this.set("joiningdate",joiningdate);
        console.log(joiningdate);
        var salary=this.get('salary');
        this.set("salary",salary);
        console.log(salary);
        var income=this.get('rupees');
        this.set("income",income);
        console.log(income);
        var date=new Date().toLocaleDateString();
        var time=new Date().toTimeString();


        var transactionstring={
        transactionstring:{
        "loan":loan,
        "amount":amount,
        "propertyType":propertyType,
        "income":income,
        "location":location,
        "year":year,
        "size":size,
        "fname":fname,
        "lname":lname,
        "estimated":estimated,
        "age":age,
        "phone":phone,
        "email":email,
        "address":address,
        "country":country,
        "occupation":occupation,
        "genderType":genderType,
        "nationalityType":nationalityType,
        "Company":Company,
        "joiningdate":joiningdate,
        "salary":salary,
        "address":address,
        "date":date,
        "time":time,
        "bank":"",
        "legal":""
      }
    };
    console.log("datastring"+JSON.stringify(transactionstring));
    var mycontroller=this
    return $.ajax({
      
    url:'http://localhost:8082/loandetails',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(transactionstring),
    success: function(response) {
    console.log(JSON.stringify(response));
    var message = response.message;
    var reqid=response.requestid;
    mycontroller.set('reqid',reqid)
    mycontroller.set('message',message)
    sessionStorage.setItem('message', message);
    console.log("message>>>>>>>>>>" + message);  
    alert("your details has been uploaded successfully")
    console.log("message" + message); 
  
    }
  })
    // this.transitionToRoute('page2');
   
    },
    closeDialog:function(){
      this.set('showDialog',false)
  },
  okay:function(){
      this.transitionToRoute('uploaddoc');
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
signout:function(){
  this.transitionToRoute('login1');
},
saveModel:function(){
  
      }
    }
  
  
})