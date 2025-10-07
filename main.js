const produtos=[
  {id:1,nome:'Bolo de Chocolate',preco:79.90},
  {id:2,nome:'Bolo de Morango',preco:69.90},
  {id:3,nome:'Pão Francês',preco:3.50},
  {id:4,nome:'Croissant',preco:5.50},
  {id:5,nome:'Salgado Assado',preco:7.50}
];
const produtosDiv=document.getElementById('produtos');
produtosDiv?.childNodes.length===0 && produtos.forEach(p=>{
  const card=document.createElement('div');
  card.className='card';
  card.innerHTML=`<img src='https://picsum.photos/300?random=${p.id}' alt='${p.nome}'><h3>${p.nome}</h3><p>R$ ${p.preco.toFixed(2)}</p><button onclick='addToCart(${p.id})'>Adicionar ao Carrinho</button>`;
  produtosDiv.appendChild(card);
});
