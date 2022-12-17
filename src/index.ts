import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'han dong hoon grey';
  greetUser(name);
  document.body.style.backgroundColor = 'grey';
});
