//  A Counter that increases by 1 each second
document.addEventListener('DOMContentLoaded', time);
let counter = document.getElementById("counter");
function time() {
    for (let i = 0; i < 10; i++)
        break;
    setInterval('time(), 1000');
}
;
