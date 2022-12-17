import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'han dong hoon4';
  greetUser(name);
  document.body.style.backgroundColor = 'blue';
});
