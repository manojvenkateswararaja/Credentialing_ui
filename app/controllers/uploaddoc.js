import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		okay1: function () {
			this.set('showDialog1', false)
			this.set('IdProof', true)

		},
		okay2: function () {
			this.set('showDialog2', false)
			this.set('IdProof2', true)
		},
		closeDialog1: function () {
			this.set('showDialog1', false)
		},
		okay: function () {
			this.set('showDialog', false)
		},
		closeDialog: function () {
			this.set('showDialog', false)
		},
		openNav: function () {
			document.getElementById("mySidenav").style.width = "250px";
			document.getElementById("main").style.marginLeft = "250px";
		},
		closeNav: function () {
			document.getElementById("mySidenav").style.width = "0";
			document.getElementById("main").style.marginLeft = "0";
		},


		targetButton: function () {
			window.alert("uploaded")
			this.set('IsSuccess', true)
			//this.transitionToRoute('home');
		},
		logout:function(){
            console.log("in logout");
            window.location.reload(true);
        },

	}

})