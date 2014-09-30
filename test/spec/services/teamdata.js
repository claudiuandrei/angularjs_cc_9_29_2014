'use strict';

describe('Service: teamData', function () {

  // load the service's module
  beforeEach(module('ccApp'));

  // instantiate service
  var teamData;
  beforeEach(inject(function (_teamData_) {
    teamData = _teamData_;
  }));

  it('should do something', function () {
    expect(!!teamData).toBe(true);
  });

});
