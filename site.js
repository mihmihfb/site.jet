document.getElementById("search").addEventListener("input", function() {
    const searchValue = this.value.toLowerCase();
    const receitas = document.querySelectorAll(".receita");

    receitas.forEach(function(receita) {
        const receitaNome = receita.querySelector("h3").textContent.toLowerCase();
        if (receitaNome.includes(searchValue)) {
            receita.style.display = "";
        } else {
            receita.style.display = "none";
        }
    });
});

function mostrarReceita(receita) {
    let mensagem = '';
    if (receita === 'Chakalaka') {
        mensagem = 'Chakalaka: Originário das favelas da África do Sul, o Chakalaka é um molho feito com legumes e molho de tomate, frequentemente servido com pães ou como acompanhamento para carnes.';
    } else if (receita === 'Malva Pudding') {
        mensagem = 'Malva Puding: Um doce tradicional da África do Sul, o Malva Pudding é semelhante a um bolo, feito com geleia de damasco e açúcar mascavo. É servido quente, geralmente com sorvete ou creme de baunilha.';
    }
    if (receita === 'Bobotie') {
        mensagem = 'Bobotie: O bobotie é um dos pratos mais famosos da cultura africana. Suas origens remetem-se a Cape Malay. Geralmente consumido como acompanhamento do famoso arroz amarelo, ele constitui-se em um cozido de carne moída, pão, leite, castanhas, cebola, curry, passas e damascos.'
    } else if (receita === 'Arroz Amarelo') {
        mensagem = 'Um dos maiores símbolos da culinária africana, o arroz amarelo é tradicionalmente servido em almoços, quase sempre como acompanhamento de outros pratos. É bastante simples, sendo que as principais características são o sabor agridoce e a coloração amarela por conta do açafrão. Leva, ainda, uva-passa escura, canela, manteiga e açúcar.'
    }
    if (receita === 'Kitcha fit-fit') {
        mensagem = 'Kitcha fit-fit: Da região do “Chifre da África” (Horn of Africa), o kitcha fit-fit, mais precisamente, é típico da Eritréia. Lá, ele é servido durante o café. Trata-se de um combinação de um pão local e uma manteiga temperada. Ambos são misturados ao berbere, que é um tempero quente e de cor avermelhada.'
    } else if (receita === 'Xalwo') {
        mensagem = 'Xalwo: Característico da cultura da Somália, o xalwo é uma adaptação de halva. É um doce servido em festas, celebrações e ocasiões especiais, como os casamentos. Leva amido de milho, açúcar, manteiga ghee, cardamomo em pó e noz-moscada. Para incrementar o sabor, algumas receitas levam amendoim, conferindo mais textura e sabor ao prato.'
    }
    if (receita === 'Melktert') {
        mensagem = 'Melktert: Um dos exemplo da influência dos colonizadores europeus, essa sobremesa é inspirada na mattentaart, que é originária da holanda. É típica da África do Sul e geralmente é consumida gelada e polvilhada com canela. A melkert é uma torta de leite com massa crocante e recheio cremoso.'
    } else if (receita === 'Couscous') {
        mensagem = 'O couscous africano em nada lembra o prato típico do nordeste brasileiro. Lá, ele é feito a partir da semolina, que é um pequeno grão de trigo duro. Depois de cozido no vapor, o prato ganha acompanhamento de legumes e carnes. É um alimento básico de toda a região norte da África, com destaque para o Marrocos, Tunísia, Líbia, Mauritânia e Argélia.'
    }
    if (receita === 'Uglai') {
        mensagem = 'Uglai: Representante do leste africano, o uglai, dependendo do local, também pode ser chamado de sima ou posho. É feito a base de fubá ou farinha de milho, que são misturados com água, adquirindo uma consistência pastosa ou semelhante a uma massa. Tradicionalmente é servido com repolho temperado e refogado.'
    } else if (receita === 'Koeksisters') {
        mensagem = 'Koeksisters: Para nós, brasileiros, o koeksisters lembra muito um bolinho de chuva. Apesar disso, ele guarda muitas particularidades. Também é frito, mas ao invés de ser passado no açúcar canela, ele é banhado em uma calda feita com açúcar, limão e especiarias. Outra diferença está no formato, que ao invés de redondo, lembra muito uma trança.'
    }
    
    alert(mensagem);
}
