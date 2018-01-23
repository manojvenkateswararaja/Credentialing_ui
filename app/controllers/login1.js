import Controller from '@ember/controller';
import {
    validator,
    buildValidations
}
from 'ember-cp-validations';

var Validations = buildValidations({
    email: [
        validator('presence', true),
        validator('format', {
            regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'This field must be a valid email address'
        })
    ],
    password: {
        description: 'password',
        validators: [
            validator('presence', true),
            validator('format', {
                regex: /^[a-zA-Z0-9]{6,8}$/,
                message: 'This field must be a Valid Password (minimum 6 digits required)'
            })
        ],
    },
});
export default Controller.extend(Validations,{
   isShowingModal:false,
   showLogin:true,
   
//    isShowHome:false,
   actions:{
        login:function(){  
            console.log("115")
       var email = this.get('email');
        console.log(email);
        var password = this.get('password');
        console.log(password);
        var mycontroller = this;
       
      
    // end
        if (email === null || email === undefined || email === "" || password === null || password === undefined || password === "") {
                alert("please fill details for login");
            } else {
                let {
            email,
            password
        } = this.getProperties('email','password');
           console.log(email);
           console.log(password);
           var dataString = {
           "email": email,
           "password": password,
        //    "usertype": usertype,
        };
            console.log(JSON.stringify(dataString));
          
            console.log(email);
            console.log(password);
            return $.ajax({
            url:'http://localhost:8082/login',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(dataString),
            success: function(response) {
            console.log(JSON.stringify(response));
            var message = response.message;
            console.log("message" + message);
            var usertype=response.usertype;
            var status=response.status
             mycontroller.set('usertype',usertype)
            console.log(usertype)
           sessionStorage.setItem('usertype', usertype);
          mycontroller.set('showDialog',true)
            }    
            });
           
           
            }
            //end
         },
   
    closeDialog:function(){
        this.set('showDialog',false)
    },
    okay:function(){
        var mycontroller=this
        var usertype=mycontroller.get('usertype')
        
        mycontroller.set('usertype',usertype)
          //mycontroller.set('showLogin',false)
          
          this.set('showDialog',true)
        if(usertype =="user"){
            var RequestidOfuser=mycontroller.get('record.Key') 
            console.log("RequestidOfuser>>>>>",RequestidOfuser)
            mycontroller.set('RequestidOfuser',RequestidOfuser)
            if(RequestidOfuser==null){
                this.transitionToRoute('newrequest'); 
            }else if(RequestidOfuser!=null){
                this.transitionToRoute('home'); 
            }
        
      }else if(usertype =="Bank"){
        // mycontroller.set('showLogin',false)
        this.set('showDialog',true)
         this.transitionToRoute('bankdashboard');
      }else if(usertype=="creditscoregenerator"){
          this.set('showDialog',true)
          this.transitionToRoute('creditscore');

      }else if(usertype=="legalactor"){
        this.set('showDialog',true)
        this.transitionToRoute('legalverification');
      }
        
      
        
    },
  
},

});





// import Controller from '@ember/controller';
// import {
//     validator,
//     buildValidations
// }
// from 'ember-cp-validations';

// var Validations = buildValidations({
//     email: [
//         validator('presence', true),
//         validator('format', {
//             regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//             message: 'This field must be a valid email address'
//         })
      
//     ],

//     password: {
//         description: 'password',
//         validators: [
//             validator('presence', true),
//             validator('format', {
//                 regex: /^[a-zA-Z0-9]{6,8}$/,
//                 message: 'This field must be a Valid Password (minimum 6 digits required)'
//             })
//         ],
//     },
// });
// export default Controller.extend(Validations,{
//     isShowingModal:false,
//    actions:{
//         Submit:function(){
//         var email = this.get('email');
//         console.log(email);
//         var password = this.get('password');
//         console.log(password);
       
//         if (email === null || email === undefined || email === "" || password === null || password === undefined || password === "") {
//                 alert("please fill details for login");
//             } else {
//                 let {
//             email,
//             password
//         } = this.getProperties('email','password');
//            console.log(email);
//            console.log(password);
//            var dataString = {
//            "email": email,
//            "password": password,
//         };
//         console.log(JSON.stringify(dataString));
//             var mycontroller = this;
//             console.log(email);
//             return $.ajax({
//             url:'http://192.168.1.18:8082/login',
//             type: 'POST',
//             contentType: 'application/json',
//             data: JSON.stringify(dataString),
//             success: function(response) {
//             console.log(JSON.stringify(response));
//             var message = response.message;
//             console.log("message" + message);
//                     var usertype=response.userType;
//                         //console.log("usertype :" + usertype);
//                         sessionStorage.setItem('usertype', usertype);
//                         mycontroller.set("usertype",usertype);
                        
//                         if(message === "Login succeess"){
//                         mycontroller.set('isShowingModal',true);
//                         console.log("hi------------>")
//                 }
//                 else{
//                     message =  "login failed";              
//                   }

                        
//                         //mycontroller.transitionToRoute('userhome')     
//                         // mycontroller.transitionToRoute('home');
//             },      
//                 // transitionToPreviousRoute(){
//                 // var previousTransition = this.get('previousTransition');
//                 // if (previousTransition) {
//                 //   this.set('previousTransition', null);
//                 //   previousTransition.retry();
//                 // } else {
//                 // Default back to homepage
//                 //   this.transitionToRoute('index');
//                 // }
//             // },
            
//             });

//         //this.set('isShowingModal', false);
//         //this.set('showUser',true);
//          }

//     }
// }
// });
