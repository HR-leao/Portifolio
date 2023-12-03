

const button = document.querySelector('.close')
//FECHAR MODAL
document.querySelector('.close').addEventListener('click', remove)
function remove(e) {
    e = document.querySelector('.containerModal')
    e.style.display = 'none'
}


//CONFIGURAÇÃO BOTÃO MODAL JS
const x = document.querySelector('.x')
x.style.width = '100px'
x.style.height = '30px'
x.style.borderRadius = '3px'
x.style.border = 'none'
x.style.marginLeft = '-101px'
x.style.marginTop = '-1px'
x.style.position = 'absolute'
x.style.backgroundColor = '#333'
x.style.color = '#CCC'
button.style.marginRight = '28px'


//ABRIR MODAL
function Open(e) {
    e = document.querySelector('.containerModal')
    e.style.display = 'flex'

}

document.querySelectorAll('.certificado').forEach((e) => {
    e.addEventListener('click', Open)
})


//REMOVER INFO MODAL
const t = document.querySelectorAll('.certificado').forEach((e) => {
    e.addEventListener('click', exclude)
})
function exclude() {
    const modal = document.querySelector('.containerModal .modal')
    const a = document.querySelector('.modal h2')
    const b = document.querySelector('.modal p')
    if (modal.contains(a) && modal.contains(b)) {
        a.remove()
        b.remove()
    }
}



//INSERINDO CERTIFICADO NO MODAL

const containerCertificado = document.querySelectorAll('.areacontainer .container-certificado')
let tem = false
containerCertificado.forEach((e) => {
    e.addEventListener('click', () => {

        const modal = document.querySelector('.containerModal .modal')
        let NovaImagem = document.createElement('img')
        let imagem = modal.querySelector('img')
        let dataKey = e.getAttribute('data-key')
        modal.appendChild(NovaImagem)

        NovaImagem.width = 900
        modal.style.width = "1000px"
        modal.style.height = "600px"


        console.log(e)
        if (modal.contains(imagem)) {
            imagem.remove()
        }
        if (dataKey == '1' && !modal.contains(imagem)) {
            NovaImagem.src = 'assets/img/CERTIFICADOS-B7WEB/HTML5-CSS3-B7WEB.jpg'
        }
        if (dataKey == '2' && modal.contains(NovaImagem)) {
            NovaImagem.src = 'assets/img/CERTIFICADOS-B7WEB/JAVASCRIPT-B7WEB.jpg'
        }
        if (dataKey == '3' && modal.contains(NovaImagem)) {
            NovaImagem.src = 'assets/img/CERTIFICADOS-B7WEB/BancoDeDados-B7WEB.jpg'
        }
        if (dataKey == '4' && modal.contains(NovaImagem)) {
            NovaImagem.src = 'assets/img/CERTIFICADOS-C-EM-VD/Hendrio-Evandro-Linguagem-C-8211-Modulo-00-Primeiros-Passos-Certificado-20h-Estudonauta.png'
        }
        if (dataKey == '5' && modal.contains(NovaImagem)) {
            NovaImagem.src = 'assets/img/CERTIFICADOS-C-EM-VD/Hendrio-Evandro-Linguagem-C-8211-Modulo-01-Estruturas-Basicas-Certificado-20h-Estudonauta2.png'
        }
        if (dataKey == '6' && modal.contains(NovaImagem)) {
            NovaImagem.src = 'assets/img/CERTIFICADOS-C-EM-VD/Hendrio-Evandro-Linguagem-C-8211-Modulo-02-Operadores-Certificado-20h-Estudonauta.png'
        }
        if (dataKey == '7' && modal.contains(NovaImagem)) {
            NovaImagem.src = 'assets/img/CERTIFICADOS-C-EM-VD/Hendrio-Evandro-Linguagem-C-8211-Modulo-03-Estruturas-de-controle-condicoes-Certificado-20h-Estudona.png'
        }
        if (dataKey == '8' && modal.contains(NovaImagem)) {
            NovaImagem.src = 'assets/img/CERTIFICADOS-C-EM-VD/Hendrio-Evandro-Python-3-8211-Mundo-1-40-Horas-Certificado-Curso-em-Video-1.png'
        }
        if (dataKey == '9' && modal.contains(NovaImagem)) {
            NovaImagem.src = 'assets/img/CERTIFICADOS-C-EM-VD/Hendrio-Evandro-Python-3-8211-Mundo-2-40-Horas-Certificado-Curso-em-Video-1.png'
        }
    })
})







