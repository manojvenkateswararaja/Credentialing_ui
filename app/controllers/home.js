import Controller from '@ember/controller';
export default Controller.extend({
    
    actions:{
      
    gotoApply:function(){
             this.transitionToRoute('newrequest');
             //this.transitionToRoute('ember-paper-stepper');
        },
        gotoPreclose:function(){
            this.transitionToRoute('preclosure');    
        }
    }
   
});