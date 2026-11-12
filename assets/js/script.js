
const form = document.querySelector("#comment-form");
const authorInput = document.querySelector("#author");
const messageInput = document.querySelector("#message");
const errorMessage = document.querySelector("#form-error");
const commentList = document.querySelector("#comment-list");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const author = authorInput.value.trim();
    const message = messageInput.value.trim();

    if (author.length < 2) {
        errorMessage.textContent = "Le nom doit contenir au moins 2 caractères.";
        return;
    }

    if (message.length < 10) {
        errorMessage.textContent = "Le commentaire doit contenir au moins 10 caractères.";
        return;
    }

    errorMessage.textContent = "";

    const comment = document.createElement("li");
    comment.className = "comment";

    const commentAuthor = document.createElement("p");
    commentAuthor.className = "comment-author";
    commentAuthor.textContent = author;

    const commentText = document.createElement("p");
    commentText.className = "comment-text";
    commentText.textContent = message;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "btn-delete";
    deleteButton.textContent = "🗑️ Supprimer";

    deleteButton.addEventListener("click", function () {
        comment.remove();
    });

    comment.appendChild(commentAuthor);
    comment.appendChild(commentText);
    comment.appendChild(deleteButton);

    commentList.appendChild(comment);

    form.reset();
});