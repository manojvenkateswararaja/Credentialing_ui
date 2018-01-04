import Controller from '@ember/controller';

export default Controller.extend({
    isShchedule:false,
    showUserSchedule:true,
    InterestRate:["1%","2%","3%","4%","5%","6%","7%","8%"],
    actions:{
    loanschedule:function(){
        var requestid=this.get('requestid')
        this.set('requestid',requestid)
        console.log("requestid>>",requestid)
        var loanamount=this.get('loanamount')
        this.set('loanamount',loanamount)
        console.log("loanamount is>>>>>>",loanamount);
        var loanterms=this.get('loanterms')
        this.set('loanterms',loanterms)
        console.log("loanterms>>",loanterms)
        var amountinterestrate=this.get('amountinterestrate')
        this.set('amountinterestrate',amountinterestrate)
        console.log("amountinterestrate>>",amountinterestrate)
        var paymentperyear=this.get('paymentperyear')
        this.set('paymentperyear',paymentperyear)
        console.log("paymentperyear>>",paymentperyear)
        var installmentpermonth=this.get('installmentpermonth')
        this.set('installmentpermonth',installmentpermonth)
        console.log("installmentpermonth>>",installmentpermonth)
        var datastring={
       "requestid":requestid,
       "loanamount": loanamount,
       "loanterms": loanterms,
       "amountinterestrate":amountinterestrate,
       "paymentperyear": paymentperyear,
       "installmentpermonth": installmentpermonth,
        }
        console.log(JSON.stringify(datastring))
        var mycontroller=this;
        return $.ajax({
            url:'http://192.168.0.20:8082/loanscheduleUser',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(datastring),
            success: function(response) {
            console.log(JSON.stringify(response));
            var message = response.message;
            mycontroller.set('message',message)
            sessionStorage.setItem('message', message);
            console.log("message>>>>>>>>>>" + message); 
            mycontroller.set('isShchedule',true)
            }   
          }) 
      
          },
          proceed:function(message){
              var message=this.get('message')
            if(message=="loanschedule created successfully"){
                console.log("insilede if")
                this.transitionToRoute('bankdashboard')
                
            }
          }
    }
});
