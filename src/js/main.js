(function () {
    const StickyNav = {
        init(){
            document.documentElement.className = "js-enabled";
            window.addEventListener("scroll", this.stickNav);
        },
        stickNav(){
            this.nav = document.querySelector("#main").offsetTop;
            console.log(this.nav);
            console.log(window.scrollY);
            if(window.scrollY === 0){
                document.body.classList.remove('fixed-nav');
            }else if (window.scrollY >= this.nav){
                document.body.classList.add('fixed-nav');
            }
        }
    }
    StickyNav.init();
})();