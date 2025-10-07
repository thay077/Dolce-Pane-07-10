let cart=[];
const cartDiv=document.getElementById('cartItems');
function addToCart(id){
  const item=produtos.find(p=>p.id===id);
  cart.push(item);
  renderCart();
}
function renderCart(){
  if(!cartDiv)return;
  if(cart.length===0){cartDiv.innerHTML='<p>Carrinho vazio.</p>';return;}
  cartDiv.innerHTML='';
  let total=0;
  cart.forEach((c,i)=>{
    total+=c.preco;
    const div=document.createElement('div');
    div.innerHTML=`${c.nome} - R$ ${c.preco.toFixed(2)} <button onclick='removeFromCart(${i})'>Remover</button>`;
    cartDiv.appendChild(div);
  });
  const totalDiv=document.createElement('p');
  totalDiv.innerHTML=`<strong>Total: R$ ${total.toFixed(2)}</strong>`;
  cartDiv.appendChild(totalDiv);
}
function removeFromCart(index){
  cart.splice(index,1);
  renderCart();
}
document.getElementById('checkout')?.addEventListener('click',()=>{
  window.location.href='https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=123456';
});
