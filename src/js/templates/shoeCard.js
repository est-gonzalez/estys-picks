function shoeCard ({key, shoe, urlPath}){
    const template = `
        
    <aside class="shoe-picks">
  
    <figure>
    <img src="${urlPath}" width="160" alt="shoe pick">
        <figcaption> <h2>${shoe}</h2></figcaption>
    </figure>
  
    <footer>
        <button id="edit" data-key="${key}" >edit</button>
        <button id="delete" data-key="${key}" >delete</button>
    </footer>
  
  </aside>
    `
    const element = document.createRange().createContextualFragment(template).children[0]
    addCardControls(element)
    return element
  }
  
  function addCardControls(shoe){
      shoe.querySelector('#edit').addEventListener('click', onEditShoe)
      shoe.querySelector('#delete').addEventListener('click', onRemoveShoe)
  }
  
  
  function onEditShoe(e){
      const key = e.target.dataset.key 
      sessionStorage.setItem('key', key)
      window.location.assign('update.html')
  }
  
  function onRemoveShoe(e){
      const key = e.target.dataset.key 
      sessionStorage.setItem('key', key)
      window.location.assign('delete.html')
  }
  export {shoeCard}