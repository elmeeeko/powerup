angular.module('app-powerup', []);

angular.module('app-powerup').controller('mainCtrl', function ($scope, $sce) {
    $scope.Monday = {
        day: 'Monday',
        description: "<span>45-60 min. <session-hint hint='EM'></session-hint></span>",
    };
    $scope.Tuesday = {
        day: 'Tuesday',
        description: "<span>60-90 min. <session-hint hint='EM'></session-hint><br>with 3 x 8 min. <session-hint hint='SS'></session-hint><br>(5 min. RBI)</span>",
    };
    $scope.Wednesday = {
        day: 'Wednesday',
        description: ''
    };
    $scope.Thursday = {
        day: 'Thrsday',
        description: ''
    };
    $scope.Friday = {
        day: 'Friday',
        description: ''
    };
    $scope.Saturday = {
        day: 'Saturday',
        description: ''
    };
    $scope.Sunday = {
        day: 'Sunday',
        description: ''
    };
});

angular.module('app-powerup').directive('trainingDay', function ($compile) {
    return {
        templateUrl: "trainingDay.html",
        scope: {
            day: "="
        },
    };
});

angular.module('app-powerup').directive('sessionDescription', function ($compile) {
    return {
        scope: {
            description: "@"
        },
        link: function (scope, el, attrs) {
            el.replaceWith($compile(scope.description)(scope));
        },
    };
});

angular.module('app-powerup').directive('sessionHint', function () {
    return {
        scope: {
            hint: "@"
        },
        templateUrl: "sessionHint.html",
    };
});