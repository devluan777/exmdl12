document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cadastro-form');
    const successMessage = document.getElementById('mensagem-sucesso');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (form.checkValidity()) {
            successMessage.style.display = 'block';
            form.reset();

            // Ative o efeito de fogos de artifício
            activateFireworks();
        }
    });

    function activateFireworks() {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 50,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffcc33"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.7,
                    "random": true
                },
                "size": {
                    "value": 7,
                    "random": true
                },
                "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "top",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                }
            }
        });
    }
});


