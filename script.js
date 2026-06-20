const CHECKOUT_URL='https://seu-link-de-checkout-aqui.com';
document.querySelectorAll('.cta').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();if(CHECKOUT_URL.includes('seu-link'))alert('CTA funcionando. Troque o CHECKOUT_URL no script.js pelo seu link real.');else location.href=CHECKOUT_URL;}));
