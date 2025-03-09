// Early 2000s style JavaScript for Animatrix Zone
document.addEventListener('DOMContentLoaded', function() {
    // Matrix code rain background
    const canvas = document.getElementById('matrix-background');
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions to match window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Resize canvas when window is resized
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    // Matrix code characters
    const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";
    
    // Create drops
    const fontSize = 14;
    const columns = Math.ceil(canvas.width / fontSize);
    const drops = [];
    
    // Initialize drops
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -canvas.height / fontSize);
    }
    
    // Matrix code rain animation
    function drawMatrixRain() {
        // Semi-transparent black to create trail effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Set text color and font
        ctx.fillStyle = '#0F0'; // Matrix green
        ctx.font = fontSize + 'px monospace';
        
        // Draw characters
        for (let i = 0; i < drops.length; i++) {
            // Random character
            const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
            
            // Draw character
            const x = i * fontSize;
            const y = drops[i] * fontSize;
            
            // Randomly make some characters brighter for effect
            if (Math.random() > 0.975) {
                ctx.fillStyle = '#FFF'; // Bright white
            } else {
                ctx.fillStyle = '#0F0'; // Matrix green
            }
            
            ctx.fillText(char, x, y);
            
            // Move drop down
            drops[i]++;
            
            // Reset drop to top with random delay when it reaches bottom
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = Math.floor(Math.random() * -10);
            }
        }
    }
    
    // Start matrix animation
    setInterval(drawMatrixRain, 50);
    
    // Visitor counter animation
    let count = 1337;
    const counterElement = document.getElementById('count');
    
    setInterval(function() {
        count++;
        counterElement.textContent = count;
    }, 10000);
    
    // Add cursor trail effect (very 2000s!)
    const cursorTrail = [];
    const trailLength = 20;
    
    for (let i = 0; i < trailLength; i++) {
        const div = document.createElement('div');
        div.className = 'cursor-trail';
        div.style.position = 'fixed';
        div.style.width = '10px';
        div.style.height = '10px';
        div.style.borderRadius = '50%';
        div.style.backgroundColor = `hsl(${120 + i * 5}, 100%, ${50 + i}%)`; // Matrix green shades
        div.style.zIndex = '9999';
        div.style.pointerEvents = 'none';
        div.style.opacity = 1 - (i / trailLength);
        document.body.appendChild(div);
        cursorTrail.push(div);
    }
    
    document.addEventListener('mousemove', function(e) {
        // Update positions with delay
        setTimeout(function() {
            cursorTrail[0].style.left = e.clientX - 5 + 'px';
            cursorTrail[0].style.top = e.clientY - 5 + 'px';
            
            // Move each trail element to the position of the one before it
            for (let i = trailLength - 1; i > 0; i--) {
                const prevX = parseInt(cursorTrail[i-1].style.left);
                const prevY = parseInt(cursorTrail[i-1].style.top);
                
                if (!isNaN(prevX) && !isNaN(prevY)) {
                    cursorTrail[i].style.left = prevX + 'px';
                    cursorTrail[i].style.top = prevY + 'px';
                }
            }
        }, 50);
    });
    
    // Enhanced button animations
    const enterButton = document.querySelector('.button-enter');
    const downloadsButton = document.querySelector('.button-downloads');
    const guestbookButton = document.querySelector('.button-guestbook');
    
    // ENTER SITE button effects
    enterButton.addEventListener('click', function(e) {
        // Create ripple effect
        createRippleEffect(e, this);
        
        // Create stars burst animation
        createStarsBurst(this);
        
        // Play sound effect (simulated)
        setTimeout(() => {
            alert('Welcome to the ANIMATRIX! There is no spoon...');
        }, 500);
    });
    
    // DOWNLOADS button effects
    downloadsButton.addEventListener('click', function(e) {
        // Create ripple effect
        createRippleEffect(e, this);
        
        // Create falling files animation
        createFallingFiles(this);
        
        // Play sound effect (simulated)
        setTimeout(() => {
            alert('Downloading Matrix code... The system is watching!');
        }, 500);
    });
    
    // GUESTBOOK button effects
    guestbookButton.addEventListener('click', function(e) {
        // Create ripple effect
        createRippleEffect(e, this);
        
        // Create signature animation
        createSignatureEffect(this);
        
        // Play sound effect (simulated)
        setTimeout(() => {
            alert('You have been added to the Matrix. The Oracle will contact you soon.');
        }, 500);
    });
    
    // Function to create ripple effect
    function createRippleEffect(e, button) {
        const ripple = document.createElement('span');
        ripple.className = 'button-effect';
        
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
        ripple.style.top = e.clientY - rect.top - size / 2 + 'px';
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    // Function to create stars burst animation for ENTER SITE
    function createStarsBurst(button) {
        const starsCount = 20;
        const colors = ['#00FF00', '#33FF33', '#66FF66', '#99FF99', '#CCFFCC'];
        
        for (let i = 0; i < starsCount; i++) {
            const star = document.createElement('div');
            star.style.position = 'absolute';
            star.style.width = '10px';
            star.style.height = '10px';
            star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            star.style.borderRadius = '50%';
            star.style.left = '50%';
            star.style.top = '50%';
            star.style.transform = 'translate(-50%, -50%)';
            star.style.pointerEvents = 'none';
            star.style.zIndex = '1000';
            
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 100 + 50;
            const duration = Math.random() * 1 + 0.5;
            
            star.style.animation = `star-burst ${duration}s forwards`;
            
            // Create keyframe animation dynamically
            const keyframes = `
                @keyframes star-burst {
                    to {
                        transform: translate(
                            calc(-50% + ${Math.cos(angle) * distance}px),
                            calc(-50% + ${Math.sin(angle) * distance}px)
                        ) scale(0);
                    }
                }
            `;
            
            const style = document.createElement('style');
            style.innerHTML = keyframes;
            document.head.appendChild(style);
            
            button.appendChild(star);
            
            setTimeout(() => {
                star.remove();
                style.remove();
            }, duration * 1000);
        }
    }
    
    // Function to create falling files animation for DOWNLOADS
    function createFallingFiles(button) {
        const fileCount = 10;
        const matrixChars = ['0', '1', '{', '}', '<', '>', '/', '\\', '|', '_'];
        
        for (let i = 0; i < fileCount; i++) {
            const file = document.createElement('div');
            file.style.position = 'absolute';
            file.style.fontSize = Math.random() * 20 + 20 + 'px';
            file.style.left = Math.random() * 100 + '%';
            file.style.top = '-50px';
            file.style.transform = 'translateX(-50%)';
            file.style.pointerEvents = 'none';
            file.style.zIndex = '1000';
            file.style.color = '#00FF00';
            file.style.fontFamily = 'monospace';
            file.textContent = matrixChars[Math.floor(Math.random() * matrixChars.length)];
            
            const duration = Math.random() * 2 + 1;
            const delay = Math.random() * 0.5;
            
            file.style.animation = `file-fall ${duration}s ${delay}s forwards`;
            
            // Create keyframe animation dynamically
            const keyframes = `
                @keyframes file-fall {
                    0% {
                        transform: translateX(-50%) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateX(-50%) translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg);
                        opacity: 0;
                    }
                }
            `;
            
            const style = document.createElement('style');
            style.innerHTML = keyframes;
            document.head.appendChild(style);
            
            document.body.appendChild(file);
            
            setTimeout(() => {
                file.remove();
                style.remove();
            }, (duration + delay) * 1000);
        }
    }
    
    // Function to create signature effect for GUESTBOOK
    function createSignatureEffect(button) {
        const signatures = [
            'Neo was here',
            'Follow the white rabbit',
            'There is no spoon',
            'Wake up, Neo...',
            'The Matrix has you',
            'Knock, knock, Neo'
        ];
        
        const signature = document.createElement('div');
        signature.style.position = 'absolute';
        signature.style.fontFamily = 'monospace';
        signature.style.fontSize = '24px';
        signature.style.color = '#00FF00';
        signature.style.textShadow = '2px 2px 0 #000000';
        signature.style.whiteSpace = 'nowrap';
        signature.style.pointerEvents = 'none';
        signature.style.zIndex = '1000';
        signature.style.opacity = '0';
        signature.textContent = signatures[Math.floor(Math.random() * signatures.length)];
        
        // Position randomly on screen
        signature.style.left = Math.random() * (window.innerWidth - 200) + 'px';
        signature.style.top = Math.random() * (window.innerHeight - 100) + 'px';
        signature.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
        
        // Create animation
        signature.style.animation = 'signature-appear 2s forwards';
        
        // Create keyframe animation dynamically
        const keyframes = `
            @keyframes signature-appear {
                0% {
                    opacity: 0;
                    transform: rotate(${Math.random() * 30 - 15}deg) scale(0.5);
                }
                20% {
                    opacity: 1;
                    transform: rotate(${Math.random() * 30 - 15}deg) scale(1.2);
                }
                30% {
                    transform: rotate(${Math.random() * 30 - 15}deg) scale(1);
                }
                80% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                    transform: rotate(${Math.random() * 30 - 15}deg) scale(1);
                }
            }
        `;
        
        const style = document.createElement('style');
        style.innerHTML = keyframes;
        document.head.appendChild(style);
        
        document.body.appendChild(signature);
        
        setTimeout(() => {
            signature.remove();
            style.remove();
        }, 2000);
    }
    
    // Add random movement to characters
    const characters = document.querySelectorAll('.character');
    
    characters.forEach(character => {
        // Add hover effect
        character.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.5)';
        });
        
        character.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add "Under Construction" GIF that follows mouse with delay
    const construction = document.getElementById('construction');
    let constructionX = 10;
    let constructionY = 10;
    
    setInterval(function() {
        construction.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
    }, 2000);
    
    // Add random "Matrix" quotes every 30 seconds
    setInterval(function() {
        if (Math.random() > 0.7) {
            const sounds = [
                "Wake up, Neo...",
                "The Matrix has you...",
                "Follow the white rabbit.",
                "Knock, knock, Neo.",
                "There is no spoon.",
                "I know kung fu."
            ];
            
            const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
            
            // Create a temporary div for the text
            const textDiv = document.createElement('div');
            textDiv.style.position = 'fixed';
            textDiv.style.left = Math.random() * window.innerWidth + 'px';
            textDiv.style.top = Math.random() * window.innerHeight + 'px';
            textDiv.style.color = '#00FF00';
            textDiv.style.fontFamily = 'monospace';
            textDiv.style.fontWeight = 'bold';
            textDiv.style.fontSize = '24px';
            textDiv.style.textShadow = '2px 2px 0 #000000';
            textDiv.style.zIndex = '10000';
            textDiv.textContent = randomSound;
            
            document.body.appendChild(textDiv);
            
            // Animate and remove
            let opacity = 1;
            const fadeInterval = setInterval(function() {
                opacity -= 0.05;
                textDiv.style.opacity = opacity;
                textDiv.style.top = parseInt(textDiv.style.top) - 2 + 'px';
                
                if (opacity <= 0) {
                    clearInterval(fadeInterval);
                    document.body.removeChild(textDiv);
                }
            }, 100);
        }
    }, 10000);
    
    // Add a "secret" Easter egg
    let konami = '';
    const konamiCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';
    
    document.addEventListener('keydown', function(e) {
        konami += e.key;
        
        if (konami.length > konamiCode.length) {
            konami = konami.substring(1);
        }
        
        if (konami.includes(konamiCode)) {
            // Easter egg activated!
            document.body.style.backgroundColor = "#000";
            alert('You have been unplugged from the Matrix! Welcome to the real world.');
            
            // Reset the code
            konami = '';
        }
    });
    
    // Create a "hit counter" that randomly increases
    setInterval(function() {
        const increment = Math.floor(Math.random() * 5) + 1;
        count += increment;
        counterElement.textContent = count;
    }, 5000);
    
    // Add a "loading" message that never completes (classic 2000s)
    const loadingMessages = [
        "Loading Matrix data...",
        "Connecting to Nebuchadnezzar...",
        "Searching for Morpheus...",
        "Dodging Agents...",
        "Buffering at 56k...",
        "Decoding Matrix..."
    ];
    
    let currentMessage = 0;
    
    const loadingDiv = document.createElement('div');
    loadingDiv.style.position = 'fixed';
    loadingDiv.style.bottom = '10px';
    loadingDiv.style.left = '50%';
    loadingDiv.style.transform = 'translateX(-50%)';
    loadingDiv.style.backgroundColor = '#000000';
    loadingDiv.style.color = '#00FF00';
    loadingDiv.style.padding = '5px 10px';
    loadingDiv.style.border = '1px solid #00FF00';
    loadingDiv.style.fontFamily = 'monospace';
    loadingDiv.style.fontSize = '12px';
    loadingDiv.textContent = loadingMessages[0] + " 0%";
    
    document.body.appendChild(loadingDiv);
    
    let loadingPercent = 0;
    
    setInterval(function() {
        loadingPercent += Math.floor(Math.random() * 10);
        
        if (loadingPercent >= 99) {
            loadingPercent = 99; // Never quite finishes loading
            
            // Change the message occasionally
            if (Math.random() > 0.7) {
                currentMessage = (currentMessage + 1) % loadingMessages.length;
            }
        }
        
        loadingDiv.textContent = loadingMessages[currentMessage] + " " + loadingPercent + "%";
    }, 3000);
}); 