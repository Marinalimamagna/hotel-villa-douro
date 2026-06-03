document.addEventListener('DOMContentLoaded', () => {
    console.log("🌟 Site Villa d'Ouro carregado e pronto para integração!");

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