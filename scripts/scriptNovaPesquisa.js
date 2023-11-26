

//quadro imagem
const pictureImage = document.querySelector(".picture__image");
//epaço do nome da imagem
const imputName = document.querySelector(".semArquivo");
//formulario
const form = document.querySelector('.form');
//imput nome
const inputName = document.querySelector('#name');
//imput data
const inputData = document.querySelector('#data');
//imput imagem
const inputFile = document.querySelector('#select-arquivo');


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


// não enviar vazio
form.addEventListener('submit', function(e){
    if(inputName.value == ''){
        e.preventDefault();
        alert('Preencha o nome');
    } else {
        if(inputData.value == ''){
            e.preventDefault();
            alert('Preencha a data');
        } else{
            if(inputFile.value == ''){
                e.preventDefault();
                alert('Selecione uma imagem');
            } else{
                e.preventDefault();
                let pesquisaList = JSON.parse(localStorage.getItem('pesquisaList') || '[]')

                pesquisaList.push({
                    name: inputName.value,
                    data: inputData.value,
                    image: inputFile.value
                })
            
                localStorage.setItem('pesquisaList', JSON.stringify(pesquisaList))

                window.location.href = "../pages/Home.html";
            }
        }
    }
    

})