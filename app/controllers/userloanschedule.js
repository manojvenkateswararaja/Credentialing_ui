import Controller from '@ember/controller';

export default Controller.extend({
    showUserSchedule:true,
    actions:{
        userschedule:function(){
            var requestid=this.get('requestid');
            this.set("requestid",requestid);  
            var requestid={
                "requestid":requestid
            }
            console.log("datastring"+  JSON.stringify(requestid));
            var mycontroller=this
            return $.ajax({
            url:'http://localhost:8082/getloanschedule',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(requestid),
            success: function(response) {
            console.log(JSON.stringify(response));
            var message = response.message;
            mycontroller.set('message',message)
        }
     
    })
},
signout:function() {
    this.transitionToRoute('login1');
},
    }
});
