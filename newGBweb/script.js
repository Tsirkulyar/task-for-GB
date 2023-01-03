const panel = document.querySelector('.panel');
const panel_none = document.querySelector('.panel_none');

panel.addEventListener('click', () => {
    panel_none.classList.toggle('.panel_none');
});