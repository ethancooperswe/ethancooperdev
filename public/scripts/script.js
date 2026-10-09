
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

if (darkModeMediaQuery.matches) {
    document.documentElement.classList.add('dark-mode');
}

darkModeMediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
        document.documentElement.classList.add('dark-mode');
    } 
    else {
        document.documentElement.classList.remove('dark-mode');
    }
});

