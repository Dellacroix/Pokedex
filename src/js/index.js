const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click',()=>{
        const cartaoAberto = document.querySelector('.aberto')
        cartaoAberto.classList.remove('aberto')
        
        const idSelecionado = pokemon.attributes.id.value
        
        const cartaoSelecionado = document.getElementById('ct-' + idSelecionado)
        cartaoSelecionado.classList.add('aberto')
        
        const listaAtiva = document.querySelector('.ativo')
        listaAtiva.classList.remove('ativo')
        
        const seletorAtivar = document.getElementById(idSelecionado)
        seletorAtivar.classList.add('ativo')
        console.log(listaAtiva)

    })
})