describe('Login Controller', function () {

  var loginCtrl;
  var LoginService;

  beforeEach(module("divesiteApp"))

  beforeEach(inject(function ($controller, _LoginService_) {
    loginCtrl = $controller("LoginCtrl");
    LoginService = _LoginService_;

    spyOn(LoginService, 'login');

    LoginService.login("stuart", "password112");
  }))

  it("should have message Hello Test", function () {
    expect(loginCtrl.message).toBe("Hello Test")
  })

  it("LoginService login should have been called", function () {
    expect(LoginService.login).toHaveBeenCalled();
    expect(LoginService.login).toHaveBeenCalledWith("stuart", "password112");
})

})
