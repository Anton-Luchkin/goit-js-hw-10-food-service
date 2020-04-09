const refs = {
  switch: document.querySelector('input.js-switch-input'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

localStorage.getItem('Theme') !== null
  ? refs.body.classList.add(localStorage.getItem('Theme'))
  : refs.body.classList.add('light-theme');

refs.body.classList.contains('dark-theme')
  ? (refs.switch.checked = true)
  : (refs.switch.checked = false);

refs.switch.addEventListener('change', handleChangeTheme);

function handleChangeTheme() {
  if (refs.body.classList.contains('light-theme')) {
    refs.body.classList.add('dark-theme');
    refs.body.classList.remove('light-theme');
    localStorage.setItem('Theme', 'dark-theme');
  } else {
    refs.body.classList.add('light-theme');
    refs.body.classList.remove('dark-theme');
    localStorage.setItem('Theme', 'light-theme');
  }
}
