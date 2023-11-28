

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
//parametro nome da pesquisa
const params = new URLSearchParams(window.location.search);

//insert image
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
            newImgToSave = readerTarget.result;
            img.classList.add('picture__image');
            pictureImage.innerHTML = '';

            pictureImage.appendChild(img);
        })

        reader.readAsDataURL(file);
    } else{
        pictureImage.innerHTML = pictureImageTxt;
    }
})

// recuperar lista de pesquisa
const pesquisaList = Array.from(JSON.parse(localStorage.getItem("pesquisaList")));

// buscar nome da pesquisa e inserir no input
pesquisaList.forEach((item) => {
    if(params.get('nome') == item.name){
        inputName.value = item.name;
        inputData.value = item.data;
        const img = document.createElement('img');
        img.src = item.image;
        imgToSave = item.image;
        img.classList.add('picture__image');
        pictureImage.innerHTML = '';
        pictureImage.appendChild(img);

        if(item.image !== ''){
            imputNameImage.placeholder = 'Imagem de ' + item.name;
        }
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

                pesquisaList.forEach((item) => {
                    if(params.get('nome') == item.name){
                            item.name = inputName.value,
                            item.data = inputData.value,
                            item.image = imgToSave
                    
                        localStorage.setItem('pesquisaList', JSON.stringify(pesquisaList))
                    }
                })

                window.location.href = "../pages/Home.html";
            } else{
                e.preventDefault();

                pesquisaList.forEach((item) => {
                    if(params.get('nome') == item.name){
                            item.name = inputName.value,
                            item.data = inputData.value,
                            item.image = newImgToSave
                    
                        localStorage.setItem('pesquisaList', JSON.stringify(pesquisaList))
                    }
                })

                window.location.href = "../pages/Home.html";
            }
        }
    }
})

// modal apagar
function iniciaModal(modalContainerID) {
	const modalContainer = document.getElementById(modalContainerID)
	if (modalContainer) {
		modalContainer.classList.add('mostrar')
        //cancelar
		modalContainer.addEventListener('click', (e) => {
			if (
				e.target.id == modalContainerID ||
				e.target.className == 'button--cancel' ||
				e.target.id === 'button--cancel'
			) {
				modalContainer.classList.remove('mostrar')
			}
		})

        //apagar
        modalContainer.addEventListener('click', (e) => {
			if (
				e.target.className == 'button--confirm' ||
				e.target.id === 'button--confirm'
			) {
                pesquisaList.forEach((item, index) => {
                    if(params.get('nome') === item.name){
                        pesquisaList.splice(index, 1);
                    
                        localStorage.setItem('pesquisaList', JSON.stringify(pesquisaList))
                        return;
                    }
                })

				window.location.href = "../pages/Home.html";
			}
		})
	}
}

const apagar = document.querySelector('.btnApagar')
apagar.addEventListener('click', () => {
    iniciaModal('modalConfirm')
})

