const page = document.body.dataset.page || 'home';

const navigation = [
  { id: 'home', label: 'Home', href: 'index.html' },
  { id: 'about', label: 'About', href: 'about.html' },
  { id: 'services', label: 'Services', href: 'services.html' },
  { id: 'projects', label: 'Projects', href: 'projects.html' },
  { id: 'insights', label: 'Blogs', href: 'insights.html' },
  { id: 'careers', label: 'Careers', href: 'careers.html' },
  { id: 'contact', label: 'Contact', href: 'contact.html' },
];

const navMarkup = navigation.map(({ id, label, href }) => {
  const current = id === page ? ' aria-current="page"' : '';
  return `<a href="${href}"${current}>${label}</a>`;
}).join('');

const headerSlot = document.querySelector('#site-header');
if (headerSlot) {
  headerSlot.innerHTML = `
    <div class="announcement"><span class="pulse-dot"></span> Y-Fibre patch cord production line achieves prestigious GR-326 certification <a href="index.html#certification">Discover more <span aria-hidden="true">↗</span></a></div>
    <header class="site-header" id="top">
      <a class="brand" href="index.html" aria-label="STCS home"><img src="https://stcsindia.com/images/logo-1.png" alt="STCS" width="52" height="68"></a>
      <nav class="main-nav" id="main-nav" aria-label="Main navigation">${navMarkup}</nav>
      <div class="header-actions">
        <a class="header-contact" href="tel:+911126412628">+91 11 2641 2628</a>
        <a class="yfibre-link" href="https://yfibre.com/" aria-label="Visit Y-Fibre"><img src="https://stcsindia.com/images/yfibre.png" alt="Y-Fibre" width="120" height="27"></a>
        <a class="button button-small button-lime" href="contact.html">Contact us <span aria-hidden="true">↗</span></a>
      </div>
      <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="main-nav"><span></span><span></span></button>
    </header>`;
}

const footerSlot = document.querySelector('#site-footer');
if (footerSlot) {
  footerSlot.innerHTML = `
    <footer class="site-footer">
      <div class="footer-main section">
        <div class="footer-brand-col"><a class="brand" href="index.html" aria-label="STCS home"><img src="https://stcsindia.com/images/logo-1.png" alt="STCS" width="52" height="68"></a><p>Connecting innovation and excellence across India and the globe.</p><span class="iso-note">ISO 9001 · ISO 14001 · OHSAS 18001</span></div>
        <div class="footer-links"><h3>Explore</h3><a href="about.html">About us</a><a href="services.html">Services</a><a href="projects.html">Projects</a><a href="insights.html">Blogs &amp; insights</a><a href="careers.html">Careers</a></div>
        <div class="footer-links"><h3>Services</h3><a href="services.html#field-service">Field &amp; remote service</a><a href="services.html#fttx-deployment">FTTX deployment</a><a href="services.html#network-solutions">Network solutions</a><a href="services.html#managed-services">Managed services</a><a href="services.html#staff-augmentation">Staff augmentation</a></div>
        <div class="footer-links footer-contact"><h3>Contact</h3><a href="tel:+911126412628">+91 11 2641 2628</a><a href="mailto:info@stcsindia.com">info@stcsindia.com</a><p>207–209, Plot No. 15, Pankaj Plaza,<br>Local Shopping Complex, Block DD,<br>Kalkaji, New Delhi 110019, India</p><div class="social-links"><a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a><a href="https://www.instagram.com/" aria-label="Instagram">ig</a><a href="https://www.facebook.com/" aria-label="Facebook">fb</a></div></div>
      </div>
      <div class="footer-bottom section"><span>© 2024 STCS. All rights reserved.</span><span>Information &amp; Communication Technology</span><a href="#top">Back to top ↑</a></div>
    </footer>
    <a class="whatsapp" href="https://api.whatsapp.com/send/?phone=91&amp;text&amp;type=phone_number&amp;app_absent=0" aria-label="Contact STCS on WhatsApp"><span>◉</span></a>`;
}
