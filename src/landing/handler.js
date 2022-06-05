class Landing{
    constructor(){
        document.querySelector('.landing button').addEventListener('click', ()=>{
            this.clean()
        })
    }
    clean(){
        const landing = document.querySelector('.landing')
        landing.parentNode.removeChild(landing);
    }
}

export default Landing;