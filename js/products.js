addEventListener('DOMContentLoaded', () => {
  // JSONファイル読み込み
  const fetchData = async ()=>{
    try{ 
      const response = await fetch('./js/products.json');

      if(!response.ok){
        throw new Error('HTTPエラー',response.status);
      }

      // JSONファイルをJSオブジェクトに変換
      return await response.json();

    }catch(error){
      console.error(error);
      alert('商品情報の取得に失敗しました。');
    }
  }

  // 商品を表示する処理
  const productListEl = document.querySelector('.product-lists');
  const displayProducts = async () => {
    // 商品情報を取得
    const productLists = await fetchData();

    // 商品を表示
    productLists.products.forEach((item) => {
      const li = document.createElement('li');
      li.classList.add('list-item');
      li.innerHTML = `
        <a href="../pages/maintenance.html" class="item-link">
          <img src="./img/main/m-product_0001.png" class="item-img">
          <h3 class="item-name">${item.name}</h3>
          <p class="item-price">${item.price.toLocaleString('ja-jp',{style: 'currency', currency:'JPY'})}</p>
        </a>
      `;
      productListEl.appendChild(li);
    });
  }
  
  displayProducts();
});
