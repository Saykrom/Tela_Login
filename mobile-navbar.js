class MobileNavbar{


    constructor (mobileMenu, navList, navLinks){


        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList= document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active";


        this.handleClick = this.handleClick.bind(this);


    }

     


    animateLinks(){


        this.navLinks.forEach((link)=> {
            link.style.animation
            ?(link.style.animation = "")
            : (link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s');
        });
    }
    handleClick(){
        console.log (this);
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();




    }


    addClickEvent(){


        this.mobileMenu.addClickEventListener("click", this.handleClick);
    }


    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}
const MobileNavbar = new MobileNavbar (
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
    ".nav-list lu"
);
MobileNavbar.init();