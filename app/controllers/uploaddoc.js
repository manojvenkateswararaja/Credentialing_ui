import Controller from '@ember/controller';

export default Controller.extend({
  // Myshowhome:true,
  actions:{
  //   apply:function(){
  //    var message=this.get('message');
  //    this.set('message',message)   
  OKbutton:function(){
    this.set('isShow_fileupload',false)
  }
    }
  
})

