const inputFile = document.querySelector('#select-arquivo');
const pictureImage = document.querySelector(".picture__image");
const imputName = document.querySelector(".semArquivo");

inputFile.addEventListener('change', function(e) { 
    const inputTarget = e.target;
    const file = inputTarget.files[0];
    const name = inputTarget.files[0].name;

    if(file){
        const reader = new FileReader();

        imputName.placeholder = name;

        reader.addEventListener('load', function(e){
            const readerTarget = e.target;

            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('picture__image');
            pictureImage.innerHTML = '';

            pictureImage.appendChild(img);
        })

        reader.readAsDataURL(file);
    } else{
        pictureImage.innerHTML = pictureImageTxt;
    }
})