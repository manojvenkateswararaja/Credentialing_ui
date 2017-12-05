import Controller from '@ember/controller';
import {
    validator,
    buildValidations
}
from 'ember-cp-validations';

var Validations = buildValidations({
    firstname: [
        validator('presence', true),
        validator('format', {
            message: 'This field must be a firstname'
        })
    ],
    lastname: [
        validator('presence', true),
        validator('format', {
            message: 'This field must be a lasttname'
        })
    ],
   gender: [
        validator('presence', true),
        validator('format', {
            regex: /^([a-zA-Z])+$/,
            allowBlank: true,
            message: 'This field must be a gender'
        })
    ],
    occupation: [
        validator('presence', true),
        validator('format', {
            regex: /^([a-zA-Z])+$/,
            message: 'This field must be a occupation'
        })
    ],
  
    nationality: [
        validator('presence', true),
        validator('format', {
            regex: /^([a-zA-Z])+$/,
            message: 'This field must be a nationality'
        })
    ],
    email: [
        validator('presence', true),
        validator('format', {
            regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'This field must be a valid email address'
        })
    ],
});

export default Controller.extend(Validations, {
        selectedOption: null,
        mylist: ["house","condo","land"],
        mortgaugeTypeList:["home","car"],
        downPaymentList:["Not Applicable","0% - 5%","6% - 10%","11%-15%"],
        jobOption:["First choice","Second choice","Third choice"],
        CompanytList:["Company One","Company Two"],
        genderlist:["male","female"],
        nationalitylist:["indian","other"],
        actions: {
        /* didChangeAction: function(selecteditem){
            this.set('selecteditem',selecteditem);
            alert("i am called")
         },*/
       next:function(){

            alert("i m in newrequest")
            var propertyType=this.get('propertyType')
            console.log(propertyType);
             var mortgaugeType=this.get('mortgaugeType')
            console.log(mortgaugeType);
             var paymentPercentage=this.get('paymentPercentage')
            console.log(paymentPercentage);
             var Company=this.get('Company')
            console.log(Company);
               var Choice=this.get('Choice')
            console.log(Choice);
             var Choice=this.get('income')
            console.log(income);
           var amount=this.get('Amount');
           console.log(amount);
            var price=this.get('price');
            console.log(price);
           var location=this.get('location');
           console.log(location);
           var country=this.get('country');
           console.log(country);
           var Age=this.get('Age');
           console.log(Age);
           var occupation=this.get('occupation');
           console.log(occupation)
           var income=this.get('income');
           console.log(income);
           var firstname=this.get('firstname');
           console.log(firstname)
           var lastname=this.get('lastname');
           console.log(lastname);
           var number=this.get('number');
           console.log(number);
            var email = this.get('email');
        console.log(email);
                /*  dataString={
                     'home:home mortgage,
                     car:car mortgage,
                     amt:Amount
                   };*/

                  alert("leaving page1")
   this.transitionToRoute('EmployeeDetail')
        }
        }
        
})