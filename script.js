document.addEventListener('DOMContentLoaded', () => {
    console.log("🌟 Site Bouganville Suítes carregado e pronto!");

    // ==========================================
    // CONTROLE INTEGRADO DO MENU HAMBÚRGUER MOBILE
    // ==========================================
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        // Abre ou fecha ao clicar nas barrinhas
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            
            // Alterna o desenho entre barras (三) e fechar (X)
            const icone = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icone.className = 'fas fa-times';
            } else {
                icone.className = 'fas fa-bars';
            }
        });

        // Fecha a gaveta lateral quando o usuário clica em qualquer link
        const linksDoMenu = navMenu.querySelectorAll('ul li a');
        linksDoMenu.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.querySelector('i').className = 'fas fa-bars';
            });
        });

        // Fecha o menu caso o usuário clique fora dele
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.querySelector('i').className = 'fas fa-bars';
            }
        });
    }

    // ==========================================
    // ROLAGEM AO CLICAR NOS QUARTOS
    // ==========================================
    const cardsDosQuartos = document.querySelectorAll('.quarto-card');
    const botaoSimular = document.getElementById('btn-simular-motor');
    const containerMotor = document.getElementById('motor-reserva-container');

    cardsDosQuartos.forEach(card => {
        card.addEventListener('click', () => {
            const quartoId = card.getAttribute('data-quarto-id');
            const nomeQuarto = card.querySelector('h3').innerText;
            
            const secaoReservas = document.getElementById('reservas');
            if (secaoReservas) {
                secaoReservas.scrollIntoView({ behavior: 'smooth' });
            }
            console.log(`Foco no Quarto ID: ${quartoId} - ${nomeQuarto}`);
        });
    });

    // ==========================================
    // SIMULADOR DO MOTOR
    // ==========================================
    if (botaoSimular && containerMotor) {
        botaoSimular.addEventListener('click', () => {
            containerMotor.style.backgroundColor = '#f4fbf7';
            containerMotor.style.borderColor = '#164a32';
            containerMotor.innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <p style="color: #164a32; font-weight: 600; margin-bottom: 10px;">✅ Motor de Reservas Acoplado!</p>
                    <p style="font-size: 0.9rem; color: #555; margin-bottom: 15px;">[O calendário inteligente do Supabase lerá as datas e listará os 6 quartos disponíveis]</p>
                    <a href="https://motor-reservas-monjolo-lqqxuvhqq-marinalimamagnas-projects.vercel.app/" target="_blank" class="btn-principal" style="font-size: 0.85rem; padding: 8px 20px; text-decoration: none;">Acessar Sistema de Reservas</a>
                </div>
            `;
        });
    }
});