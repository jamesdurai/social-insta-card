let likeCountElement = document.getElementById("likeCount1");
let likeCount = parseInt(likeCountElement.innerHTML);
let isLiked = false;

function toggleLike() {
    const likeIcon = document.getElementById('likeIcon');
    const likeCountElement = document.getElementById('likeCount1');

    if (isLiked) {
        likeCount--;
        likeIcon.style.color = 'black';
    } else {
        likeCount++;
        likeIcon.style.color = 'red';
    }

    likeCountElement.textContent = likeCount;
    isLiked = !isLiked;
}



let popup=document.getElementById("popup")

function openModal(){
    popup.classList.add("openpopup")
}

function closeModal(){
    popup.classList.remove("openpopup")
}

