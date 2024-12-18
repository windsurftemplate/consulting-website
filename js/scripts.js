// Sample data for dynamic content
const services = [
    {
        title: 'Strategy Consulting',
        description: 'Develop comprehensive business strategies to drive growth and innovation.',
        icon: '🎯'
    },
    {
        title: 'Digital Transformation',
        description: 'Navigate the digital landscape with cutting-edge solutions and implementations.',
        icon: '💻'
    },
    {
        title: 'Operations Excellence',
        description: 'Optimize business processes and enhance operational efficiency.',
        icon: '⚡'
    }
];

const caseStudies = [
    {
        title: 'Global Tech Company Transformation',
        description: 'How we helped a tech giant increase efficiency by 40%',
        image: 'https://via.placeholder.com/400x300',
        category: 'Digital Transformation'
    },
    {
        title: 'Retail Chain Optimization',
        description: 'Streamlining operations across 500+ locations',
        image: 'https://via.placeholder.com/400x300',
        category: 'Operations'
    },
    {
        title: 'Startup Growth Strategy',
        description: 'Helping a startup achieve 300% growth in 18 months',
        image: 'https://via.placeholder.com/400x300',
        category: 'Strategy'
    }
];

const team = [
    {
        name: 'Sarah Johnson',
        role: 'CEO & Strategy Lead',
        bio: '15+ years of consulting experience with Fortune 500 companies',
        image: 'https://via.placeholder.com/300x300'
    },
    {
        name: 'Michael Chen',
        role: 'Digital Transformation Director',
        bio: 'Former Tech Lead at major Silicon Valley companies',
        image: 'https://via.placeholder.com/300x300'
    },
    {
        name: 'Emma Rodriguez',
        role: 'Operations Excellence Lead',
        bio: 'Specialized in process optimization and change management',
        image: 'https://via.placeholder.com/300x300'
    }
];

const blogPosts = [
    {
        title: 'The Future of Digital Transformation',
        excerpt: 'Exploring emerging trends in digital transformation and their impact on businesses.',
        date: '2024-01-15',
        author: 'Michael Chen'
    },
    {
        title: 'Optimizing Remote Work Culture',
        excerpt: 'Best practices for building and maintaining a strong remote work culture.',
        date: '2024-01-10',
        author: 'Sarah Johnson'
    },
    {
        title: 'Sustainable Business Practices',
        excerpt: 'How sustainability drives business growth and innovation.',
        date: '2024-01-05',
        author: 'Emma Rodriguez'
    }
];

const testimonials = [
    {
        name: 'John Smith',
        role: 'CEO, Tech Innovators',
        content: 'Working with this consulting firm has transformed our business. Their strategic insights and execution were invaluable.',
        image: 'https://via.placeholder.com/100x100'
    },
    {
        name: 'Sarah Johnson',
        role: 'Director, Global Solutions',
        content: 'The team\'s expertise in digital transformation helped us achieve a 200% ROI within the first year.',
        image: 'https://via.placeholder.com/100x100'
    },
    {
        name: 'David Chen',
        role: 'Founder, StartUp Success',
        content: 'Their guidance was crucial in helping us scale from a startup to a market leader in just 18 months.',
        image: 'https://via.placeholder.com/100x100'
    }
];

const pricingPlans = [
    {
        name: 'Starter',
        price: '$999',
        period: 'per month',
        features: [
            'Basic Business Analysis',
            '5 Hours Consultation',
            'Email Support',
            'Basic Reporting'
        ],
        popular: false
    },
    {
        name: 'Professional',
        price: '$2,499',
        period: 'per month',
        features: [
            'Advanced Business Analysis',
            '20 Hours Consultation',
            'Priority Support',
            'Detailed Reporting',
            'Strategy Planning'
        ],
        popular: true
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: 'custom plan',
        features: [
            'Comprehensive Analysis',
            'Unlimited Consultation',
            '24/7 Priority Support',
            'Custom Reporting',
            'Strategy & Execution',
            'Dedicated Team'
        ],
        popular: false
    }
];

