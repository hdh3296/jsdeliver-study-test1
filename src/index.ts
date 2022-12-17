import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'han dong hoon2';
  greetUser(name);
  document.body.style.backgroundColor = 'black';
});
