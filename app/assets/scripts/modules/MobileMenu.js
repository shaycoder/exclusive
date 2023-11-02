class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector('.site-header__menu-icon')
        this.menuContent = document.querySelector('.site-header__nav')
        this.menuHeader = document.querySelector('.site-header')
        this.menuElement = document.querySelectorAll('.menu-element')
        this.events()
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
    }

    toggleTheMenu() {
        this.menuContent.classList.toggle('site-header__nav--is-visible')
        this.menuHeader.classList.toggle('site-header--is-visible')
        this.menuIcon.classList.toggle('site-header__menu-icon--close-x')
    }
    
}

export default MobileMenu;