const mobileMenuButton = document.querySelector('.mobile-button'),
      submenu = document.querySelector('.second-menu-mobile');

let isOpen = 0;

mobileMenuButton.addEventListener('click', () => {
    if (!isOpen) {
        submenu.style.display = 'block';
        isOpen = 1;
    } else {
        submenu.style.display = 'none';
        isOpen = 0;
    }
});

const chekpoint = 600;
let navBackground = 'transparent';
let opacity = 1;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if(currentScroll <= chekpoint) {
        navBackground = 'transparent';
        opacity = 1 - currentScroll / chekpoint;  
    } else {
        navBackground = '#000';
        opacity = 0;
    }

    document.querySelector('.header-nav').style.background = navBackground;
});


// Tabs
const tabsTitles = document.querySelectorAll('.tabs-titles>li');
const tabs = document.querySelectorAll('.tabs>div');
let activeTab = 0;

if(tabsTitles.length > 0) {
    const resetTabs = () => {
        tabsTitles.forEach((tab, index) => {
            tabs[index].style.display = 'none';
            tab.removeAttribute('class');
        });
    };

    resetTabs();
    tabs[activeTab].style.display = 'block';
    tabsTitles[activeTab].className = 'active';


    tabsTitles.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            activeTab = index;
            resetTabs();
            tabs[index].style.display = 'block';
            tab.className = 'active';
        });
    });
}