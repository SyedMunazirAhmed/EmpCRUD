import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const local = localStorage.getItem('userDetails');
  if (!local) {
    return false;
  } else {
    let user = JSON.parse(local);
    if (user.id != 'admin@gmail.com') {
      return false;
    }
  }
  return true;
};
