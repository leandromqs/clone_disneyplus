document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for(let i= 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(button) {
            const btnTarget = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${btnTarget}]`)
            const btnTargetChange = document.querySelector(`[data-tab-button=${btnTarget}]`)
            hiddenTabs()
            hiddenButton()
            tab.classList.add('shows__content--is-active')
            btnTargetChange.classList.add('shows__menu__button--is-active')
        })
    }
})

function hiddenTabs() {
    const tabs = document.querySelectorAll('[data-tab-id]')
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('shows__content--is-active');
    }   
}

function hiddenButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__menu__button--is-active');
    }   
}