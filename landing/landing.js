function handleUserChoice(choice) {
  const chatArea = document.getElementById('user-chat-area');

  const bubble = document.createElement('div');
  bubble.classList.add('chat-bubble', 'right');
  bubble.innerHTML = `<p>${choice}</p>`;
  chatArea.appendChild(bubble);

  setTimeout(() => {
    window.location.href = '/intro/intro.html';
  }, 1000);
}
