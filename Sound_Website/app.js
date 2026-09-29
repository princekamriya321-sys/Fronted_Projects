// // ==========================================
// // 1. DYNAMIC THEME ACCENT SWITCHER
// // ==========================================
// // Select all color dots
// const colorDots = document.querySelectorAll('.dot');

// colorDots.forEach(dot => {
//     dot.addEventListener('click', (e) => {
//         // Remove active class from all dots
//         colorDots.forEach(d => d.classList.remove('active'));
        
//         // Add active class to clicked dot
//         e.target.classList.add('active');

//         // Read the custom data-color attribute
//         const selectedColor = e.target.getAttribute('data-color');

//         // Dynamically update CSS CSS variable on :root
//         document.documentElement.style.setProperty('--accent', selectedColor);
//         document.documentElement.style.setProperty('--accent-glow', `${selectedColor}4d`);
//     });
// });

// // ==========================================
// // 2. FEATURE TAB SWITCHER (DATA DRIVEN)
// // ==========================================
// // Store tab data in an object (resembles backend API responses)
// const tabData = {
//     anc: {
//         title: "Adaptive Noise Cancellation (38dB)",
//         desc: "Four dedicated microphones analyze ambient noise 1,000 times per second to deliver pure, uninterrupted sound."
//     },
//     battery: {
//         title: "40-Hour Extended Battery Life",
//         desc: "Fast USB-C charging delivers 5 hours of continuous playback with just a 10-minute quick charge."
//     },
//     driver: {
//         title: "Custom 40mm Titanium Drivers",
//         desc: "Engineered for deep punchy bass, pristine mids, and ultra-crisp highs up to 40kHz sound stage."
//     }
// };

// const tabButtons = document.querySelectorAll('.tab-btn');
// const tabTitle = document.getElementById('tabTitle');
// const tabDesc = document.getElementById('tabDesc');
// const tabContentBox = document.getElementById('tabContent');

// tabButtons.forEach(button => {
//     button.addEventListener('click', (e) => {
//         // Update active class on tab buttons
//         tabButtons.forEach(btn => btn.classList.remove('active'));
//         e.target.classList.add('active');

//         // Get key from data-tab attribute
//         const tabKey = e.target.getAttribute('data-tab');

//         // Fade out animation effect
//         tabContentBox.style.opacity = '0';

//         setTimeout(() => {
//             // Update content from data object
//             tabTitle.textContent = tabData[tabKey].title;
//             tabDesc.textContent = tabData[tabKey].desc;

//             // Fade back in
//             tabContentBox.style.opacity = '1';
//         }, 150);
//     });
// });

// // ==========================================
// // 3. INTERACTIVE PRE-ORDER BUTTON
// // ==========================================
// const buyBtn = document.getElementById('buyBtn');

// buyBtn.addEventListener('click', () => {
//     buyBtn.textContent = "Added to Cart! ✓";
//     buyBtn.style.backgroundColor = "#00e676";

//     setTimeout(() => {
//         buyBtn.textContent = "Pre-Order Now — $299";
//         buyBtn.style.backgroundColor = "var(--accent)";
//     }, 2000);
// });