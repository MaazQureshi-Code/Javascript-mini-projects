const characters =
["A","B","C","D","E",
    "F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b"
    ,"c","d","e","f","g",
    "h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", 
    "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];




let result = ""
let result2 = ""
function generate_Random(){
    for(let i =0 ; i < 15;i++){
        let random1 = Math.floor(Math.random() * characters.length)
        let random2 = Math.floor(Math.random() * characters.length)
        result += characters[random1]
        result2 += characters[random2]
    }
}


document.querySelector(".btn-generate").addEventListener('click' , () =>{
    generatePasswords()
    animateStrengthMeter()
      // Add a subtle animation to the button
            this.classList.add('generating');
            setTimeout(() => {
                this.classList.remove('generating');
            }, 1000);
} )

    function generatePasswords() {
            const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const passwordLength = 16;
            let password1 = "";
            let password2 = "";
            
            for (let i = 0; i < passwordLength; i++) {
                const randomNumber1 = Math.floor(Math.random() * chars.length);
                const randomNumber2 = Math.floor(Math.random() * chars.length);
                password1 += chars.substring(randomNumber1, randomNumber1 + 1);
                password2 += chars.substring(randomNumber2, randomNumber2 + 1);
            }
            
            const part1 = document.querySelector('.part1');
            const part2 = document.querySelector('.part2');
            
            part1.textContent = password1;
            part2.textContent = password2;

            part1.classList.remove('generated-text');
            part2.classList.remove('generated-text');
             // Trigger reflow to restart animation
            void part1.offsetWidth;
            void part2.offsetWidth;
            part1.classList.add('generated-text');
            part2.classList.add('generated-text');

        }

          function animateStrengthMeter() {
            const strengthFill = document.querySelector('.strength-fill');
            strengthFill.style.width = '0%';

            setTimeout(() =>{
                strengthFill.style.width = '100%';

            },100)
        }