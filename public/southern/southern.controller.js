angular.module('ngApp').controller('SouthernCtrl', function($scope, toastr) {
  $scope.validEmails = [];
  $scope.enteredEmail = null;

  $scope.validEmails = [{
    label: 'View Valid Email(s)'
  }];
  $scope.selectedEmail = $scope.validEmails[0];

  $scope.enterEmail = (email) =>{
    $scope.validEmails.push({
      label: email
    });

    $scope.enteredEmail = null;
    let emailCount = $scope.validEmails.length;
    $scope.selectedEmail = $scope.validEmails[emailCount - 1];
    toastr.success('Added: ' + $scope.selectedEmail.label, 'SUCCESS')
  };

});
