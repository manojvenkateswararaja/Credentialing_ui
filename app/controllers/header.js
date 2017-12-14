import Controller from '@ember/controller';

export default Controller.extend({
    
       actions:{
        apply:function(){
       this.transitionToRoute('newrequest');
        }
    }
});
