import Route from '@ember/routing/route';

export default Route.extend({
    isStatus:true,
    model(){

        this.controllerFor('home2').set('showLogin',true);
        this.controllerFor('home2').set('showUser',true);
        var usertype=this.controllerFor('login1').get('usertype');
        console.log(">>>user",usertype)
        this.controllerFor('home2').set('usertype',usertype);
    this.controllerFor('home2').set('ShowRequest',true);
    // usertype
    var showrecords=this.controllerFor('home').get('showrecords');
    this.controllerFor('home2').set('showrecords',showrecords);
    var myroute = this
    var len = showrecords.length
    console.log("len show>>>", len);

      var record=showrecords[0]
      var statusForUser=record.Records.statusForUser
      console.log("home page statusForUser???>>",statusForUser)
      var statusForCreditRequest=record.Records.statusForCreditRequest
      console.log("home page statusForCreditRequest",statusForCreditRequest)
      var statuspreclose=record.Records.statuspreclose
      console.log("home page statusForUser",statuspreclose)
      
    var userpreclosestatus=record.Records.userpreclosestatus;
    console.log("userpreclosestatus",userpreclosestatus)
    console.log("home page statusForUser",statusForUser)
    console.log("home page record",record)
      if(statusForUser==="Request sent successfully" ||statuspreclose==="Requested For Preclose"||userpreclosestatus==="preclosure accepted"){ //show status
         console.log("if loop 1")
        myroute.controllerFor('home2').set('ShowRequest',true)
          myroute.controllerFor('home2').set('isStatus',false) 
          myroute.controllerFor('home2').set('isBankPreclose',false) 
          myroute.controllerFor('home2').set('showrecords', showrecords)  
      }else if(statusForCreditRequest==="Loan Scheduled"){
        console.log("if loop 2")
          myroute.controllerFor('home2').set('IsCreditStatus',false)
          myroute.controllerFor('home2').set('ShowRequest',true)
          myroute.controllerFor('home2').set('isBankPreclose',false) 
          myroute.controllerFor('home2').set('DisablePrecoleButton',true)
          myroute.controllerFor('home2').set('showrecords', showrecords)

      }
    }

 
});
