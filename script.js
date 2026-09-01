// Pindah halaman
function showPage(pageId){

    // Sembunyikan semua halaman
    document.querySelectorAll(".page").forEach(page=>{
        page.classList.remove("active");
    });

    // Tampilkan halaman tujuan
    document.getElementById(pageId).classList.add("active");

    const audio = document.getElementById("myAudio");

    if(!audio) return;

    if(pageId === "page-playlist"){

        // Reload lagu lalu siap diputar
        audio.load();

        // Coba autoplay
        audio.play().catch(()=>{
            console.log("Browser memblokir autoplay. Tekan tombol Play.");
        });

    }else{

        // Stop lagu saat keluar playlist
        audio.pause();
        audio.currentTime = 0;
    }
}

// Buka amplop
function openEnvelope(){
    showPage("page-menu");
}