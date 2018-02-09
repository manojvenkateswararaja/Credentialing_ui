import Controller from '@ember/controller';
export default Controller.extend({
    isShowHome:true,
    actions: {
        userloan:function(record){
            //     console.log("hi manoj",showrecords);
            this.set('record',record)
                this.transitionToRoute('userloanschedule')
    
             },
    gotoApply:function(){
             this.transitionToRoute('newrequest');
             //this.transitionToRoute('ember-paper-stepper');
        },
      
      
    }
   
});