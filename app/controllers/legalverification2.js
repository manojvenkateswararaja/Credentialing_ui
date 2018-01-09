import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        reject:function(){
            var reject="Your property details has been failed for verification"
            alert("Your property details has been failed for verification");
        },
        okay:function(){
            this.set('showDialog',false)
          },
          closeDialog:function(){
            this.set('showDialog',false)
        },
        signout:function(){
            this.transitionToRoute('login1');
        }
    }
});
