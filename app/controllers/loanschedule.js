import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
    loanschedule:function(){
        return $.ajax({
            url:'',
            type: 'POST',
            contentType: 'application/json',
            // data: JSON.stringify(transactionstring),
            success: function(response) {
            console.log(JSON.stringify(response));
            var message = response.message;
            var reqid=response.requestid;
            mycontroller.set('reqid',reqid)
            mycontroller.set('message',message)
            sessionStorage.setItem('message', message);
            console.log("message>>>>>>>>>>" + message);  
           
            
            }   
          })   
          },
    }
});
