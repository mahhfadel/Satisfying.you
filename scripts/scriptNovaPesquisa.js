

//quadro imagem
const pictureImage = document.querySelector(".picture__image");
//epaço do nome da imagem
const imputNameImage = document.querySelector(".semArquivo");
//formulario
const form = document.querySelector('.form');
//imput nome
const inputName = document.querySelector('#name');
//imput data
const inputData = document.querySelector('#data');
//imput imagem
const inputFile = document.querySelector('#select-arquivo');
//img 
let imgToSave=null;



inputFile.addEventListener('change', function(e) { 
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if(file){
        const reader = new FileReader();

        imputNameImage.placeholder = file.name;

        reader.addEventListener('load', function(e){
            const readerTarget = e.target;

            const img = document.createElement('img');
            img.src = readerTarget.result;
            imgToSave =readerTarget.result;
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
                let userLogin = JSON.parse(localStorage.getItem('userLogin'));
                pesquisaList.push({
                    name: inputName.value,
                    data: inputData.value,
                    image: imgToSave,
                    userEmail:userLogin.email,
                    pessimo:0,
                    ruim:0,
                    neutro:0,
                    bom :0,
                    excelente:0,
                    // imageURL: img.src
                })
            
                localStorage.setItem('pesquisaList', JSON.stringify(pesquisaList))

                window.location.href = "../pages/Home.html";
            }
        }
    }
})