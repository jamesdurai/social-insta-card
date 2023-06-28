function showToastfunc() {
    const toastDiv = document.querySelector('.toastDiv');
  
    
    const toast = document.createElement('div');
    toast.classList.add('toast');
  
    
    toast.innerText = 'Saved to Bookmarks';
  
    
    toastDiv.appendChild(toast);
  
    
    toast.classList.add('show');
  
    
    setTimeout(function () {
        toast.classList.remove('show');
        toastDiv.removeChild(toast);
    }, 3000);
}
