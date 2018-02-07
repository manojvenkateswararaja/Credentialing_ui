import Controller from '@ember/controller';

export default Controller.extend({
  showDashboard:true,
  showDialogApprove:false,
  isLegalRequested:false,
 
    actions:{
      LegalValidater:function(records,details){
            var modalvalue = this.get('showDialog')
            
                      if(modalvalue!=true){
                        this.set('showDialog',true)
                      }
                      else{
                        this.set('showDialog',false)
                      }
                var mycontroller=this;
                console.log("requestid>>>>>>>>",records.Key)
                console.log("records>>>>userdec",records)
                var data=records.Record
                console.log("data>>>>",data)
                var date=new Date().toLocaleDateString();
                this.set('date',date)
                var time=new Date().toTimeString();
                this.set('time',time)
                var Updateddata = { "id":records.Key,
                 "transactionstring":{
                  "loan":data.loan,
                  "amount":data.amount,
                  "propertyType":data.propertyType,
                  "income":data.income,
                  "location":data.location,
                  "year":data.year,
                  "size":data.size,
                  "income":data.income,
                  "fname":data.fname,
                  "lname":data.lname,
                  "estimated":data.estimated,
                  "age":data.age,
                  "phone":data.phone,
                  "email":data.email,
                  "address":data.address,
                  "country":data.country,
                  "occupation":data.occupation,
                  "genderType":data.genderType,
                  "nationalityType":data.nationalityType,
                  "Company":data.Company,
                  "joiningdate":data.joiningdate,
                  "salary":data.salary,
                  "address":data.address,
                  "bank":"applied",
                  "creditscore":data.creditscore,
                  "date":date,
                  "time":time,
                  "statusForCreditRequest":"Requested for Legalverifier"
                  
                }}
              console.log("creditscore------>",data);
                return $.ajax({
                url:'http://192.168.1.28:8082/updatetransaction',//update legal verifier data
                type: 'POST',
                contentType:'application/json',
                data:JSON.stringify(Updateddata),
                success: function(response) {
                console.log("service")
                mycontroller.set('showCredit',true)
                var creditscore=response
                console.log(creditscore)
               
           
                  }
                  })
            },
            closeDialog:function(){
              this.set('showDialog',false)
          },
          okay1:function(){
          
            this.set('showDialog',false)
            this.set('isLegalRequested',true)
            
          },
           
          
          
          LoanApprove:function(record,details){
              var modalvalue = this.get('showDialogApprove')
              
              console.log("modalvalue",modalvalue)
              
                        if(modalvalue!=true){
                          this.set('showDialogApprove',true)
                        }
                        else{
                          this.set('showDialogApprove',false)
              
                        }
              
            
            },
            closeDialog:function(){
              this.set('showDialogApprove',false)
          },
          okay2:function(){
            
            this.set('showDialogApprove',false)
            this.transitionToRoute('loanschedule')
            this.set('isLegalRequested',true)
          },
      
         
          LegalValidaterRejected:function(records,showrecords){
                    // rejected boss
                    var modalvalue = this.get('showDialogForReject')
                    
                              if(modalvalue!=true){
                                this.set('showDialogForReject',true)
                              }
                              else{
                                this.set('showDialogForReject',false)
                              }
                        var mycontroller=this;
                        console.log("requestid>>>>>>>>",records.Key)
                        console.log("records>>>>userdec",records)
                        var data=showrecords
                        console.log("data>>>>",data)
                        var date=new Date().toLocaleDateString();
                        var time=new Date().toTimeString();
                        var Updateddata = { "id":records.Key,
                         "transactionstring":{
                          "loan":data.loan,
                          "amount":data.amount,
                          "propertyType":data.propertyType,
                          "income":data.income,
                          "location":data.location,
                          "year":data.year,
                          "size":data.size,
                          "income":data.income,
                          "fname":data.fname,
                          "lname":data.lname,
                          "estimated":data.estimated,
                          "age":data.age,
                          "phone":data.phone,
                          "email":data.email,
                          "address":data.address,
                          "country":data.country,
                          "occupation":data.occupation,
                          "genderType":data.genderType,
                          "nationalityType":data.nationalityType,
                          "Company":data.Company,
                          "joiningdate":data.joiningdate,
                          "salary":data.salary,
                          "address":data.address,
                          "bank":"applied",
                          "creditscore":data.creditscore,
                          "date":date,
                          "time":time,
                          "statusForCreditRequest":"Loan Rejected"
                          
                        }}
                      console.log("final data with loan rejected------>",data);
                        return $.ajax({
                        url:'http://192.168.1.28:8082/updatetransaction',//update legal verifier data
                        type: 'POST',
                        contentType:'application/json',
                        data:JSON.stringify(Updateddata),
                        success: function(response) {
                        console.log("service")
                        // mycontroller.set('showCredit',true)
                        var reject=response
                        console.log("yup rejected>>>",reject)
                       
                   
                          }
                          })
            
                      },
                      closeDialog:function(){
                        this.set('showDialogForReject',false)
                    },
                    okay:function(){
                      this.set('showDialogForReject',true)
                      this.transitionToRoute('bankdashboard')
                      this.set('showDialogForReject',false)
                    },
                   
                 
                
                
                
                
    }
    
});


