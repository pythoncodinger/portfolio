/* =================================================================
  Portfolio JavaScript for Mohammed Sadath Ali
================================================================= */

document.addEventListener('DOMContentLoaded', function() {

    // --- Element Selections ---
    const html = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    const toTopButton = document.getElementById('to-top-button');
    const header = document.getElementById('header');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

    // --- Icon SVGs ---
    const sunIconSVG = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`;
    const moonIconSVG = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;
    const hamburgerIconSVG = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>`;
    const closeIconSVG = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`;
    const toTopIconSVG = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>`;

    // --- 1. THEME TOGGLE ---
    function updateTheme(isDark) {
        html.classList.toggle('dark', isDark);
        themeToggle.innerHTML = isDark ? sunIconSVG : moonIconSVG;
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    const isDarkMode = localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    updateTheme(isDarkMode);
    
    themeToggle.addEventListener('click', () => {
        updateTheme(!html.classList.contains('dark'));
    });

    // --- 2. MOBILE MENU ---
    function toggleMenu(show) {
        mobileMenu.classList.toggle('hidden', !show);
        html.classList.toggle('overflow-hidden', show);
        mobileMenuButton.innerHTML = show ? closeIconSVG : hamburgerIconSVG;
    }

    mobileMenuButton.innerHTML = hamburgerIconSVG; 
    mobileMenuButton.addEventListener('click', (e) => {
        alert('Button clicked!');
        e.stopPropagation();
        toggleMenu(mobileMenu.classList.contains('hidden'));
    });

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    // --- 3. SCROLL EFFECTS ---
    toTopButton.innerHTML = toTopIconSVG;
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY > 10;
        const showToTop = window.scrollY > 300;
        header.classList.toggle('scrolled', scrolled);
        toTopButton.classList.toggle('hidden', !showToTop);
        toTopButton.classList.toggle('flex', showToTop);
    });

    toTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // --- 4. DYNAMIC YEAR ---
    document.getElementById('year').textContent = new Date().getFullYear();
});
