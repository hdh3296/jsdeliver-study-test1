import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'han dong hoon green';
  greetUser(name);
  document.body.style.backgroundColor = 'green';
});
