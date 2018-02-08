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
    var f1=document.getElementById('upload_file')
    var f2=document.getElementById('upload_file2')
    console.log("f2??????",f2)
    console.log("f1",f1)
   
    if(f1===document.getElementById('upload_file')){
    mycontroller.controllerFor('uploaddoc').set('isShow_fileupload',true);
        }else if(f2===document.getElementById('upload_file2')){
           
    mycontroller.controllerFor('uploaddoc').set('isShow_fileupload1',true);
    }
    // mycontroller.controllerFor('uploaddoc').set("showDialog",true);
    mycontroller.controllerFor('uploaddoc').set("Notshow_fileupload",false);
    console.log("saviing file...");
    console.log("file upload sucessfully. 1..");
    //return image.save();
 
   
   
    
 }, function () {
   
    console.log("file upload sucessfully...");
 
  });
},
    },
model(){
    var requestid =this.controllerFor('newrequest').get('reqid');
    this.controllerFor('uploaddoc').set('requestid',requestid);
   console.log("reqid--",requestid);
  
}
   
});
// var requestid=mycontroller.controllerFor('page4').get('reqid');
