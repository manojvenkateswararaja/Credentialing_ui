import Controller from '@ember/controller';

export default Controller.extend({
   actions:{
       gotologin:function(){
           this.transitionToRoute('login');       
       },
       gotosignup:function(){
           this.transitionToRoute('signup');
       },
    //    gotobank:function(){
    //     this.transitionToRoute('bankdashboard');
    // },

        //  gotoApply:function(){
        //     this.transitionToRoute('newrequest');
        // }
   }
});