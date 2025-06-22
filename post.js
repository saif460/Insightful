alert("hello");
        document.addEventListener('DOMContentLoaded', function() {
    // Sample post data - replace with your actual data structure
    const postData = {
        id: 4,
        title: "پی ٹی اے کی جانب سے خوشی کا جشن – 2 جی بی ڈیٹا اور 200 منٹس مفت!",
        category: "Announcement",
        image: "data:image/jpeg;base64,/9j/4AAQ...", // your base64 image
        content: `
            <p>🎉 پی ٹی اے اور موبائل آپریٹرز کی شاندار خوشخبری! 🇵🇰📱</p>
            <p>پاکستان میں 20 کروڑ ٹیلی کام صارفین کا سنگِ میل عبور کرنے کی خوشی میں،
            20 جون 2025 کو تمام صارفین کے لیے ہے ایک خاص تحفہ! 🎁</p>
            <h2>تفصیلات</h2>
            <ul>
                <li>📅 صرف 24 گھنٹوں کے لیے</li>
                <li>💥 2 جی بی مفت انٹرنیٹ ڈیٹا</li>
                <li>💬 200 آن نیٹ منٹس (اپنے نیٹ ورک پر کالز)</li>
            </ul>
            <p>اور سب سے بہترین بات؟ یہ آفر حاصل کرنا ہے نہایت آسان!</p>
            <p><strong>📲 ابھی اپنے موبائل سے #2200* ڈائل کریں</strong></p>
        `,
        author: "PTA Official",
        authorImg: "https://via.placeholder.com/100",
        date: "Jun 20, 2025",
        readTime: "3 min read",
        tags: ["PTA", "Mobile", "Free Data"]
    };

    // Populate the post data
    document.title = postData.title;
    document.getElementById('post-category').textContent = postData.category;
    document.getElementById('post-title').textContent = postData.title;
    document.getElementById('post-image').src = postData.image;
    document.getElementById('post-image').alt = postData.title;
    document.getElementById('post-author').textContent = postData.author;
    document.getElementById('post-author-img').src = postData.authorImg;
    document.getElementById('post-author-img').alt = postData.author;
    document.getElementById('post-date').textContent = `${postData.date} • ${postData.readTime}`;
    document.getElementById('post-content').innerHTML = postData.content;
    
    // Update tags
    const tagsContainer = document.getElementById('post-tags');
    tagsContainer.innerHTML = '';
    postData.tags.forEach(tag => {
        const tagElement = document.createElement('a');
        tagElement.href = '#';
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });









        document.getElementById('mobileToggle').addEventListener('click', function () {
                const navLinks = document.getElementById('navLinks');
                navLinks.classList.toggle('active');

                // Optional: Change icon when menu is open
                this.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
            });
            // Mobile menu toggle
            document.querySelector('.mobile-toggle').addEventListener('click', function () {
                const navLinks = document.querySelector('.nav-links');
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            });

            // Responsive adjustments
            window.addEventListener('resize', function () {
                const navLinks = document.querySelector('.nav-links');
                if (window.innerWidth > 768) {
                    navLinks.style.display = 'flex';
                } else {
                    navLinks.style.display = 'none';
                }
            });

            // FAQ Accordion
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                question.addEventListener('click', () => {
                    item.classList.toggle('active');
                });
            });

            // Form submission
            const contactForm = document.getElementById('contactForm');
            contactForm.addEventListener('submit', function (e) {
                e.preventDefault();

                // Get form values
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;

                // Here you would typically send the data to a server
                // For this example, we'll just show a success message
                alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon at ${email}.`);

                // Reset the form
                contactForm.reset();
            });

            // Map interaction
            const mapContainer = document.querySelector('.map-container');
            mapContainer.addEventListener('click', function () {
                alert('Interactive map coming soon! This will show our location with directions.');
            });
