
export const fakeAuthService = {
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    fakeAuthService.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback: VoidFunction) {
    fakeAuthService.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};
