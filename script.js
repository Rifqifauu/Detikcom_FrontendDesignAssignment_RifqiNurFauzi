document.addEventListener("DOMContentLoaded", function() {
    const logos = [
        "img/logo1.jpg",
        "img/logo2.jpg",
        "img/logo3.jpg",
        "img/logo4.jpg",
        "img/logo5.jpg",
    ];
    const logoContainer = document.getElementById("logo-container");

    // Duplikat elemen-elemen logo dan tambahkan di belakang elemen terakhir
    for (let i = 0; i < 10; i++) {
        logos.forEach((image) => {
            const logoElement = document.createElement("div");
            logoElement.classList.add("logo");

            const imgElement = document.createElement("img");
            imgElement.src = image;
            imgElement.alt = "Logo"; // Sesuaikan dengan teks alt yang sesuai

            logoElement.appendChild(imgElement);
            logoContainer.appendChild(logoElement.cloneNode(true));
        });
    }

    const galleryImage = [
        "https://akcdn.detik.net.id/community/media/visual/2023/11/12/kemeriahan-btn-jakarta-run-2023-2_169.jpeg?w=700&q=90",
        "https://akcdn.detik.net.id/community/media/visual/2023/11/12/kemeriahan-btn-jakarta-run-2023-5_169.jpeg?w=700&q=90",
        "https://akcdn.detik.net.id/community/media/visual/2023/11/12/kemeriahan-btn-jakarta-run-2023-7_169.jpeg?w=700&q=90",
        "https://akcdn.detik.net.id/community/media/visual/2023/11/18/ct-arsa-charity-fun-run-2023-10.jpeg?w=700&q=90",
    ];
    const mainImage = document.querySelector(".main-img img");
    mainImage.src = galleryImage[3];
    const lowImgContainer = document.querySelector(".low-img"); // Ambil elemen pertama

    galleryImage.forEach((image) => {
        const div = document.createElement("div");
        div.classList.add("low-img-content");
        div.setAttribute("onclick", "setMain(event)");

        const imgLow = document.createElement("img");
        imgLow.src = image;
        imgLow.alt = "gambar";

        div.appendChild(imgLow);
        lowImgContainer.appendChild(div);
    });

    let count = 0;
    const previewImages = document.querySelectorAll(".low-img-content img");
    updatePreviewImages();

    function updatePreviewImages() {
        previewImages.forEach((image, index) => {
            if (index === count) {
                image.style.filter = "grayscale(0%)";
            } else {
                image.style.filter = "grayscale(80%)";
            }
        });
    }

    window.right = function() {
        count = (count + 1) % galleryImage.length;
        mainImage.src = galleryImage[count];
        updatePreviewImages();
    };

    window.left = function() {
        count = (count - 1 + galleryImage.length) % galleryImage.length;
        mainImage.src = galleryImage[count];
        updatePreviewImages();
    };

    const divElements = document.querySelectorAll(".low-img-content");

    function setMain(event) {
        const clickedDiv = event.currentTarget;
        const clickedIndex = Array.from(divElements).indexOf(clickedDiv);

        // Pastikan index berada dalam rentang yang benar
        if (clickedIndex >= 0 && clickedIndex < galleryImage.length) {
            count = clickedIndex;
            mainImage.src = galleryImage[clickedIndex];
            updatePreviewImages();
        }
    }

    divElements.forEach((div) => {
        div.addEventListener("click", setMain);
    });
    const artikel = [{
            judul: "Sukses Finish Marathon di Jakarta, Osha Penyandang Autisme Beberkan Prosesnya",
            linkFoto: "https://akcdn.detik.net.id/community/media/visual/2023/11/25/osha-penyandang-autisme-finish-marathon_169.jpeg?w=700&q=90",
            linkArtikel: "https://health.detik.com/kebugaran/d-7056398/sukses-finish-marathon-di-jakarta-osha-penyandang-autisme-beberkan-prosesnya",
            tanggal: "Sabtu, 25 Nov 20:00 WIB",
        },
        {
            judul: "Edukasi Lingkungan Hidup Bonus Sehat di Misi Lestari 2023: See Nature",
            linkFoto: "https://akcdn.detik.net.id/community/media/visual/2023/11/28/misi-lestari-2023-see-nature_169.jpeg?w=700&q=90",
            linkArtikel: "link_artikel2.html",
            tanggal: "Selasa, 28 Nov 2023 07:42 WIB",
        },
        {
            judul: "Gokil! Puluhan Ribu Orang Ramaikan Pertamina Eco RunFest 2023",
            linkFoto: "https://akcdn.detik.net.id/community/media/visual/2023/11/26/pertamina-eco-runfest-2023_169.jpeg?w=700&q=90",
            linkArtikel: "link_artikel3.html",
            tanggal: "Minggu, 26 Nov 2023 13:04 WIB",
        },
        {
            judul: "Kelar Lari di CT Arsa Charity Fun Run, 'Recharge' Energi Nonton Maliq & D'essential",
            linkFoto: "https://akcdn.detik.net.id/community/media/visual/2023/11/18/ct-arsa-charity-fun-run-2023-15.jpeg?w=700&q=90",
            linkArtikel: "link_artikel1.html",
            tanggal: "Sabtu, 18 Nov 2023 17:39 WIB",
        },
        {
            judul: "CT Arsa Charity Fun Run 2023 Bertabur Emas",
            linkFoto: "https://akcdn.detik.net.id/community/media/visual/2023/11/16/metal-go-ct-arsa-fun-run.jpeg?w=700&q=90",
            linkArtikel: "link_artikel2.html",
            tanggal: "Kamis, 16 Nov 2023 16:34 WIB",
        },
        {
            judul: "BTN Jakarta Run 2023 Dorong dan Geliatkan Sport Tourism Jakarta",
            linkFoto: "https://akcdn.detik.net.id/community/media/visual/2023/11/12/btn-jakarta-run-2023-4.jpeg?w=700&q=90",
            linkArtikel: "link_artikel3.html",
            tanggal: "Minggu, 12 Nov 2023 11:55 WIB",
        },
    ];

    const contentContainer =
        document.getElementsByClassName("content-container")[0];

    for (let i = 0; i < artikel.length; i++) {
        const objek = artikel[i];

        const contentElement = document.createElement("a");
        contentElement.classList.add("content", "col-md-4");
        contentElement.href = objek.linkArtikel;
        contentElement.target = "_blank";


        const artikelImage = document.createElement("div");
        artikelImage.classList.add("artikel-image");
        const imgContent = document.createElement("img");
        imgContent.src = objek.linkFoto;
        imgContent.alt = "Foto Artikel";

        const judul = document.createElement("h6");
        judul.innerHTML = objek.judul;

        const tanggal = document.createElement("p");
        tanggal.innerHTML = objek.tanggal;
        contentElement.appendChild(artikelImage);
        artikelImage.appendChild(imgContent);
        contentElement.appendChild(judul);
        contentElement.appendChild(tanggal);
        contentContainer.appendChild(contentElement);
    }
});