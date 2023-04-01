export const checkPasswordStrenght = (password) => {

  const passwordLength = password.length

  if (passwordLength === 0) {
    return 'empty';
  }
  if (passwordLength < 8) {
    return 'uncompleted';
  }

  const letters = /[a-zA-Z]/;
  const digits = /[0-9]/;
  const symbols = /[^a-zA-Z0-9]/;
  if (password.match(letters) && password.match(digits) && password.match(symbols)) {
    return 'strong';
  }
  if (password.match(letters) && password.match(digits) && password.match(symbols)) {
    return 'strong';
  }
  if ((password.match(letters) && password.match(symbols)) ||
    (password.match(digits) && password.match(symbols)) ||
    (password.match(letters) && password.match(digits))) {
    return 'medium';
  }
  return 'easy';
}