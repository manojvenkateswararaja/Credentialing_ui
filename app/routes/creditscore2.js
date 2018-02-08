import Route from '@ember/routing/route';
export default Route.extend({
    IsStatusForCreditRequest: false,
    IsStatusForGenerated: false,
    IsDefaultStatus: true,
    model() {

        var myroute = this
        return $.ajax({
            url: 'http://localhost:8082/getloandetails',
            type: 'GET',
            contentType: 'application/json',
            success: function(response) {
                var showrecords = response.message;
                myroute.controllerFor('creditscore2').set('showrecords', showrecords)
                var len = showrecords.length
                console.log("len show>>>", len);
                for (let i = 0; i <= len - 1; i++) {
                    var statusForCreditRequest = showrecords[i].Record.statusForCreditRequest
                    console.log("statusForCreditRequest>>>>>>>", statusForCreditRequest)
                    if (statusForCreditRequest === "Request sent successfully") {
                        // myroute.controllerFor('bankdashboard').set('isStatus',true)
                        myroute.controllerFor('creditscore2').set('IsStatusForCreditRequest', false)
                        var status = "No Request made"
                        myroute.controllerFor('creditscore2').set('status', status)
                        myroute.controllerFor('creditscore2').set('IsDefaultStatus', true)
                        console.log(statusForCreditRequest)
                    } else if (statusForCreditRequest === "Requested For Creditscore") {
                        var details = showrecords[i]
                        myroute.controllerFor('creditscore2').set('IsDefaultStatus', false)
                        //   myroute.controllerFor('creditscore2').set('IsStatusForCreditRequest',false)
                        myroute.controllerFor('creditscore2').set('IsStatusForCreditRequest', true)
                        myroute.controllerFor('creditscore2').set('details', details)
                        console.log("details.....loop1...", details)
                        myroute.controllerFor('creditscore2').set('statusForCreditRequest', statusForCreditRequest)

                    } else if (statusForCreditRequest === "Creditscore Generated") {
                        console.log("working fine")
                        var details = showrecords[i]
                        myroute.controllerFor('creditscore2').set('details', details)
                        console.log("details llopp2........", details)
                        myroute.controllerFor('creditscore2').set('IsStatusForCreditRequest', true)
                        myroute.controllerFor('creditscore2').set('statusForCreditRequest', statusForCreditRequest)
                    } else {

                    }

                }

            }

        });

    },
    timestamp: function() {
        this.transitionToRoute('timestamp')
    }

})