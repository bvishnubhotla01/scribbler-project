function removeCard(card) {
        const delCard = document.getElementById(card);
        delCard.parentNode.removeChild(delCard);
}

function openPost(author, heading, content) {
        const url = `./post.html`;
        window.location.href = url;
}
