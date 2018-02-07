import Route from '@ember/routing/route';
export default Route.extend({
    isBankPreclose:false,
    isUserstatus:false,
    model(){
        var myroute = this
        return $.ajax({
            url: 'http://localhost:8082/getloandetails',
            type: 'GET',
            contentType: 'application/json',
            success: function(response) {
                var showrecords = response.message;
              
                console.log("Allrequest", showrecords)
               
                var len = showrecords.length
                console.log("len show>>>", len);
                for(var i=0;i<=len-1;i++){
                  var record=showrecords[i]
                  var statusForCreditRequest=record.Record.statusForCreditRequest
                  myroute.controllerFor('home').set('record', record)
                  console.log("home page statusForCreditRequest",statusForCreditRequest)
                  console.log("home page record",record)
                  myroute.controllerFor('bankdashboard').set('record', record)
                    if(statusForCreditRequest==="Request sent successfully"){ //show status
                        myroute.controllerFor('home').set('ShowRequest',true)
                        myroute.controllerFor('home').set('isBankPreclose',false) 
                        myroute.controllerFor('home').set('showrecords', showrecords)
                        
                        
                    }
                }
            }
            })
          

            







        
        // var status=this.controllerFor('login1').get('details.status')
        // this.controllerFor('home').set('status',status)
        // console.log("after changing",status)
        // var ShowRequest=this.controllerFor('login1').get('ShowRequest')
        // this.controllerFor('home').set('ShowRequest',ShowRequest)
        // this.controllerFor('home').set('showLogin',false)
        // this.controllerFor('home').set('isShowHome',true)
        // var HomeController=this.controllerFor('login1').get('record')
        // this.controllerFor('home').set('record',HomeController)
        // var details=this.controllerFor('login1').get('details')
        // this.controllerFor('home').set('details',details)
        // console.log("HomeController>>>>",HomeController)
        // console.log("HomeController>>>>details",details)
        // var LoanSchedule=this.controllerFor('login1').get('details.loanterms')
        // this.set('LoanSchedule',LoanSchedule)
        // console.log("LoanSchedule>>>>",LoanSchedule)
        // //preclosure status
        // var bankpreclose=this.controllerFor('home').get('details.bankpreclose')
        // this.controllerFor('home').set('bankpreclose',bankpreclose)
        // console.log("after changing bankpreclose",bankpreclose)
        // //user
        // var userpreclosestatus=this.controllerFor('home').get('details.userpreclosestatus')
        // this.controllerFor('home').set('userpreclosestatus',userpreclosestatus)
        // console.log("after changing userpreclosestatus",userpreclosestatus)
      
        // console.log("after changing isUserstatus")
    //    if(LoanSchedule==null)
    //    {
    //     var status=this.controllerFor('login1').get('status')
    //     this.controllerFor('home').set('status',status)
    //     console.log("Home>>>>status",status)
    //    }else
    //     if(LoanSchedule!=null)
    //    { 
    //     this.controllerFor('home').set('isBankPreclose',true)
    //     this.get('status')
    //     this.set('status',status)
    //     console.log("after changing",status)
        
    //    }else if(userpreclosestatus!=null){
    //        console.log("dkjfgnjdkhnfgjdnjk")
    //    //userpreclose
    //    this.controllerFor('home').set('isBankPreclose',false)
    //    this.controllerFor('home').set('isUserstatus',true)
    
    //    }
    }
});
