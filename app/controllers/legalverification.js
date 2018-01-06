import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        verification:function(){
            this.transitionToRoute('legalverification2');

        },
        signout:function(){
            this.transitionToRoute('login1');
        }
    }
});
