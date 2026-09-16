document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    const heroSection = document.querySelector('.hero');
    const heroHeitgh = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const rolagem = window.scrollY

        if (rolagem < heroHeitgh){
            acionaHeader()
        }else{
            removeHeader()
        }
    })
    
    for(let i= 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(button) {
            const btnTarget = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${btnTarget}]`);
            const btnTargetChange = document.querySelector(`[data-tab-button=${btnTarget}]`);
            hiddenTabs();
            hiddenButton();
            tab.classList.add('shows__content--is-active');
            btnTargetChange.classList.add('shows__menu__button--is-active');
        });
    }

    const questions = document.getElementsByClassName('faq__content__item__question');

    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', function(question){
            question.target.parentElement.classList.toggle('faq__content__item--is-open');
        });
    }
})

function acionaHeader(){
    const header = document.querySelector('.header')
    header.classList.add('header--is-hidden')
}

function removeHeader(){
    const header = document.querySelector('.header')
    header.classList.remove('header--is-hidden')
}


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
