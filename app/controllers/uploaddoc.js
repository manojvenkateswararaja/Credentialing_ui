import Controller from '@ember/controller';

export default Controller.extend({
  showhome:true,
    actions:{
        apply:function(){ 
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
             var CompanyName=this.get('CompanyName')
             console.log(CompanyName)
            var Emi=this.get('Emi')
            console.log(Emi)
            var Rupees=this.get('Rupees')
            console.log(Rupees)
            var file=this.get('file')
            console.log(file)
            var file1=this.get('file1')
            console.log(file1)
            var file2=this.get('file2')
           console.log(file2)
           var file3=this.get('file3')
          console.log(file3)
          var file4=this.get('file4')
          console.log(file4)
          var loandetails={
        "propertyType":propertyType,
        "mortgaugeType":mortgaugeType,
        "Amount":Amount,
        "location":location,
        "price":price,
        "country":country,
        "paymentPercentage":paymentPercentage,
        "Age":Age,
        "occupation":occupation,
        "Choice":Choice, 
        "income":income,  
        "firstname":firstname,  
        "lastname":lastname, 
        "number":number,  
        "email":email ,
        "salary":salary,
        "CompanyName":CompanyName,
        "Emi":Emi,
        "Rupees":Rupees,
        "file":file,
       "file1":file1,
        "file2":file2,
       "file3":file3,
       "file4":file4
    };
       console.log("datastring"+  JSON.stringify(loandetails));
            
            return $.ajax({
            url:'http://192.168.11.222:8082/loandetails',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(loandetails),
            success: function(response) {
            console.log(JSON.stringify(response));
            var message = response.message;
            console.log("message" + message);  
            alert("your details has been uploaded successfully")   
            }   
            });
         }

    }
});


