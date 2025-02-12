Meteor.subscribe("pickersAtWork");

Template.commTablet.helpers ({

    machineCommList: () => {
        const picker = Meteor.user().username;
        let k = pickersAtWork.findOne({_id: picker});
        if (typeof k === 'undefined') {
          //  location.reload();
            } else  {
            Session.set('inActiveState', k.inActive);
            Session.set('selectedMachine', k.machineNr);
            Session.set('selectedArea', k.pickerSupplyArea);
            if(k.multi === true) {
                FlowRouter.go('/multiMachines');
            }
        }
        let result = machineCommTable.find({commissionStatus: {$lt: 26}, active: true}).fetch();
         return _.sortBy(result, 'counter');
    },

    supplyAreaShow: () => {
        const commMachine = Session.get('selectedMachine');
        return machineCommTable.findOne({_id: commMachine});
    },

    selectedSupplyMachine: () => {
        const machineNr = Session.get('commMachine');
        if(machineNr) {
            let pickedMachine = machineCommTable.findOne({_id: machineNr}).machineId;
            Session.set('pickedMachine', pickedMachine);
            Session.set('supplyChosen', 0);
            return pickedMachine;
        }
    },

    supplyStart: () => {
        const supply = Session.get('selectedArea');
        if(supply) {
            Session.set('supplyChosen', 9);
        }
        return supply;
    },

    'selectedMachine': function(){
        const commMachine = this._id;
        const selectedMachine = Session.get('selectedMachine');
        if (selectedMachine === commMachine) {
            Session.set('commMachine', selectedMachine);
            return "selectedMachine";
        }
    },

    'selectedArea': function() {
        const selectedSupplyArea = this._id;
        const selectedArea = Session.get('selectedArea');
        if (selectedArea === selectedSupplyArea) {
            return "selectedArea";
        }
    }

});


Template.commTablet.events ({

    'click .pickedMachine': function(e) {
        e.preventDefault();
        const pickedMachineId = this._id;
       // Session.set('inActiveState', 5);
        Session.set('selectedMachine', pickedMachineId);
    },

    'click .supplyAreas': function(e) {
        e.preventDefault();
        const pickedSupplyArea = this._id;
        Session.set('selectedArea', pickedSupplyArea);
    },


    'click .commStart': function(e) {
        e.preventDefault();
        const userStart = Meteor.user().username;
        let status = 2;
        let pickedMachineId = Session.get('selectedMachine');
        let pickedSupplyAreaId = Session.get('selectedArea');
        Session.set('inActiveState', 1);
        Meteor.call('startPicking', pickedMachineId,
                    pickedSupplyAreaId, status, userStart,
                    );

    },

    'click .commFinished': function(e) {
        e.preventDefault();
        const userFinished = Meteor.user().username;
        let status = 1;
        let pickedMachineId = Session.get('selectedMachine');
        let pickedSupplyAreaId = Session.get('selectedArea');
        Session.set('inActiveState', 4);
        Session.set('selectedArea', '');
        Session.set('supplyChosen', 0);
        Meteor.call('finishedPicking', pickedMachineId, pickedSupplyAreaId,
                     status, userFinished, function (err, response) {
                        if (err) {
                       //     console.log(err)
                        } else {
                           // console.log('save finished', response)
                        }
            });
    },

    'click .cancelForm': function(e) {
        e.preventDefault();
    //    console.log(Session.get('inActiveState'))
        const userCanceled = Meteor.user().username;
        let status = 0;
        let pickedMachineId = Session.get('selectedMachine');
        let pickedSupplyAreaId = Session.get('selectedArea');
        Session.set('inActiveState', 4);
        Session.set('selectedArea', '');
        Session.set('supplyChosen', 0);
        Meteor.call('canceledPicking', pickedMachineId, pickedSupplyAreaId,
                     status, userCanceled);
    },

    'click .commPause': function(e) {
        e.preventDefault();
        const user = Meteor.user().username;
        let pickedMachineId = Session.get('selectedMachine');
        let pickedSupplyAreaId = Session.get('selectedArea');
        let pickingStatus = 3;
        Session.set('inActiveState', 2);
        Meteor.call('pausePickingStart', pickedMachineId, pickedSupplyAreaId,
                     pickingStatus, user);

    },

    'click .commResume': function(e) {
        e.preventDefault();
        const user = Meteor.user().username;
        let pickedMachineId = Session.get('selectedMachine');
        let pickedSupplyAreaId = Session.get('selectedArea');
        let pickingStatus = 2;
        Session.set('inActiveState',3);
        Meteor.call('pausePickingEnd', pickedMachineId, pickedSupplyAreaId,
                     pickingStatus, user);
    },

    'click .toggle-supply': (e) => {
        e.preventDefault();
        FlowRouter.go('/multiMachines');
    }

});


Handlebars.registerHelper('inActive_0', () => {
    let inActiveState = Session.get('inActiveState');
    if (typeof inActiveState === 'undefined') {
        inActiveState = 0;
    }
 //   console.log('inActive 0 ', inActiveState);
    if(inActiveState === 0) {
        return 'in-active-button'
    }
});

// Commission start inActiveSate = 1

Handlebars.registerHelper('inActive_1', () => {
    let inActiveState = Session.get('inActiveState');
    if (typeof inActiveState === 'undefined') {
        inActiveState = 0;
    }
 //   console.log('inActive 1 ', inActiveState);
    if(inActiveState === 1) {
        return 'in-active-button'
    }
});

// Push Pause button InActiveState = 2

Handlebars.registerHelper('inActive_2', () => {
    let inActiveState = Session.get('inActiveState');
    if (typeof inActiveState === 'undefined') {
        inActiveState = 0;
    }
 //   console.log('inActive 2 ', inActiveState);
    if(inActiveState === 2) {
        return 'in-active-button'
    }
});

// Back to work, Resume button inActiveState = 3

Handlebars.registerHelper('inActive_3', () => {
    let inActiveState = Session.get('inActiveState');
    if (typeof inActiveState === 'undefined') {
        inActiveState = 0;
    }
 //   console.log('inActive 3 ', inActiveState);
    if(inActiveState === 3) {
        return 'in-active-button'
    }
});

// Push finished button inActiveState = 4, now able to choose new supply or new Machine

Handlebars.registerHelper('inActive_4', () => {
    let inActiveState = Session.get('inActiveState');
    if (typeof inActiveState === 'undefined') {
        inActiveState = 0;
    }
   //  console.log('inActive 4 ', inActiveState);
    if(inActiveState === 4) {
        return 'in-active-button'
    }
});

// choose Supply Area inActiveState = 9

Handlebars.registerHelper('inActive_9', () => {
    let inActiveState = Session.get('supplyChosen');
    if (typeof inActiveState === 'undefined') {
        inActiveState = 0;
    }
 //   console.log('inActive 9 ', inActiveState);
    if(inActiveState !== 9) {
        return 'in-active-button'
    }
});