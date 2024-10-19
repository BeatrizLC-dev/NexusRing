function showDetails(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

function addToCart(name, description, price) {
    const product = { name, description, price };
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Produit ajouté au panier!');
    closeModal('modal1');
    closeModal('modal2');
}

function showLogin() {
    window.location.href = 'login.html';
}

function showRegister() {
    window.location.href = 'register.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const chatbox = document.querySelector('.chatbox');
    const chatboxMessages = document.querySelector('.chatbox-messages');
    const chatboxInput = document.querySelector('.chatbox-input');
    const chatboxSend = document.querySelector('.chatbox-send');

    window.toggleChatbox = function() {
        chatbox.classList.toggle('chatbox--closed');
    };

    chatboxSend.addEventListener('click', function() {
        const message = chatboxInput.value;
        if (message.trim() !== '') {
            const messageElement = document.createElement('div');
            messageElement.classList.add('chatbox-message');
            messageElement.textContent = message;
            chatboxMessages.appendChild(messageElement);
            chatboxInput.value = '';
            chatboxMessages.scrollTop = chatboxMessages.scrollHeight;
        }
    });
});

// Fermer les modals en cliquant en dehors
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

class ProductComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="product">
                <img class="img-detail" src="${this.getAttribute('img-src')}" alt="${this.getAttribute('img-alt')}">
                <h2>${this.getAttribute('title')}</h2>
                <p>${this.getAttribute('description')}</p>
                <button onclick="document.getElementById('${this.getAttribute('modal-id')}').style.display='block'">Détail</button>
            </div>
        `;
    }
}

customElements.define('product-component', ProductComponent);