import Controller from '@ember/controller';

export default Controller.extend({
    // showDashboard:true,
    actions: {
        userdetails: function(showrecords) {
            this.set('record',showrecords)
            console.log("get credit score",showrecords)
             var score=showrecords.Records.creditscore
             this.set('score',score)
             var userId=showrecords.Key
             this.set('userId',userId)
             console.log("i got creditscore in bank",score)
             var bankpreclose=showrecords.Records.bankpreclose
             if(bankpreclose=="Loan Closed"){
                
                $(document).ready(function() {
  swal({ 
    title: "Sorry",
     text: "Loan Alredy schedule!",
      type: "info" 
    },
    function(){
      window.location.href = 'bankdashboard2';
  });
  });
            
                swal("Sorry!", "Loan Alredy schedule!", "info");
              }
             console.log("bankpreclose",bankpreclose)
              if(score == null){
                  this.transitionToRoute('userdetails')
              }else if(score!=null){
                    this.transitionToRoute('userdetailsdec')
                  }
            },
            postPrecoseRequest:function(record){
                   //console.log("hi manoj",showrecords);
                    this.set('record',record)
                    this.transitionToRoute('requestpreclose')
                 },
                 logout:function(){
                    console.log("in logout");
                    window.location.reload(true);
                },
                }
   
});
