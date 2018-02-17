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
    
    email: [
        validator('presence', true),
        validator('format', {
            regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'This field must be a valid email address'
        })
    ],
});
export default Controller.extend({
     showLogin:true,
    genderlist:["male","female"],
    actions:{
        signup:function(){
            var firstname = this.get('fname');
            console.log(firstname);
            var lastname = this.get('lname');
            console.log(lastname);
            // var gender = this.get('gender');
            // console.log(gender);
            var Dateofbirth = this.get('dateofbirth');
            console.log(Dateofbirth);        
            var email = this.get('email');
        console.log(email);
          var password = this.get('password');
        console.log(password);
        var retypepassword = this.get('re-password');
        console.log(retypepassword);
        var phonenumber = this.get('number');
        console.log(phonenumber);
        console.log("ji------",phonenumber);
        if (email === null || email === undefined || email === "" || password === null || password === undefined || password === "") {
            alert("please fill details for signup");
        } else {

           var datastring = {
            "email": email,
            "password": password,
            "retypepassword":retypepassword,
            "firstname":firstname,
            "lastname":lastname,
            "phonenumber":phonenumber,
            "dateofbirth":Dateofbirth,
            "usertype":"user"
        };
        console.log("hi iam manoj",JSON.stringify(datastring));
            var mycontroller=this
            console.log(email);
            return $.ajax({
            url:'http://localhost:8082/registerUser',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(datastring),
            success: function(response) {
                console.log(JSON.stringify(response));
                var message = response.message;
            console.log("message" + message);
            mycontroller.transitionToRoute('login1') 
            
            },      
            
            // transitionToPreviousRoute(){
                // var previousTransition = this.get('previousTransition');
                // if (previousTransition) {
                //   this.set('previousTransition', null);
                //   previousTransition.retry();
                // } else {
                  // Default back to homepage
                //   this.transitionToRoute('index');
                // }
            // },
            
            });

        //this.set('isShowingModal', false);
        //this.set('showUser',true);
        //  } else {
        //      console.log("hii this is else part");
        //  }

    }
    
},
closeDialog:function(){
    this.set('showDialog',false)
},
okay:function(){
    this.transitionToRoute('login1')
}
}
});
