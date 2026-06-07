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
            
            document.getElementById('reservas').scrollIntoView({ behavior: 'smooth' });
            console.log(`Foco no Quarto ID: ${quartoId} - ${nomeQuarto}`);
        });
    });

    // ==========================================
    // SIMULADOR DO MOTOR
    // ==========================================
    if (botaoSimular) {
        botaoSimular.addEventListener('click', () => {
            containerMotor.style.backgroundColor = '#f4fbf7';
            containerMotor.style.borderColor = '#2ec4b6';
            containerMotor.innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <p style="color: #2ec4b6; font-weight: 600; margin-bottom: 10px;">✅ Motor de Reservas Acoplado!</p>
                    <p style="font-size: 0.9rem; color: #555;">[O calendário inteligente do Supabase lerá as datas e listará os 6 quartos disponíveis]</p>
                    <p style="font-size: 0.8rem; margin-top: 15px; color: #999;">Sistema desenvolvido por Marina.</p>
                </div>
            `;
        });
    }
});