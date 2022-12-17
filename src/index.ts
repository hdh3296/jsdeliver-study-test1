import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'han dong hoon blue';
  greetUser(name);
  document.body.style.backgroundColor = 'blue';
});
