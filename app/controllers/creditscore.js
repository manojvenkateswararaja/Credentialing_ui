import Controller from '@ember/controller';

export default Controller.extend({
    showCreditscore:true,
    actions:{
        creditscore:function(){
            // this.set('record', showrecords);
            
        },
        
        signout:function(){
            this.transitionToRoute('login1');
        }

    }
});
