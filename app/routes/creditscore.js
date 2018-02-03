import Route from '@ember/routing/route';
export default Route.extend({
    isDisplayed:false,
    isDisplayedApproval:false,
    model() {
        var myroute = this
        //changes Requested For Creditscore
        return $.ajax({
            url: 'http://192.168.1.28:8082/getloandetails',
            type: 'GET',
            contentType: 'application/json',
            success: function(response) {
                var record = response.readAllRequest;
                console.log("record", record);
                var len = record.length
                console.log("len show>>>", len);
                for (let i = 0; i <= len - 1; i++) {
                    var length = record[i].Record.transactionlist.length
                    console.log(">>>>>length of transactlist", length)
                    var GetRecord = record[i].Record.transactionlist[length - 1].transactiondetails
                    console.log("record>>>please come>>>", GetRecord)
                    myroute.controllerFor('creditscore').set('GetRecord', GetRecord)


                    //finding particular record for which bank has requested
                    if (GetRecord.statusForCreditRequest === "Requested For Creditscore") {
                        var record = record[i]
                        var transactiondetails=record.Record.transactionlist[length - 1].transactiondetails
                        myroute.controllerFor('creditscore').set('transactiondetails', transactiondetails)
                        console.log("transactiondetails>?>?>?>", transactiondetails)
                        var statusForCreditRequest=transactiondetails.statusForCreditRequest;
                       
                        myroute.controllerFor('creditscore').set('statusForCreditRequest', statusForCreditRequest)
                        myroute.controllerFor('creditscore').set('isDisplayed', true)
                        console.log("completeRecord>?>?>?>", record)
                        myroute.controllerFor('creditscore').set('record', record)
                        console.log("statusForCreditRequest>?>?>?>", statusForCreditRequest)
                    }else if(GetRecord.statusForCreditRequest==="Creditscore Generated"){
                        // mycontroller.controllerFor('creditscore').set(statusForCreditRequest,'Creditscore Generated')
                        myroute.controllerFor('creditscore').set('isDisplayed', false)
                        var record = record[i]
                        var transactiondetails=record.Record.transactionlist[length - 1].transactiondetails
                        myroute.controllerFor('creditscore').set('transactiondetails', transactiondetails)
                        console.log("transactiondetails>?>?>?>", transactiondetails)
                        var ApproveCreditRequest=transactiondetails.statusForCreditRequest;
                        myroute.controllerFor('creditscore').set('ApproveCreditRequest', ApproveCreditRequest)
                        myroute.controllerFor('creditscore').set('isDisplayedApproval', true)
                        console.log("completeRecord>?>?>?>", record)
                        myroute.controllerFor('creditscore').set('record', record)    
                    }
                }
            }
        });
    }
})