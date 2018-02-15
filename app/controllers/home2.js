import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
    userloanschedule:function(record){
        console.log("hi manoj",record);
        this.set('record',record)
        this.transitionToRoute('userloanschedule')
    }

     },
});
