import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'han dong hoon7';
  greetUser(name);
  document.body.style.backgroundColor = 'green';
});
