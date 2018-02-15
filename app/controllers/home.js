import Controller from '@ember/controller';
export default Controller.extend({
    
    actions: {
      
        gotoApply:function(){
             this.transitionToRoute('newrequest');
             //this.transitionToRoute('ember-paper-stepper');
        },
      
        logout:function(){
            console.log("in logout");
            window.location.reload(true);
        },
    }

   
});