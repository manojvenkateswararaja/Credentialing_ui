import Controller from '@ember/controller';

export default Controller.extend({
   actions:{
       gotologin:function(){
           this.transitionToRoute('login');       
       },
       gotosignup:function(){
           this.transitionToRoute('signup');
       },
         gotoApply:function(){
            this.transitionToRoute('newrequest');
        }
   }
});