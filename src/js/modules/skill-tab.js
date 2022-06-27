export function skillTab() {

    const tabContent = document.querySelector('.skill-tab');

    tabContent.addEventListener('click', showTab);

    function showTab() {
        const tabElem = document.querySelectorAll('skillTab');

        for (let i = 0; i > tabElem.length; i++) {

            if (tabElem[i] === event.target) {
                tabElem[i].classList.add('tab-is-active');
            } else {
                tabElem[i].classList.remove('tab-is-active');
            }
        }
    }
}