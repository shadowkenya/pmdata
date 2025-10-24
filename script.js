 // Buy package function with PayHero integration
        function buyPackage(amount, packageName) {
            const reference = `PM Data Solution - ${packageName} - Customer Order`;
            const payHeroUrl = `https://app.payhero.co.ke/lipwa/3513?amount=${amount}&reference=${encodeURIComponent(reference)}`;
            window.open(payHeroUrl, '_blank');
        }

        // Updated buy minutes function with direct WhatsApp redirect
        function buyMinutes(packageName, price) {
            const message = `Hello PM Data Solution! I want to order ${packageName} for Ksh ${price}. Please provide payment instructions and process my order. Thank you!`;
            const whatsappUrl = `https://wa.me/254788419041?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }

        // Copy till number function
        function copyTillNumber() {
            const tillNumber = "4832924";
            navigator.clipboard.writeText(tillNumber).then(function() {
                // Create a temporary notification
                const notification = document.createElement('div');
                notification.innerHTML = '<i class="fas fa-check"></i> Till number copied!';
                notification.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: var(--safaricom-green);
                    color: white;
                    padding: 10px 20px;
                    border-radius: 5px;
                    z-index: 1000;
                    font-weight: bold;
                `;
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 2000);
            }).catch(function(err) {
                console.error('Could not copy text: ', err);
            });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll effect to navbar
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'linear-gradient(135deg, var(--safaricom-green), var(--safaricom-dark-green))';
                navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.2)';
            } else {
                navbar.style.background = 'linear-gradient(135deg, var(--safaricom-green), var(--safaricom-dark-green))';
                navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            }
        });

        // Animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .package-card, .service-card').forEach(element => {
            observer.observe(element);
        });

        // Stats counter animation
        function animateCounter(element) {
            const target = parseInt(element.getAttribute('data-count'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current);
            }, 16);
        }

        // Start counters when stats section is visible
        const statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = entry.target.querySelectorAll('.stat-number');
                    counters.forEach(counter => {
                        animateCounter(counter);
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        });

        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            statsObserver.observe(statsSection);
        }

        // FAQ Toggle Function
        function toggleFAQ(element) {
            const answer = element.nextElementSibling;
            const icon = element.querySelector('i');
            
            if (answer.classList.contains('show')) {
                answer.classList.remove('show');
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            } else {
                // Close all other FAQs
                document.querySelectorAll('.faq-answer').forEach(ans => {
                    ans.classList.remove('show');
                });
                document.querySelectorAll('.faq-question i').forEach(ic => {
                    ic.classList.remove('fa-minus');
                    ic.classList.add('fa-plus');
                });
                
                // Open current FAQ
                answer.classList.add('show');
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            }
        }

        // Initialize animations on page load
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(() => {
                document.querySelectorAll('.package-card').forEach(card => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                });
            }, 100);
        });