const text = `
> Initializing system...
> Student | Aspiring Cybersecurity Professional
> Python • Ethical Hacking • Security Research
> Building tools...
> Learning continuously...
> Access Granted.
`;

let index = 0;
const speed = 40;
const terminal = document.getElementById("terminal");

function typeEffect() {
  if (index < text.length) {
    terminal.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

window.onload = typeEffect;
