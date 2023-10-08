const btnReaccion = document.getElementById('reaccion');

const contenedorListaMusic = document.getElementById('lista-music');
const controles = document.getElementById('controles');

const menuMusic = document.getElementById('menuMusic');
const titlePlaylist = document.getElementById('titlePlaylist');
const playDescription = document.getElementById('playDescription');
const imgAlbum = document.getElementById('imgAlbum');
const album = document.getElementById('album');

const btnFiles = document.getElementById('files');

// Eventos
btnReaccion.addEventListener('click', likear);
menuMusic.addEventListener('click', cargarInfo);
contenedorListaMusic.addEventListener('click', reproducirMusica);
controles.addEventListener('click', controlar)
btnFiles.addEventListener('change', cargarArchivos)
// Funciones
let estado = 0;

function likear() {
    if (estado === 0) {
        btnReaccion.classList.add('reaccion-activa');
        estado = 1;
    } else if (estado === 1) {
        btnReaccion.classList.remove('reaccion-activa');
        estado = 0;
    }
}

function cargarInfo(e) {
    let jsonurl = '';
    let titlePlay = '';
    let descriptionPlay = '';
    let srcImg = '';

    if (e.target.classList.contains('Santy-P')) {
        jsonurl = 'assets/musicJSON/santy-p.json';
        titlePlay = 'Lo mejor de Santy P';
        descriptionPlay = 'Top 10 mejores canciones de Santy P';
        srcImg = 'assets/img/santy-p.webp';
        album.style.background = "linear-gradient(to right, rgba(2, 2, 2, 0.726) 15%, rgba(8, 8, 8, 0.829)), url(assets/img/santy-p.webp)";
    } else if (e.target.classList.contains('Rsel')) {
        jsonurl = 'assets/musicJSON/Rsel.json';
        titlePlay = 'Lo mejor de Rsel';
        descriptionPlay = 'Top 10 mejores canciones de Rsel';
        srcImg = 'assets/img/rsel.webp';
        album.style.background = "linear-gradient(to right, rgba(2, 2, 2, 0.726) 15%, rgba(8, 8, 8, 0.829)), url(assets/img/rselbg.webp)";
    } else if (e.target.classList.contains('Siddhartha')) {
        jsonurl = 'assets/musicJSON/siddharta.json';
        titlePlay = 'Lo mejor de Siddhartha';
        descriptionPlay = 'Top 10 mejores canciones de Siddhartha';
        srcImg = 'assets/img/Siddhartha1.webp';
        album.style.background = "linear-gradient(to right, rgba(2, 2, 2, 0.726) 15%, rgba(8, 8, 8, 0.829)), url(assets/img/Siddharthabg.webp) no-repeat center fixed";
    } else if (e.target.classList.contains('3AM')) {
        jsonurl = 'assets/musicJSON/3am.json';
        titlePlay = 'Lo mejor de 3AM';
        descriptionPlay = 'Top 10 mejores canciones de 3AM';
        srcImg = 'assets/img/3am.webp';
        album.style.background = "linear-gradient(to right, rgba(2, 2, 2, 0.726) 15%, rgba(8, 8, 8, 0.829)), url(assets/img/3ambg.webp)";
    } else if (e.target.classList.contains('Sergi')) {
        jsonurl = 'assets/musicJSON/sergi.json';
        titlePlay = 'Lo mejor de Sergi';
        descriptionPlay = 'Top 10 mejores canciones de Sergi';
        srcImg = 'assets/img/sergi.webp';
        album.style.background = "linear-gradient(to right, rgba(2, 2, 2, 0.726) 15%, rgba(8, 8, 8, 0.829)), url(assets/img/sergibg.webp)";
    } else if (e.target.classList.contains('Kid-Flex')) {
        jsonurl = 'assets/musicJSON/kid-flex.json';
        titlePlay = 'Lo mejor de Kid Flex';
        descriptionPlay = 'Top 10 mejores canciones de Kid Flex';
        srcImg = 'assets/img/kid-flex.webp';
        album.style.background = "linear-gradient(to right, rgba(2, 2, 2, 0.726) 15%, rgba(8, 8, 8, 0.829)), url(assets/img/kid-flexbg.webp)";
    } else if (e.target.classList.contains('Paulo-Londra')) {
        jsonurl = 'assets/musicJSON/paulo-londra.json';
        titlePlay = 'Lo mejor de Paulo Londra';
        descriptionPlay = 'Top 10 mejores canciones de Paulo Londra';
        srcImg = 'assets/img/paulo-londra.webp';
        album.style.background = "linear-gradient(to right, rgba(2, 2, 2, 0.726) 15%, rgba(8, 8, 8, 0.829)), url(assets/img/paulo-londrabg.webp)";
    } else if (e.target.classList.contains('Oscu')) {
        jsonurl = 'assets/musicJSON/oscu.json';
        titlePlay = 'Lo mejor de Oscu';
        descriptionPlay = 'Top 10 mejores canciones de Oscu';
        srcImg = 'assets/img/oscu.webp';
        album.style.background = "linear-gradient(to right, rgba(2, 2, 2, 0.726) 15%, rgba(8, 8, 8, 0.829)), url(assets/img/oscubg.webp)";
    } else if (e.target.classList.contains('Alan-Walker')) {
        jsonurl = 'assets/musicJSON/alan-walker.json';
        titlePlay = 'Lo mejor de Alan Walker';
        descriptionPlay = 'Top 10 mejores canciones de Alan Walker';
        srcImg = 'assets/img/alan-walker.webp';
        album.style.background = "linear-gradient(to right, rgba(2, 2, 2, 0.726) 15%, rgba(8, 8, 8, 0.829)), url(assets/img/alan-walkerbg.webp) no-repeat center fixed";
    } else if (e.target.classList.contains('Alhan/Green-A')) {
        jsonurl = 'assets/musicJSON/alhan.json';
        titlePlay = 'Lo mejor de Alhan / Green A';
        descriptionPlay = 'Top 10 mejores canciones de Alhan / Green A';
        srcImg = 'assets/img/alhan.webp';
        album.style.background = "linear-gradient(to right, rgba(2, 2, 2, 0.726) 15%, rgba(8, 8, 8, 0.829)), url(assets/img/alhanbg.webp)";
    }
    titlePlaylist.innerHTML = titlePlay;
    playDescription.innerHTML = descriptionPlay;
    imgAlbum.src = srcImg;
    cargarMusica(jsonurl);
}

