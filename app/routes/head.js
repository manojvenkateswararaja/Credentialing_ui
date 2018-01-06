import Route from '@ember/routing/route';

export default Route.extend({
    modal(){
        actions:{
            signout:{
                this.transitionToRoute('login1');
            }
        }
    }
});
