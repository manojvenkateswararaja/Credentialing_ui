import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
    userloanschedule:function(record){
        console.log("hi manoj",record);
        this.set('record',record)
        this.transitionToRoute('userloanschedule')
    },
    logout:function(){
        console.log("in logout");
        window.location.reload(true);
    },

     },
});
