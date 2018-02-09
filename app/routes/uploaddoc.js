import Route from '@ember/routing/route';

export default Route.extend({
    actions:{
        uploadDoc:function (file) {
            // var mycontroller = this;
    console.log("entering upload FIR 3");
    var mycontroller = this;
    

    console.log(file)
   var requestid=this.controllerFor('newrequest').get('reqid');
   this.controllerFor('uploaddoc').set('requestid',requestid);
   console.log(requestid);



file.upload('http://localhost:8082/UploadDocs?requestid='+requestid).then(function (response) {
    console.log(JSON.stringify(response));
    var url =response.body.url;
    console.log("url ::",JSON.stringify(url));
    mycontroller.controllerFor('uploaddoc').set('url',url);
    // mycontroller.controllerFor('uploaddoc').set("showDialog",true);
    mycontroller.controllerFor('uploaddoc').set("isShow_fileupload",true);
    mycontroller.controllerFor('uploaddoc').set("Notshow_fileupload",false);
    mycontroller.controllerFor('uploaddoc').set("isShow_fileupload1",true);
    mycontroller.controllerFor('uploaddoc').set("Notshow_fileupload1",false);
    console.log("saviing file...");
    console.log("file upload sucessfully. 1..");
   
    
 }, function () {
   
    console.log("file upload sucessfully...");
 
  });
},
    },
model(){
    this.controllerFor('uploaddoc').set('Notshow_fileupload', true); 
    if(this.controllerFor('uploaddoc').set('Notshow_fileupload', true)){
     this.controllerFor('uploaddoc').set(' isShow_fileupload', false); 
    }  
    this.controllerFor('uploaddoc').set('Notshow_fileupload1', true); 
    if(this.controllerFor('uploaddoc').set('Notshow_fileupload1', true)){
     this.controllerFor('uploaddoc').set(' isShow_fileupload1', false); 
    }  
    var requestid =this.controllerFor('newrequest').get('reqid');
    this.controllerFor('uploaddoc').set('requestid',requestid);
   console.log("reqid--",requestid);
}
   
});
// var requestid=mycontroller.controllerFor('page4').get('reqid');
