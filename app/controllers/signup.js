import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        signup:function(){
        var email = this.get('email');
        console.log(email);
          var password = this.get('password');
        
        console.log(password);
    
        if (email === null || email === undefined || email === "" || password === null || password === undefined || password === "") {
        let {
            email,
            password
            
        } = this.getProperties('email','password');
           console.log(email);
           console.log(password);
          
           var dataString = {
            "email": email,
            "password": password,
        };
        console.log(JSON.stringify(dataString));
            
            console.log(email);
            return $.ajax({
            url:'http://localhost:8082/mock/register',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(dataString),
            success: function(response) {
                console.log(JSON.stringify(response));
                var message = response.message;
            console.log("message" + message);
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
         }

    }
}
});
