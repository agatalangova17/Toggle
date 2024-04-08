

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const navigation = document.querySelector('.navigation');
    const toggleElement = document.getElementById('myElement'); // New element for toggling class

    menuIcon.addEventListener('click', () => {
        navigation.classList.add('shownav');
        closeIcon.classList.remove('hidden');
        menuIcon.classList.add('hidden');
    });

    closeIcon.addEventListener('click', () => {
        navigation.classList.remove('shownav');
        closeIcon.classList.add('hidden');
        menuIcon.classList.remove('hidden');
    });

    // New event listener for toggling class
    toggleElement.addEventListener('click', () => {
        toggleElement.classList.toggle('toggleClass');
    });
});
