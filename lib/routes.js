FlowRouter.route('/login', {
   name: 'login',
   action() {
       BlazeLayout.render('login')
   }
});

FlowRouter.route('/logout', {
    name: 'logout',
    action() {
        BlazeLayout.render('login')
    }
});

// --------------  html file 01_pickingOverview.html  -------------------------

FlowRouter.route('/overview', {
    name: 'overview',
    action() {
        BlazeLayout.render('overview')
    }
});

//  ---------------                                     ------------------------------

FlowRouter.route('/adminLayout', {
    name: 'adminLayout',
    action() {
        BlazeLayout.render('adminLayout')
    }
});

FlowRouter.route('/', {
    name: '/',
    action() {
        BlazeLayout.render('overview')
    }
});

FlowRouter.route('/overViewUser', {
    name: 'overViewUser',
    action() {
        BlazeLayout.render('overViewUser')
    }
});

FlowRouter.route('/toDoList', {
    name: 'toDoList',
    action() {
        BlazeLayout.render('toDoList')
    }
});

FlowRouter.route('/admin', {
    name: 'admin',
    action() {
        BlazeLayout.render('admin')
    }
});

FlowRouter.route('/adminNewUser', {
    name: 'adminNewUser',
    action() {
        BlazeLayout.render('adminNewUser')
    }
});

FlowRouter.route('/adminViewUser', {
    name: 'adminViewUser',
    action() {
        BlazeLayout.render('adminViewUser')
    }
});

FlowRouter.route('/commission', {
    name: 'commission',
    action() {
       // Session.keys = {};
        BlazeLayout.render('commission')
    }
});

FlowRouter.route('/commissionStatistics', {
    name: 'commissionStatistics',
    action() {
        BlazeLayout.render('commissionStatistics')
    }
});

FlowRouter.route('/commissionAnalysis.html', {
    name: 'commissionAnalysis',
    action() {
        BlazeLayout.render('commissionAnalysis')
    }
});

FlowRouter.route('/multiMachines', {
    name: 'multiMachines',
    action() {
        BlazeLayout.render('multiMachines')
    }
});


//                     ********************************  Assembly Line  **********************

FlowRouter.route('/lineAdministration', {
    name: 'lineAdministration',
    action() {
        BlazeLayout.render('lineAdministration')
    }
});

FlowRouter.route('/assemblyLineOverView', {
    name: 'assemblyLineOverView',
    action() {
        BlazeLayout.render('assemblyLineOverView')
    }
});

FlowRouter.route('/team_1', {
    name: 'team_1',
    action() {
        BlazeLayout.render('team_1')
    }
});

FlowRouter.route('/team_2', {
    name: 'team_1',
    action() {
        BlazeLayout.render('team_2')
    }
});

FlowRouter.route('/team_2', {
    name: 'team_2',
    action() {
        BlazeLayout.render('team_2')
    }
});

FlowRouter.route('/team_3', {
    name: 'team_3',
    action() {
        BlazeLayout.render('team_3')
    }
});

FlowRouter.route('/team_4', {
    name: 'team_4',
    action() {
        BlazeLayout.render('team_4')
    }
});

FlowRouter.route('/test_bay', {
    name: 'test_bay',
    action() {
        BlazeLayout.render('test_bay')
    }
});

FlowRouter.route('/team_5', {
    name: 'team_5',
    action() {
        BlazeLayout.render('team_5')
    }
});

FlowRouter.route('/assemblyLine', {
    name: 'assemblyLine',
    action() {
        BlazeLayout.render('assemblyLine')
    }
});

FlowRouter.route('/timeUpdater', {
    name: 'timeUpdater',
    action() {
        BlazeLayout.render('timeUpdater')
    }
});

FlowRouter.route('/lop', {
    name: 'lop',
    action() {
        BlazeLayout.render('lop')
    }
});









