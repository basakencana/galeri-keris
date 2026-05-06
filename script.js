function pesanWhatsApp(namaProduk) {
    // 1. Ganti nomor ini dengan nomor WhatsApp Anda (Gunakan kode negara, misal 62)
    const nomorWA = "6285113201669"; 

    // 2. Format pesan otomatis
    const pesan = `Halo Keris Kencanarupa, saya tertarik dengan koleksi: *${namaProduk}*. Bisa minta info detail barangnya?`;

    // 3. Encode pesan agar bisa dibaca oleh URL browser
    const urlPesan = encodeURIComponent(pesan);

    // 4. Arahkan user ke WhatsApp
    const linkWhatsApp = `https://wa.me/${nomorWA}?text=${urlPesan}`;

    // 5. Buka tab baru
    window.open(linkWhatsApp, '_blank');
}