let img = document.getElementById('image');
let anchor = document.getElementById('hreference');

function PythonBTNClick() {
    document.getElementById('PythonBTN').style.backgroundColor = 'gray';
    img.src = 'images/python.png';
    anchor.target = '_blank';
    anchor.href = 'images/python.png';
}

function PythonBTNRelease() {
    document.getElementById('PythonBTN').style.backgroundColor = 'black';
}

function JavaBTNClick() {
    document.getElementById('JavaBTN').style.backgroundColor = 'gray';
}

function JavaBTNRelease() {
    document.getElementById('JavaBTN').style.backgroundColor = 'black';
    img.src = 'images/java.png';
    anchor.target = '_blank';
    anchor.href = 'images/java.png';
}

function NetworkingBTNClick() {
    document.getElementById('NetworkingBTN').style.backgroundColor = 'gray';
    img.src = 'images/Networking-Image.jpg';
    anchor.target = '_blank';
    anchor.href = 'images/Networking-Image.jpg';
}

function NetworkingBTNRelease() {
    document.getElementById('NetworkingBTN').style.backgroundColor = 'black';
}

function DatabaseBTNClick() {
    document.getElementById('DatabaseBTN').style.backgroundColor = 'gray';
    img.src = 'images/database.png';
    anchor.target = '_blank';
    anchor.href = 'images/database.png';
}

function DatabaseBTNRelease() {
    document.getElementById('DatabaseBTN').style.backgroundColor = 'black';
}

function WebsiteBTNClick() {
    document.getElementById('WebsiteBTN').style.backgroundColor = 'gray';
    img.src = 'images/Website-Image.jpg';
    anchor.href = 'images/Website-Image.jpg';
    anchor.target = '_blank'

}

function WebsiteBTNRelease() {
    document.getElementById('WebsiteBTN').style.backgroundColor = 'black';
}