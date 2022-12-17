import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'han dong hoon';
  greetUser(name);
  document.body.style.backgroundColor = 'blue';
});
