

const starCount = 50;

const screen_WIDTH = window.innerWidth - 1;
const screen_HEIGHT = window.innerHeight - 1;


export function createStars() {

    let container = document.querySelector('.main-star-container')
    container.textContent = ''




    for(let i = 0; i < starCount; i++) {
        let randomAnimation = Math.floor(Math.random() * 16) + 1
        let star = document.createElement('div');
        star.className = 'star'
    
        let x = Math.floor(Math.random() * screen_WIDTH) + 1;
        let y = Math.floor(Math.random() * screen_HEIGHT) + 1;
    
        let size = Math.floor(Math.random() * 10) + 1;
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x}px`
        star.style.top = `-${y}px`

        star.classList.add(`starmove${randomAnimation}`)
        container.appendChild(star)

    }



    

}