import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        //this.transitionTo('ember-paper-stepper')
        //this.transitionTo('propertydetail')
        // this.transitionTo('bankdashboard')
        // this.transitionTo('userdetails')
        //this.transitionTo('userdetailsdec')
        //this.transitionTo('loanschedule')
        this.transitionTo('loanquotation')
        //this.transitionTo('newrequest')
        //this.transitionTo('legalverification')
        //this.transitionTo('legalverification2')
        //this.transitionTo('creditscore')
        //this.transitionTo('full-credit-score')
        //this.transitionTo('login')
    }
});