const faqItems = [
    {
        question: 'What industries do you specialize in?',
        answer: 'We specialize in Technology, Healthcare, Finance, and Manufacturing sectors, but our methodologies can be adapted to any industry.'
    },
    {
        question: 'How long does a typical consulting project take?',
        answer: 'Project duration varies based on scope and complexity, typically ranging from 3 months to 1 year. We\'ll provide a detailed timeline during our initial consultation.'
    },
    {
        question: 'What is your consulting methodology?',
        answer: 'We follow a 4-step process: Assessment, Strategy Development, Implementation, and Monitoring & Optimization.'
    },
    {
        question: 'Do you offer remote consulting services?',
        answer: 'Yes, we offer both in-person and remote consulting services to accommodate our clients\' needs and preferences.'
    }
];

// Populate dynamic content
document.addEventListener('DOMContentLoaded', () => {
    // Populate Services
    const servicesContainer = document.querySelector('#services .grid');
    if (servicesContainer) {
        services.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.className = 'card p-6';
            serviceCard.innerHTML = `
                <div class="text-4xl mb-4">${service.icon}</div>
                <h3 class="text-xl font-bold mb-2">${service.title}</h3>
                <p class="text-gray-600">${service.description}</p>
            `;
            servicesContainer.appendChild(serviceCard);
        });
    }

    // Populate Case Studies
    const caseStudiesContainer = document.querySelector('#case-studies .grid');
    if (caseStudiesContainer) {
        caseStudies.forEach(study => {
            const studyCard = document.createElement('div');
            studyCard.className = 'card overflow-hidden';
            studyCard.innerHTML = `
                <img src="${study.image}" alt="${study.title}" class="w-full h-48 object-cover">
                <div class="p-6">
                    <span class="text-sm text-blue-600 font-semibold">${study.category}</span>
                    <h3 class="text-xl font-bold mt-2">${study.title}</h3>
                    <p class="text-gray-600 mt-2">${study.description}</p>
                </div>
            `;
            caseStudiesContainer.appendChild(studyCard);
        });
    }

    // Populate Team
    const teamContainer = document.querySelector('#team .grid');
    if (teamContainer) {
        team.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = 'card text-center p-6';
            memberCard.innerHTML = `
                <img src="${member.image}" alt="${member.name}" class="w-32 h-32 rounded-full mx-auto mb-4">
                <h3 class="text-xl font-bold">${member.name}</h3>
                <p class="text-blue-600 font-semibold">${member.role}</p>
                <p class="text-gray-600 mt-2">${member.bio}</p>
            `;
            teamContainer.appendChild(memberCard);
        });
    }

    // Populate Blog
    const blogContainer = document.querySelector('#blog .grid');
    if (blogContainer) {
        blogPosts.forEach(post => {
            const postCard = document.createElement('div');
            postCard.className = 'card p-6';
            postCard.innerHTML = `
                <span class="text-sm text-gray-500">${post.date}</span>
                <h3 class="text-xl font-bold mt-2">${post.title}</h3>
                <p class="text-gray-600 mt-2">${post.excerpt}</p>
                <p class="text-sm text-blue-600 mt-4">By ${post.author}</p>
            `;
            blogContainer.appendChild(postCard);
        });
    }

    // Testimonials Carousel
    function initTestimonialsCarousel() {
        const carousel = document.querySelector('.testimonials-carousel');
        if (!carousel) return;

        let currentSlide = 0;
        
        // Populate testimonials
        testimonials.forEach((testimonial, index) => {
            const testimonialElement = document.createElement('div');
            testimonialElement.className = `testimonial-item ${index === 0 ? 'active' : ''}`;
            testimonialElement.innerHTML = `
                <div class="flex items-center mb-4">
                    <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full mr-4">
                    <div>
                        <h4 class="font-bold">${testimonial.name}</h4>
                        <p class="text-gray-600">${testimonial.role}</p>
                    </div>
                </div>
                <p class="text-gray-700">"${testimonial.content}"</p>
            `;
            carousel.appendChild(testimonialElement);
        });

        // Handle navigation
        document.querySelector('.carousel-prev').addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
            updateCarousel();
        });

        document.querySelector('.carousel-next').addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % testimonials.length;
            updateCarousel();
        });

        function updateCarousel() {
            const items = carousel.querySelectorAll('.testimonial-item');
            items.forEach((item, index) => {
                item.classList.toggle('active', index === currentSlide);
            });
        }

        // Auto-advance carousel
        setInterval(() => {
            currentSlide = (currentSlide + 1) % testimonials.length;
            updateCarousel();
        }, 5000);
    }

    // Pricing Section
    function initPricingSection() {
        const pricingContainer = document.querySelector('#pricing .grid');
        if (!pricingContainer) return;

        pricingPlans.forEach(plan => {
            const planElement = document.createElement('div');
            planElement.className = `pricing-card ${plan.popular ? 'popular' : ''}`;
            planElement.innerHTML = `
                <div class="text-center">
                    <h3 class="text-2xl font-bold mb-4">${plan.name}</h3>
                    <div class="text-4xl font-bold mb-2">${plan.price}</div>
                    <div class="text-gray-600 mb-6">${plan.period}</div>
                    <ul class="space-y-3 mb-6">
                        ${plan.features.map(feature => `
                            <li class="flex items-center">
                                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                ${feature}
                            </li>
                        `).join('')}
                    </ul>
                    <button class="btn-primary w-full">Get Started</button>
                </div>
            `;
            pricingContainer.appendChild(planElement);
        });
    }

    // FAQ Accordion
    function initFaqAccordion() {
        const faqContainer = document.querySelector('.faq-accordion');
        if (!faqContainer) return;

        faqItems.forEach(item => {
            const faqElement = document.createElement('div');
            faqElement.className = 'faq-item';
            faqElement.innerHTML = `
                <div class="faq-question">
                    <span>${item.question}</span>
                    <span class="faq-toggle">+</span>
                </div>
                <div class="faq-answer">
                    <p class="p-4">${item.answer}</p>
                </div>
            `;
            faqContainer.appendChild(faqElement);

            const question = faqElement.querySelector('.faq-question');
            question.addEventListener('click', () => {
                const currentlyActive = faqContainer.querySelector('.faq-item.active');
                if (currentlyActive && currentlyActive !== faqElement) {
                    currentlyActive.classList.remove('active');
                }
                faqElement.classList.toggle('active');
            });
        });
    }

    // Newsletter Form
    function initNewsletterForm() {
        const form = document.querySelector('.newsletter-form');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            
            // Here you would typically send this to your backend
            console.log('Newsletter signup:', email);
            
            // Show success message
            alert('Thank you for subscribing to our newsletter!');
            form.reset();
        });
    }

    // Live Chat Widget
    function initLiveChat() {
        const chatToggle = document.querySelector('.chat-toggle');
        const chatWindow = document.querySelector('.chat-window');
        const chatInput = document.querySelector('.chat-input input');
        const chatMessages = document.querySelector('.chat-messages');
        
        if (!chatToggle || !chatWindow) return;

        chatToggle.addEventListener('click', () => {
            chatWindow.classList.toggle('hidden');
            document.querySelector('.chat-closed').classList.toggle('hidden');
            document.querySelector('.chat-open').classList.toggle('hidden');
        });

        if (chatInput) {
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && chatInput.value.trim()) {
                    // Add user message
                    addMessage(chatInput.value, 'user');
                    
                    // Simulate agent response
                    setTimeout(() => {
                        addMessage('Thank you for your message. One of our consultants will respond shortly.', 'agent');
                    }, 1000);

                    chatInput.value = '';
                }
            });
        }

        function addMessage(content, type) {
            const messageElement = document.createElement('div');
            messageElement.className = `chat-message ${type}`;
            messageElement.textContent = content;
            chatMessages.appendChild(messageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }

    // Dark Mode Toggle
    function initDarkMode() {
        const darkModeToggle = document.createElement('button');
        darkModeToggle.className = 'fixed top-4 right-4 bg-gray-200 dark:bg-gray-800 p-2 rounded-full';
        darkModeToggle.innerHTML = '&#9728;';
        darkModeToggle.setAttribute('aria-label', 'Toggle Dark Mode');
        
        document.body.appendChild(darkModeToggle);

        darkModeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
        });

        // Check for saved dark mode preference
        if (localStorage.getItem('darkMode') === 'true' ||
            (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        }
    }

    // Initialize all features
    initTestimonialsCarousel();
    initPricingSection();
    initFaqAccordion();
    initNewsletterForm();
    initLiveChat();
    initDarkMode();
});

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

// Form submission handling
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: this.querySelector('#name').value,
            email: this.querySelector('#email').value,
            message: this.querySelector('#message').value
        };

        // Here you would typically send the form data to a server
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
