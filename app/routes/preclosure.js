import Route from '@ember/routing/route';

export default Route.extend({
    actions:{
        uploadDoc:function (file) {
            // var mycontroller = this;
            console.log("entering upload FIR 4");
    var mycontroller = this;
             console.log(file)
   var requestid=this.controllerFor('home').get('record.Key');
   this.controllerFor('preclosure').set('requestid',requestid);
   console.log(requestid);



file.upload('http://192.168.1.28:8082/UploadDocs?requestid='+requestid).then(function (response) {
    console.log(JSON.stringify(response));
    var url =response.body.url;
    console.log("url ::",JSON.stringify(url));
 
    mycontroller.controllerFor('preclosure').set('showDialogUpload',true);
 
    console.log("saviing file...");
    console.log("file upload sucessfully. 1..");
   
    
 }, function () {
   
    console.log("file upload sucessfully...");
 
  });
},
    },

    
    model(){

        var PreClosingController=this.controllerFor('home').get('record')
        this.controllerFor('preclosure').set('record',PreClosingController)
        var PreClosingDetails=this.controllerFor('home').get('details')
        this.controllerFor('preclosure').set('details',PreClosingDetails)
        console.log("PreClosingController>>>>",PreClosingController)
        console.log("PreClosingDetails>>>>details",PreClosingDetails)

    }
});
