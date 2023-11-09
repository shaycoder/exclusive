class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector('.site-header__menu-icon')
        this.menuContent = document.querySelector('.site-header__nav')
        this.menuHeader = document.querySelector('.site-header')
        this.menuElement = document.querySelectorAll('.menu-element')

        this.subMenuIcon = document.querySelector('.sub-header__menu-icon')
        this.subMenuContent = document.querySelector('.sub-header__nav')
        this.subMenuHeader = document.querySelector('.sub-header')

        if(this.menuIcon || this.menuContent || this.menuHeader) {
            this.events()
        }

        if(this.subMenuIcon || this.subMenuContent || this.subMenuHeader) {
            this.subEvents()
        }
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
    }

    subEvents() {
        this.subMenuIcon.addEventListener("click", () => this.toggleTheSubMenu())
    }

    toggleTheMenu() {
        this.menuContent.classList.toggle('site-header__nav--is-visible')
        this.menuHeader.classList.toggle('site-header--is-visible')
        this.menuIcon.classList.toggle('site-header__menu-icon--close-x')
    }

    toggleTheSubMenu() {
        this.subMenuContent.classList.toggle('sub-header__nav--is-visible')
        this.subMenuHeader.classList.toggle('sub-header--is-visible')
        this.subMenuIcon.classList.toggle('sub-header__menu-icon--close-x')
    }
    
}

export default MobileMenu;