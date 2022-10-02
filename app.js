let getimgs = document.querySelectorAll('img');
let getmodal = document.getElementById('modal');
let getbtnclose = document.querySelector('.btn-close');
let getmodalimg = document.querySelector('.modal-image');
let getimgtitle = document.querySelector('.img-title');


getimgs.forEach(function (getimg) {
    getimg.addEventListener('click', function () {
        getmodal.style.display = 'block';
        getmodalimg.src = getimg.src;
        // getmodalimg.classList.add('.active');
        getimgtitle.innerHTML = getimg.getAttribute('alt');

    });
});

getbtnclose.onclick = function () {
    getmodal.style.display = "none";
}


window.onclick = function (e) {

    if (e.target == getmodal) {
        getmodal.style.display = 'none';
    }
}