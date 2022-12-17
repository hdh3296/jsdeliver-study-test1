import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'donghoon han';
  greetUser(name);
  document.body.style.backgroundColor = 'red';
});
