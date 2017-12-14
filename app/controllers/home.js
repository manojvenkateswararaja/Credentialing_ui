import Controller from '@ember/controller';

export default Controller.extend({
    showhome:true,
    actions:{
    gotoApply:function(){
             this.transitionToRoute('newrequest');
        }
    }
   
});