import Controller from '@ember/controller';

export default Controller.extend({
  IsSuccess:false,
  IsSuccessFile2:false,
  IsSuccessFile:false,
  showRequest:true,
  IdProof:false,
  IdProof2:false,
  actions:{
  okay1:function(){
    this.set('showDialog1',false)
    this.set('IdProof',true)

  },
  okay2:function(){
    this.set('showDialog2',false)
    this.set('IdProof2',true)
  },
  closeDialog1:function(){
    this.set('showDialog1',false)
  },
  okay:function(){
    this.set('showDialog',false)
  },
  closeDialog:function(){
    this.set('showDialog',false)
},
  openNav:function(){
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
},
closeNav: function() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
},

// uploadDoc:function(file){
//   console.log(file)
//   let filename1 = file.get('name');
//   console.log("filename1",filename1)
//   if(filename1==="o_1c5qgoeu5n5t12julpv9i513216"){
//     this.set('IsSuccessFile',true)
//   }else if(filename1==="o_1c5qgoieg10o1bnv2u71vag15uq18"){
//     this.set('IsSuccessFile2',true)
//   }
//     },

targetButton:function(){
  window.alert("uploaded")
  this.set('IsSuccess',true)
  //  this.transitionToRoute('home');
},

  }
  
})

