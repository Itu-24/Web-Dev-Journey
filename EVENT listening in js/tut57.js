let mypara = document.getElementById('para');
mypara.style.display = 'none';

mypara.addEventListener('mouseover', function run() {
    alert('Mouse is Inside');
    console.log('Mouse is Inside');
    let a = prompt('Name', 'Akash');
    console.log(a);
})
mypara.addEventListener('mouseout', function run2() {
    alert("Mouse IS now Outside");
    let a = confirm("Are u sure");
    if (a) {
        console.log("Mouse IS now Outside");
    }
})

function togglehide() {

    let btn = document.getElementById('btn');
    // let para = document.getElementById('para-p');

    // not giving error even after not defining para cuz here id name is para nd modern browser can recognise it without difining it in js if we are trying to access it by id name directly 

    if (para.style.display != 'none') {
        para.style.display = 'none';
        btn.innerHTML = "SHOW";
    } else {
        btn.innerHTML = 'HIDE';
        para.style.display = 'block';

        if (para.style.color != 'black') {
            para.style.color = 'black';
            para.style.fontWeight = 'normal'

        } else {
            para.style.color = 'red';
            para.style.fontWeight = 'bold';

        }

    }

}