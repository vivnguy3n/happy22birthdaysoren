document.addEventListener("DOMContentLoaded", () => {
const envelope = document.getElementById("envelope");
const hint = document.querySelector(".click-hint");
const message = document.getElementById("message");

let opened = false;
let i = 0;

const fullText = `Happy Birthday Søren!❤️

DOUBLE DIGITS 22. You fucking rockstar. The day's finally here.
Another full orbit around the sun and I'm so excited for you to live for a whole lifetime of those.
You're such a light to this world and it's truly an honor to be the person that gets to
share this life with you. I'm very proud of you and person you're becoming. I love the way you live
life and how much you enjoy it, with so much authenticity, excitement, intention, and spontaneity. I admire
you in a lot of ways. I hope your year is prosperous and to be full of new adventures and good memories.
I'm so lucky! Every day you remind me how grateful I am to be with you. And I hope you stick around for a while.
Thank you for being unapologetically you. LET'S GO CAMPING :))))))

LOVE VIV`;

function openEnvelope() {
if (opened) return;

opened = true;
envelope.classList.add("open");

if (hint) {
hint.classList.add("hidden");
}

setTimeout(typeText, 800);
}

function resetEnvelope() {
opened = false;
i = 0;
envelope.classList.remove("open");
message.textContent = "";

if (hint) {
hint.classList.remove("hidden");
}
}

function typeText() {
if (!opened) return;

if (i < fullText.length) {
message.textContent += fullText.charAt(i);
i++;
setTimeout(typeText, 30);
}
}

envelope.addEventListener("click", openEnvelope);
envelope.addEventListener("dblclick", resetEnvelope);

envelope.addEventListener("keydown", (event) => {
if (event.key === "Enter" || event.key === " ") {
event.preventDefault();
openEnvelope();
}
});
});