function cargarMusica(url) {
    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let html = '';
            data.forEach(music => {
                html += `
                <li class="music">
                    <input type="text" value="${music.url}" style="display: none;">
                    <a href="#" id="${music.id}" class="btn play-music"><i class="far fa-play-circle"></i></a>
                    <h3>${music.nombre}</h3> 
                    <h3 class="name" id="name">${music.artista}</h3> 
                    <h3 class="time">${music.duracion}</h3>
                </li>
                `
                contenedorListaMusic.innerHTML = html;
            });
        })
}

function reproducirMusica(e) {
    if (e.target.parentElement.classList.contains('play-music')) {
        const elemetosActivos = document.querySelectorAll('.play-music');
        for (const elemento of elemetosActivos) {
            elemento.classList.remove('reaccion-activa-reproducida');
        }
        let urlM = e.target.parentElement.previousElementSibling.value;
        controles.innerHTML = `<a href="#" class="btn control atras"><i class="fas fa-backward"></i></a>
        <audio src="${urlM}" style="width: 50vw;" controls autoplay><input type="text" value="${urlM}" style="display: none;"></audio>
        <a href="#" class="btn control siguiente"><i class="fas fa-forward"></i></a>`;

        e.target.parentElement.classList.add('reaccion-activa-reproducida');

        siguienteAutomatico();
    }
}

function controlar(e) {
    let audio = e.target.parentElement.parentElement.children[1].children[0];
    let audioUrl = audio.value;
    let musicArray = Array.from(contenedorListaMusic.children);

    if (e.target.parentElement.classList.contains('siguiente')) {
        musicArray.forEach(limusic => {
            if (limusic.children[0].value === audioUrl) {
                let siguienteMusica = limusic.nextElementSibling.children[0].value;
                let elementoParaReproducido = limusic.nextElementSibling.children[1];
                siguienteAtras(siguienteMusica, elementoParaReproducido)
            }
        });
    }
    if (e.target.parentElement.classList.contains('atras')) {
        musicArray.forEach(limusic => {
            if (limusic.children[0].value === audioUrl) {
                let musicaAtras = limusic.previousElementSibling.children[0].value;

                let elementoParaReproducido = limusic.previousElementSibling.children[1];
                siguienteAtras(musicaAtras, elementoParaReproducido)
            }
        });
    }
}

function siguienteAtras(musica, reproducida) {
    const elementosActivos = document.querySelectorAll('.play-music');

    controles.innerHTML = `<a href="#" class="btn control atras"><i class="fas fa-backward"></i></a>
    <audio src="${musica}" style="width: 50vw;" controls autoplay><input type="text" value="${musica}" style="display: none;"></audio>
    <a href="#" class="btn control siguiente"><i class="fas fa-forward"></i></a>`;
    for (const elemento of elementosActivos) {
        // Elimina la clase `reaccion-activa-reproducida` del elemento
        elemento.classList.remove('reaccion-activa-reproducida');
    }
    reproducida.classList.add('reaccion-activa-reproducida');

    siguienteAutomatico();
}

function siguienteAutomatico() {
    let audioEtiqueta = controles.children[1];
    audioEtiqueta.addEventListener('ended', () => {
        let audioUrl = audioEtiqueta.children[0].value;
        let musicArray = Array.from(contenedorListaMusic.children);
        musicArray.forEach(limusic => {
            if (limusic.children[0].value === audioUrl) {
                let siguienteMusica = limusic.nextElementSibling.children[0].value;

                let elementoParaReproducido = limusic.nextElementSibling.children[1];
                siguienteAtras(siguienteMusica, elementoParaReproducido)
            }
        });
    })
}

function cargarArchivos(e) {
    const files = [...e.target.files];
    files.forEach(f => {
        const reader = new FileReader();
        reader.onload = (function (archivo) {
            return function (evt) {
                const li = document.createElement('li');
                li.classList.add('music');
                li.innerHTML = `
                    <input type="text" value="${evt.target.result}" style="display: none;">
                    <a href="#" class="btn play-music"><i class="far fa-play-circle"></i></a>
                    <h3>${archivo.name}</h3> 
                    <h3 class="name" id="name">${archivo.name}</h3> 
                    <h3 class="time">--</h3>
                `

                contenedorListaMusic.appendChild(li);
            }
        })(f)
        reader.readAsDataURL(f);
    })
}