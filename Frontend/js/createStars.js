

const starCount = 300;

const screen_WIDTH = window.innerWidth - 1;
const screen_HEIGHT = window.innerHeight - 1;


export function createStars() {

    let container = document.querySelector('.main-container')
    container.textContent = ''




    for(let i = 0; i < starCount; i++) {
        let star = document.createElement('div');
        star.className = 'star'
    
        let x = Math.floor(Math.random() * screen_WIDTH) + 1;
        let y = Math.floor(Math.random() * screen_HEIGHT) + 1;
    
        let size = Math.floor(Math.random() * 10) + 1;
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.right = `${x}px`
        star.style.bottom = `${y}px`
        container.appendChild(star)

    }



    

}