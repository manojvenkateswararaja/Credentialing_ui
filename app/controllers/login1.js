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
   ShowRequest:false, //this is to show request id
   
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
            var token=response.token
            console.log("token",token)
            var usertype=response.usertype;
            var status=response.status
             mycontroller.set('usertype',usertype)
            console.log(usertype)
            var userid=response.userId
            console.log(userid)
            mycontroller.set('userid',userid)
            //  sessionstorage.setItem('userid',userid);
            sessionStorage.setItem('usertype', usertype);
            // sessionStorage.setItem('userid', userid);
            sessionStorage.setItem('token', token);
            
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
       var ShowRequest= mycontroller.get('ShowRequest')
       mycontroller.set('ShowRequest',ShowRequest)
       console.log("ShowRequest?????",ShowRequest)
        mycontroller.set('usertype',usertype)
          //mycontroller.set('showLogin',false)
          console.log("usertype in ui",usertype)
          
          this.set('showDialog',true)
           if(usertype =="user"){
            var RequestidOfuser=mycontroller.get('finaldata.Key') 
           
            console.log("RequestidOfuser>>>>>",RequestidOfuser)
            mycontroller.set('RequestidOfuser',RequestidOfuser)
          
            if(RequestidOfuser==null){
               
                this.transitionToRoute('home');

            }else if(RequestidOfuser!=null){
                this.set('ShowRequest',true)
                this.set('showUser',true);
                
                this.transitionToRoute('home'); 
            }
      }else if(usertype =="bank"){
        // mycontroller.set('showLogin',false)
        this.set('showDialog',true)
        this.set('showUser',true);
         this.transitionToRoute('bankdashboard');
      }else if(usertype=="creditscoregenerator"){
          this.set('showDialog',true)
          this.transitionToRoute('creditscore2');
          this.set('showUser',true);
      }else if(usertype=="legalactor"){
        this.set('showDialog',true)
        this.transitionToRoute('legalverification2');
        this.set('showUser',true);
      }   
      this.set('showDialog',false)   
      }, 
},
});




