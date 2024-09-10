let toplamFiyat = 0;
let toplamUrun = 0;

function urunFiyatlariniTopla() {
    let urunler = document.querySelectorAll("#searchResultsTable > tbody > tr.searchResultsItem");
    urunler.forEach((urun) => {
        try {
            let fiyatText = urun.querySelector(".searchResultsPriceValue .classified-price-container span").innerText;
            let fiyat = parseInt(fiyatText.replace(" TL", "").replace(/\./g, ""));
            fiyat = fiyat / 1000;
            toplamFiyat += fiyat;
            console.log(toplamFiyat)
            toplamUrun++;
        } catch (err) {
            console.log("Fiyat alınamadı:", err);
        }
    });
}

urunFiyatlariniTopla();

function sonrakineGit() {
    let sonrakiButon = document.querySelector("a[title='Sonraki']");
    if (sonrakiButon) {
        sonrakiButon.click();

        setTimeout(() => {
            urunFiyatlariniTopla();
            sonrakineGit(); 
        }, 3000); 
    } else {
        let ortalamaFiyat = toplamFiyat / toplamUrun;
        console.log(`Ortalama Fiyat: ${ortalamaFiyat} ( 1000 İle Çarpınız. ) TL`);
    }
}
setTimeout(sonrakineGit, 3000); 