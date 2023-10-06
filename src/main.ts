import { Product } from './Product';
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

const products : Product[] = [];

function tableAddElement()
{
  const tbody = document.getElementById('tbody')!;
  tbody.textContent = '';
  for(const s of products){
    const tr = document.createElement('tr')!;
    const td1 = document.createElement('td')!;
    const td2 = document.createElement('td')!;
    const td3 = document.createElement('td')!;
    td1.textContent = `${s.name}`;
    td2.textContent = `${s.price}`;
    td3.textContent = `${s.productCode}`;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);
  }
}

function add(){
  try{
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const price = parseInt((document.getElementById('price') as HTMLInputElement).value);
    const productCode = (document.getElementById('productCode') as HTMLInputElement).value;

    const product = new Product(name,price,productCode);
    products.push(product);

    tableAddElement();

    document.getElementById('errorMessage')!.textContent = "";
    (document.getElementById('name') as HTMLInputElement).value = "";
    (document.getElementById('price') as HTMLInputElement).value = "";
    (document.getElementById('productCode') as HTMLInputElement).value = "";
  } catch (e) {
    if(e instanceof Error){
      document.getElementById('errorMessage')!.textContent = e.message;
    }
  }
}

function init(){
    document.getElementById('buttonAdd')?.addEventListener('click',add);
}

document.addEventListener('DOMContentLoaded',init);