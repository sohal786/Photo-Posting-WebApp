let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 3 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function addNewComment(data){
    let commentList = document.getElementById('comment-list');
    let newComment = document.createElement('template');
    newComment.innerHTML = `<div id ="message-${data.commentId}" class="comment">
    <strong class="comment-author">${data.username}</strong>
           <span class="comment-date">${new Date().toLocaleString("en-US", {timeStyle:"long",dateStyle:"long"
        })}
        </span>
           <div class="comment-text">${data.comment}</div>
</div>`;
    commentList.append(newComment.content); 
    document.getElementById(`message-${data.commentId}`).scrollIntoView();
    
}

document.getElementById('commentButton')
    .addEventListener('click', function(ev){
        let commentTextElement = document.getElementById('comment-text');
        let commentText = commentTextElement.value;
        let postId = ev.currentTarget.dataset.postid;
        
        if (!commentText) return;

        fetch("/comments/create",{
            method:"POST",
            headers:{
                "Content-Type": "Application/json"
    
            },
            body:JSON.stringify({
                comment: commentText,
                postId: postId
            })
        })
        .then(response => response.json())
        .then(res_json => {
            addNewComment(res_json.data);

        }).catch(err => console.log(err));

})