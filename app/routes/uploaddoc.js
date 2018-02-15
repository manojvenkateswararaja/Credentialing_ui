import Route from '@ember/routing/route';

export default Route.extend({
    showRequest:true,
	actions: {
		
		uploadDoc: function (file, queue) {
			// var mycontroller = this;
			console.log("entering upload FIR 3");

			var mycontroller = this;


			//    var x = document.getElementById("upload_file");

			var requestid = this.controllerFor('newrequest').get('reqid');
			this.controllerFor('uploaddoc').set('requestid', requestid);
			console.log(requestid);
			file.upload('http://localhost:8082/UploadDocs?requestid=' + requestid).then(function (response) {
					console.log(JSON.stringify(response));
					var url = response.body.url;
					console.log("url ::", JSON.stringify(url));
					mycontroller.controllerFor('uploaddoc').set('url', url);

					// if(document.getElementById('upload_file')){
					console.log("in loop 1")
					mycontroller.controllerFor('uploaddoc').set("isShow_fileupload", true);
					mycontroller.controllerFor('uploaddoc').set("Notshow_fileupload", false);
					console.log("file upload sucessfully. 1..");
					var index = queue.length
					console.log(index)
					// }else if(document.getElementById('upload_file1')){
					//  console.log("in loop 2")
					//  mycontroller.controllerFor('uploaddoc').set("isShow_fileupload1",true);
					//  mycontroller.controllerFor('uploaddoc').set("Notshow_fileupload1",false);
					// }
				},

				function () {
					console.log("file upload sucessfully...");

				});
		}
		// }
	},
	model() {
		this.controllerFor('uploaddoc').set('showLogin',true);
        this.controllerFor('uploaddoc').set('showUser',true);
        var usertype=this.controllerFor('login1').get('usertype');
        console.log(">>>user",usertype)
        this.controllerFor('uploaddoc').set('usertype',usertype);
		this.controllerFor('uploaddoc').set('Notshow_fileupload', true);
		if (this.controllerFor('uploaddoc').set('Notshow_fileupload', true)) {
			this.controllerFor('uploaddoc').set(' isShow_fileupload', false);
		}
		this.controllerFor('uploaddoc').set('Notfileupload1', true);
		if (this.controllerFor('uploaddoc').set('Notshow_fileupload1', true)) {
			this.controllerFor('uploaddoc').set(' isShow_fileupload1', false);
		}


		var requestid = this.controllerFor('newrequest').get('reqid');
		this.controllerFor('uploaddoc').set('requestid', requestid);
		console.log("reqid--", requestid);
	}


});