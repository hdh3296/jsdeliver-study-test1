import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'han dong hoon8';
  greetUser(name);
  document.body.style.backgroundColor = 'yellow';
});
