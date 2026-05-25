document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const storedTheme = localStorage.getItem('theme');

    const updateToggleText = () => {
        if (document.body.classList.contains('light-mode')) {
            themeToggle.innerHTML = "&#9680; Mörkt läge";
        } else {
            themeToggle.innerHTML = "&#9681; Ljust läge";
        }
    };

    if (themeToggle) {
        if (storedTheme === 'light') {
            document.body.classList.add('light-mode');
        }

        updateToggleText();

        themeToggle.addEventListener('click', () => {
            const isLight = document.body.classList.toggle('light-mode');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            updateToggleText();
        });

        console.log('Systemet är redo och lägesknappen är laddad!');
    } else {
        console.log("Error: Hittade inte knappen med id 'theme-toggle'!");
    }
});
