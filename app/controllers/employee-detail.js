import Controller from '@ember/controller';

export default Controller.extend({
     selectedOption: null,
     showhome:true,
     isShowingNewPage:false,
    TypeOfemployee:["Self-employed","Employed"],
    actions:{
      next:function(){
            // var Employeexx = JSON.stringify(this.get('Employeexx'))
            // console.log(Employeexx)
            var propertyType=this.get('propertyType');
            this.set('propertyType',propertyType)
            var mortgaugeType=this.get('mortgaugeType');
            this.set('mortgaugeType',mortgaugeType)
            var Amount=this.get('Amount');
            this.set('Amount',Amount)
            var price=this.get('price');
            this.set('price',price)
            var location=this.get('location');
            this.set('location',location)
            var paymentPercentage=this.get('paymentPercentage');
            this.set('paymentPercentage',paymentPercentage)
            var Age=this.get('Age');
            this.set('Age',Age)
            var occupation=this.get('occupation');
            this.set('occupation',occupation)
            var Age=this.get('Age');
            this.set('Age',Age)
            var Choice=this.get('Choice');
            this.set('Choice',Choice)
            var income=this.get('income');
            this.set('income',income)
            var firstname=this.get('firstname');
            this.set('firstname',firstname)
            var lastname=this.get('lastname');
            this.set('lastname',lastname)
            var number=this.get('number');
            this.set('number',number)
            var email=this.get('email');
            this.set('email',email)
            var country=this.get('country');
            this.set('country',country)
            var salary=this.get('salary');
            console.log(salary)
            var nationalityType=this.get('nationalityType')
            console.log(nationalityType)
            var Company=this.get('Company')
            console.log(Company)
            var Emi=this.get('Emi')
            console.log(Emi)
            var CompanyName=this.get('CompanyName')
             this.set('CompanyName',CompanyName)
            console.log(CompanyName)
            var Rupees=this.get('Rupees')
            console.log(Rupees)
            var transactionstring = {
            "loandetails":{
            // "22222":Employeexx,
            "propertyType":propertyType,
            "mortgaugeType":mortgaugeType,
            "Amount":Amount,
            "location":location,
            "price":price,
            "country":country,
            "paymentPercentage":paymentPercentage,
            "Age":Age,
            "nationalityType":nationalityType,
            "occupation":occupation,
            "Choice":Choice, 
            "income":income,  
            "firstname":firstname,  
            "lastname":lastname, 
            "number":number,  
            "email":email ,
            "salary":salary,
            "Company":Company,
            "CompanyName":CompanyName,
            "Emi":Emi,
            "Rupees":Rupees,
        }
    };
      console.log("datastring"+  JSON.stringify(transactionstring));
      var mycontroller=this
      return $.ajax({
      url:'http://192.168.0.20:8082/loandetails',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(transactionstring),
      success: function(response) {
      console.log(JSON.stringify(response));
      var message = response.message;
      mycontroller.set('message',message)
      sessionStorage.setItem('message', message);
      console.log("message" + message);  
      alert("your details has been uploaded successfully") 
      mycontroller.set('isShowingNewPage',true);   
      }   
    })    // this.transitionToRoute("uploaddoc")
    }
    },
    proceed:function(message){
        var mycontroller=this
        var message=mycontroller.get('message')
        mycontroller.set('message',message)
        if(message =="loan details entered successfully"){
          this.transitionToRoute('uploaddoc')
        }
      }
    
});

    
   
