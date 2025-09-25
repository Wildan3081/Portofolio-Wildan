document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
      alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.`);
      contactForm.reset();
    } else {
      alert('Mohon isi semua field.');
    }
  });
}

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  });
});

function showProjectDescription(projectName) {
  let description;
  switch (projectName) {
    case 'Sistem Manajemen dan Jual Beli Buku':
      description = 'Proyek ini merupakan sistem manajemen dan jual beli buku yang dikembangkan untuk mempermudah transaksi online.';
      break;
    case 'Sistem dan Basis Data Jual Beli Buket Bunga':
      description = 'Proyek ini mencakup pengembangan sistem dan basis data untuk mengelola penjualan buket bunga dengan efisien.';
      break;
    case 'Sistem dan Basis Data Manajemen Gramedia':
      description = 'Proyek ini adalah sistem manajemen perpustakaan Gramedia dengan basis data yang terintegrasi.';
      break;
    case 'Pernah Menyentuh Mythical Immortal':
      description = 'Rank Mythical Immortal Adalah Tier Rank Tertinngi di Game Mobile Legend'
      break;
    default:
      description = 'Detail proyek belum tersedia.';
  }
  alert(description);
}