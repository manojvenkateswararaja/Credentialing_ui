import Controller from '@ember/controller';

export default Controller.extend({
    showCreditscore:true,
    actions:{
        creditscore:function(){
            
        },
        signout:function(){
            this.transitionToRoute('login1');
        }

    }
});
