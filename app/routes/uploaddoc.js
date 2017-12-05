import Route from '@ember/routing/route';

export default Route.extend({

    model(){
        alert("in upload model")
        var employeedetail = this.controllerFor('employee-detail');
        var genderType=employeedetail.get('genderType');
        var nationalityType=employeedetail.get('nationalityType');
        var propertyType = employeedetail.get('propertyType');
        var mortgaugeType=employeedetail.get('mortgaugeType');
        var Amount=employeedetail.get('Amount');
        var price=employeedetail.get('price');
        var location=employeedetail.get('location');
        var country=employeedetail.get('country');
        var paymentPercentage=employeedetail.get('paymentPercentage');
        var Age=employeedetail.get('Age');
        var occupation=employeedetail.get('occupation');
        var Choice=employeedetail.get('Choice');
        var income=employeedetail.get('income');
        var firstname=employeedetail.get('firstname');
        var lastname=employeedetail.get('lastname');
        var number=employeedetail.get('number');
        var email=employeedetail.get('email');
         this.controllerFor('uploaddoc').set('genderType',genderType);
          this.controllerFor('uploaddoc').set('nationalityType',nationalityType);
        this.controllerFor('uploaddoc').set('propertyType',propertyType);
        this.controllerFor('uploaddoc').set('mortgaugeType',mortgaugeType);
        this.controllerFor('uploaddoc').set('Amount',Amount);
        this.controllerFor('uploaddoc').set('location',location);
        this.controllerFor('uploaddoc').set('price',price);
        this.controllerFor('uploaddoc').set('country',country);
        this.controllerFor('uploaddoc').set('paymentPercentage',paymentPercentage);
        this.controllerFor('uploaddoc').set('Age',Age);
        this.controllerFor('uploaddoc').set('occupation',occupation);
        this.controllerFor('uploaddoc').set('Choice',Choice);  
       this.controllerFor('uploaddoc').set('income',income);  
       this.controllerFor('uploaddoc').set('firstname',firstname);  
      this.controllerFor('uploaddoc').set('lastname',lastname); 
      this.controllerFor('uploaddoc').set('number',number);  
      this.controllerFor('uploaddoc').set('email',email);  
}
});

