const queryString = new Array();
let editMode = false;
let num = 0;

function onEdit() {
        num += 1;
        const editHeading = document.getElementById('edit-heading');
        const editContent = document.getElementById('edit-contenttext')
        const editButton =  document.getElementById('edit-button');


        if (!editMode) {       
                editHeading.style.border = '2px solid red';                
                editContent.style.border = '2px solid red';

                editButton.innerHTML =
                        'Save<i class="fa fa-save" style="padding-left: 4px;"></i></button>';
                editMode = true;
        } else {
                if (num === 2) {
                        editHeading.innerHTML = `<span>UPDATED:</span>${editHeading.innerHTML}`;
                        editContent.innerHTML = `<div>UPDATED:</div>${editContent.innerHTML}`;
                }

                editContent.style.border = 'none';
                editHeading.style.border = 'none';

                editButton.innerHTML =
                        'Edit<i class="fa fa-edit" style="padding-left: 4px;"></i>';
                editMode = false;
        }


}

window.onload = function() {
        if (queryString.length == 0) {
                if (window.location.search.split('?').length > 1) {
                        const params = window.location.search.split('?')[1].split('&');
                        for (let i = 0; i < params.length; i++) {
                                const key = params[i].split('=')[0];
                                const value = decodeURIComponent(params[i].split('=')[1]);
                                queryString[key] = value;
                        }
                }
        }
        if (queryString.heading != null && queryString.author != null) {
                const { heading } = queryString;
                const { author } = queryString;
                const { content } = queryString;
                document.getElementsByClassName('heading-content')[0].innerHTML = heading;
                document.getElementsByClassName('author-name')[0].innerHTML = author;
                document.getElementsByClassName('post-content')[0].innerHTML = content;
        }
        document.getElementById('comments').style.visibility = 'hidden';
};

let count = 0;
function countLikes() {
        count = parseInt(count) + parseInt(1);
        const divData = document.getElementById('showCount');
        const likeButton = document.getElementById('likeButton');
        likeButton.innerHTML = 'Liked';
        if (count == 1) {
                divData.innerHTML = `${count} person likes this !`;
        } else {
                divData.innerHTML = `${count} people like this !`;
        }
}

const comments = [];

function addingComment(item, index) {
        const commentsElement = document.getElementById('comments');
        const temp = commentsElement.innerHTML;
        commentsElement.innerHTML = `<div class="comment">${item}</div>`;
        commentsElement.innerHTML += `${temp}`;
        comments.pop();
}

function addComment(comment) {
        if (comment.value !== '') {
                document.getElementById('comments').style.visibility = 'visible';
                var comment = comment.value;
                comments.unshift(comment);
                $('#comment').val('');
                comments.forEach(addingComment);
                $(document).scrollTop($(document).height());
        }
}
