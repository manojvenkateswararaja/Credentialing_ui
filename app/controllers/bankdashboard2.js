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
              if(score == null){
                  this.transitionToRoute('userdetails')
              }
                  else if(score!=null){
                    this.transitionToRoute('userdetailsdec')
                  }
              },
            
            postPrecoseRequest:function(record){
                //     console.log("hi manoj",showrecords);
                    this.set('record',record)
                    this.transitionToRoute('requestpreclose')
          
                 },
                }
   
});
