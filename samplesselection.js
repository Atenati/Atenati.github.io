let img = document.getElementById('image');
let anchor = document.getElementById('hreference');

function PythonBTNClick() {
    document.getElementById('PythonBTN').style.backgroundColor = 'gray';
    img.src = 'Atenati.github.io/images/python.png';
    anchor.target = '_blank';
    anchor.href = 'Atenati.github.io/images/python.PNG';
}

function PythonBTNRelease() {
    document.getElementById('PythonBTN').style.backgroundColor = 'black';
}

function JavaBTNClick() {
    document.getElementById('JavaBTN').style.backgroundColor = 'gray';
}

function JavaBTNRelease() {
    document.getElementById('JavaBTN').style.backgroundColor = 'black';
    img.src = 'Atenati.github.io/images/java.PNG';
    anchor.target = '_blank';
    anchor.href = 'Atenati.github.io/images/java.PNG';
}

function NetworkingBTNClick() {
    document.getElementById('NetworkingBTN').style.backgroundColor = 'gray';
    img.src = 'Atenati.github.io/images/Networking-Image.JPG';
    anchor.target = '_blank';
    anchor.href = 'Atenati.github.io/images/Networking-Image.JPG';
}

function NetworkingBTNRelease() {
    document.getElementById('NetworkingBTN').style.backgroundColor = 'black';
}

function DatabaseBTNClick() {
    document.getElementById('DatabaseBTN').style.backgroundColor = 'gray';
    img.src = 'Atenati.github.io/images/database.PNG';
    anchor.target = '_blank';
    anchor.href = 'Atenati.github.io/images/database.PNG';
}

function DatabaseBTNRelease() {
    document.getElementById('DatabaseBTN').style.backgroundColor = 'black';
}

function WebsiteBTNClick() {
    document.getElementById('WebsiteBTN').style.backgroundColor = 'gray';
    img.src = 'Atenati.github.io/images/Website-Image.JPG';
    anchor.href = 'Atenati.github.io/images/Website-Image.JPG';
    anchor.target = '_blank'

}

function WebsiteBTNRelease() {
    document.getElementById('WebsiteBTN').style.backgroundColor = 'black';
}
