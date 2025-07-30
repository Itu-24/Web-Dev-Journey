let btn1 = document.getElementById('btn1');
let click = 1;

function red() {
    btn1.style.color = 'lightblue';
    btn1.style.backgroundColor = 'brown';
    click = 2;

}
function green() {
    btn1.style.color = 'violet';
    btn1.style.backgroundColor = 'yellow';
    click = 3

}
function blue() {

    btn1.style.color = 'tomato';
    btn1.style.backgroundColor = 'thistle';
    click = 4;
}

function sky() {

    btn1.style.color = 'slategrey';
    btn1.style.backgroundColor = 'springgreen';
    click = 1;

}



function changcolor() {

    switch (click) {
        case 1:
            red()

            break;
        case 2:
            green()

            break;
        case 3:
            blue()

            break;

        default:
            sky()
            break;
    }
}