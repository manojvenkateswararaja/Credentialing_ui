import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        // this.transitionTo('login')
        // this.transitionTo('propertydetail')
        //  this.transitionTo('bankdashboard')
         this.transitionTo('userdetails')
        //   this.transitionTo('userdetailsdec')
        //  this.transitionTo('loanschedule')
        //  this.transitionTo('loanquotation')
    }
});
