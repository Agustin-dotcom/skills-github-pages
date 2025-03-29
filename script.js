const estructurasBtn = document.getElementById('estructurasBtn');
const submenus = document.getElementById('submenus');

estructurasBtn.addEventListener('click', () => {
    if (submenus.style.display === 'block') {
        submenus.style.display = 'none';
    } else {
        submenus.style.display = 'block';
    }
});
