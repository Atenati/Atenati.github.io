let img = document.getElementById('image');
let anchor = document.getElementById('hreference');

function PythonBTNClick() {
    document.getElementById('PythonBTN').style.backgroundColor = 'gray';
    img.src = 'images/python.PNG';
    anchor.target = '_blank';
    anchor.href = 'images/python.PNG';
}

function PythonBTNRelease() {
    document.getElementById('PythonBTN').style.backgroundColor = 'black';
}

function JavaBTNClick() {
    document.getElementById('JavaBTN').style.backgroundColor = 'gray';
}

function JavaBTNRelease() {
    document.getElementById('JavaBTN').style.backgroundColor = 'black';
    img.src = 'images/java.PNG';
    anchor.target = '_blank';
    anchor.href = 'images/java.PNG';
}

function NetworkingBTNClick() {
    document.getElementById('NetworkingBTN').style.backgroundColor = 'gray';
    img.src = 'images/Networking-Image.JPG';
    anchor.target = '_blank';
    anchor.href = 'images/Networking-Image.JPG';
}

function NetworkingBTNRelease() {
    document.getElementById('NetworkingBTN').style.backgroundColor = 'black';
}

function DatabaseBTNClick() {
    document.getElementById('DatabaseBTN').style.backgroundColor = 'gray';
    img.src = 'images/database.PNG';
    anchor.target = '_blank';
    anchor.href = 'images/database.PNG';
}

function DatabaseBTNRelease() {
    document.getElementById('DatabaseBTN').style.backgroundColor = 'black';
}

function WebsiteBTNClick() {
    document.getElementById('WebsiteBTN').style.backgroundColor = 'gray';
    img.src = 'images/Website-Image.JPG';
    anchor.href = 'images/Website-Image.JPG';
    anchor.target = '_blank'

}

function WebsiteBTNRelease() {
    document.getElementById('WebsiteBTN').style.backgroundColor = 'black';
}
