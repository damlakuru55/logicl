// ==========================================
// IDEVO - script.js
// Türkçe fikir paylaşım uygulaması
// ==========================================

const SAYFA_BASI_FIKIR = 10;
const YENI_FIKIR_SURESI = 10000;
const TEK_SEFERDE_FIKIR = 5;

let fikirler = [];
let yorumlar = {};
let aktifSayfa = 1;
let aktifBolum = "discover";
let secilenFikirId = null;


// ==========================================
// KİŞİLER
// ==========================================

const kisiler = [
    ["Emre Mert Akdağ", "EA"],
    ["Eren Kaya", "EK"],
    ["Osman Nuri Kaya", "ONK"],
    ["Zeynep Demir", "ZD"],
    ["Elif Arslan", "EA"],
    ["Mert Yılmaz", "MY"],
    ["İrem Kaya", "İK"],
    ["Duru Aydın", "DA"],
    ["Buse Çelik", "BÇ"],
    ["Selin Yıldız", "SY"],
    ["Ceren Aksoy", "CA"],
    ["Melis Demir", "MD"],
    ["Can Eren", "CE"],
    ["Derya Aydın", "DA"],
    ["Sude Karaca", "SK"],
    ["Nazlı Koç", "NK"],
    ["Ece Yalçın", "EY"],
    ["Ada Korkmaz", "AK"],
    ["Lina Şahin", "LŞ"],
    ["Arda Çetin", "AÇ"],
    ["Berk Can", "BC"],
    ["Nehir Kaya", "NK"],
    ["Damla Yıldız", "DY"],
    ["Kerem Aydın", "KA"],
    ["Aslı Demir", "AD"]
];


// ==========================================
// FİKİR HAVUZU
// ==========================================

const fikirHavuzu = [
    [
        "Daha iyi bir eğitim uygulaması",
        "Zor dersleri küçük ve eğlenceli görevlerle daha anlaşılır hale getiren bir uygulama.",
        "Eğitim"
    ],
    [
        "Yeni oyuncular bul",
        "Aynı oyunları seven ve benzer oyun tarzına sahip insanları bulmanın kolay bir yolu.",
        "Oyun"
    ],
    [
        "Akıllı not uygulaması",
        "Notları derslere, projelere ve konulara göre otomatik olarak düzenleyen bir uygulama.",
        "Teknoloji"
    ],
    [
        "Arkadaşlarla film seçimi",
        "Arkadaş grubunun birlikte oy kullanarak herkesin istediği filmi bulmasını sağlayan sistem.",
        "Eğlence"
    ],
    [
        "Mahalle fikir panosu",
        "İnsanların yaşadıkları bölgeyle ilgili yararlı bilgiler paylaşabileceği dijital bir pano.",
        "Sosyal"
    ],
    [
        "Basit görev listesi",
        "Günün sadece en önemli üç görevini gösteren sade bir görev uygulaması.",
        "Tasarım"
    ],
    [
        "Günlük yaratıcılık görevi",
        "Her gün kullanıcıya yapabileceği küçük ve eğlenceli bir yaratıcılık görevi veren uygulama.",
        "Tasarım"
    ],
    [
        "Hafta sonu etkinlikleri",
        "Hafta sonu yapılabilecek ilginç aktiviteleri kolayca keşfetmeyi sağlayan bir uygulama.",
        "Günlük Yaşam"
    ],
    [
        "Yetenek paylaşımı",
        "İnsanların birbirlerine bildikleri şeyleri öğrettiği ve yeni beceriler kazandığı bir platform.",
        "Sosyal"
    ],
    [
        "Kişisel proje planlayıcı",
        "Bir fikri görevlere, tarihlere ve adımlara dönüştürerek proje haline getiren bir sistem.",
        "Teknoloji"
    ],
    [
        "Müzik keşif topluluğu",
        "İnsanların birbirlerine yeni şarkılar önerebileceği küçük topluluklar oluştur.",
        "Eğlence"
    ],
    [
        "Ders çalışma odası",
        "Öğrencilerin birlikte sessizce çalışabileceği çevrim içi çalışma odaları oluştur.",
        "Eğitim"
    ],
    [
        "Akıllı alışveriş listesi",
        "Daha önce aldığın ürünleri hatırlayan ve alışveriş yaparken öneriler sunan bir sistem.",
        "Günlük Yaşam"
    ],
    [
        "Fikir geliştirme odaları",
        "Aynı konu üzerinde çalışan insanların fikirlerini paylaşabileceği çevrim içi odalar oluştur.",
        "Sosyal"
    ],
    [
        "Kolay portföy oluşturucu",
        "Kodlama veya tasarım bilgisi gerektirmeden sade bir kişisel portföy hazırlama aracı.",
        "Tasarım"
    ],
    [
        "Günlük kodlama görevi",
        "Yazılımcılara her gün çözebilecekleri küçük bir programlama problemi sun.",
        "Teknoloji"
    ],
    [
        "Oyun öneri sistemi",
        "Daha önce oynadığın oyunlara göre sana yeni oyunlar öneren bir sistem.",
        "Oyun"
    ],
    [
        "Ders çalışma müziği",
        "Çalıştığın derse ve çalışma şekline göre uygun müzik listeleri oluşturan bir sistem.",
        "Eğitim"
    ],
    [
        "Şehir keşif haritası",
        "İnsanların şehirlerindeki ilginç yerleri keşfedip kendi önerilerini paylaşabileceği bir harita.",
        "Günlük Yaşam"
    ],
    [
        "Topluluk oylama alanı",
        "İnsanların fikirleri oylayarak topluluğun en çok beğendiği fikirleri belirlemesini sağlayan sistem.",
        "Sosyal"
    ]
];


// ==========================================
// BAŞLANGIÇ FİKİRLERİ
// ==========================================

function baslangicFikirleriniOlustur() {
    const baslangic = [
        [
            "Oyun gibi hissettiren ders uygulaması",
            "Ders çalışmayı küçük görevler ve eğlenceli aşamalarla daha keyifli hale getiren bir uygulama.",
            "Eğitim",
            kisiler[0],
            48
        ],
        [
            "Aynı oyunları seven insanları bul",
            "Oyun tarzı ve sevdiği oyunlar benzer olan oyuncuları kolayca bulmayı sağlayan bir sistem.",
            "Oyun",
            kisiler[1],
            42
        ],
        [
            "Dijital fikir defteri",
            "Aklına gelen fikirleri hızlıca kaydet ve daha sonra onları projelere dönüştür.",
            "Teknoloji",
            kisiler[2],
            39
        ],
        [
            "Arkadaşlarla film seç",
            "Arkadaş grubunun birlikte oy kullanarak herkesin izlemek istediği filmi bulmasını sağla.",
            "Eğlence",
            kisiler[3],
            35
        ],
        [
            "Topluluk yetenek paylaşımı",
            "Bildiklerini başkalarına öğret ve onların bildiği yeni şeyleri öğren.",
            "Sosyal",
            kisiler[4],
            31
        ],
        [
            "Üç görevli yapılacaklar listesi",
            "Günün yalnızca en önemli üç görevini gösteren sade bir görev uygulaması.",
            "Tasarım",
            kisiler[5],
            27
        ],
        [
            "Arkadaşlarla müzik keşfet",
            "Küçük gruplar oluştur ve herkesin her gün yeni bir şarkı paylaşmasını sağla.",
            "Eğlence",
            kisiler[6],
            24
        ],
        [
            "Mahalle etkinlik haritası",
            "Yakınındaki etkinlikleri ve ilginç yerleri kolayca keşfet.",
            "Günlük Yaşam",
            kisiler[7],
            22
        ],
        [
            "Günlük yaratıcılık görevi",
            "Her gün yapabileceğin küçük ve eğlenceli bir yaratıcılık görevi al.",
            "Tasarım",
            kisiler[8],
            20
        ],
        [
            "Akıllı alışveriş listesi",
            "Genellikle aldığın ürünleri hatırlayan ve gerektiğinde sana öneren bir alışveriş listesi.",
            "Günlük Yaşam",
            kisiler[9],
            18
        ]
    ];

    return baslangic.map((fikir, index) =>
        fikirOlustur(
            fikir[0],
            fikir[1],
            fikir[2],
            fikir[3],
            fikir[4],
            Date.now() - ((index + 1) * 3600000)
        )
    );
}


// ==========================================
// FİKİR NESNESİ
// ==========================================

function fikirOlustur(
    baslik,
    aciklama,
    kategori,
    kisi,
    begeni = 0,
    tarih = Date.now()
) {
    return {
        id: Date.now() + Math.random() * 100000,
        baslik,
        aciklama,
        kategori,
        yazar: kisi[0],
        basHarfler: kisi[1],
        begeni,
        begenildi: false,
        kaydedildi: false,
        olusturmaTarihi: tarih
    };
}


// ==========================================
// VERİLERİ YÜKLE
// ==========================================

function verileriYukle() {
    try {
        const kayitliFikirler =
            localStorage.getItem("idevoFikirler");

        const kayitliYorumlar =
            localStorage.getItem("idevoYorumlar");

        if (kayitliFikirler) {
            const veri = JSON.parse(kayitliFikirler);

            if (Array.isArray(veri)) {
                fikirler = veri;
            }
        }

        if (kayitliYorumlar) {
            const veri = JSON.parse(kayitliYorumlar);

            if (veri && typeof veri === "object") {
                yorumlar = veri;
            }
        }
    } catch (hata) {
        console.error("Veriler yüklenemedi:", hata);
    }

    if (!Array.isArray(fikirler) || fikirler.length === 0) {
        fikirler = baslangicFikirleriniOlustur();
        verileriKaydet();
    }
}


// ==========================================
// VERİLERİ KAYDET
// ==========================================

function verileriKaydet() {
    try {
        localStorage.setItem(
            "idevoFikirler",
            JSON.stringify(fikirler)
        );

        localStorage.setItem(
            "idevoYorumlar",
            JSON.stringify(yorumlar)
        );
    } catch (hata) {
        console.error("Veriler kaydedilemedi:", hata);
    }
}


// ==========================================
// ELEMANLAR
// ==========================================

const fikirlerAlani =
    document.getElementById("ideas");

const sayfalamaAlani =
    document.getElementById("pagination");

const aramaAlani =
    document.getElementById("search");

const kategoriAlani =
    document.getElementById("categoryFilter");

const bolumBasligi =
    document.getElementById("sectionTitle");

const bolumAciklamasi =
    document.getElementById("sectionDescription");

const sayfaBilgisi =
    document.getElementById("pageInfo");

const yeniFikirPenceresi =
    document.getElementById("newIdeaModal");

const detayPenceresi =
    document.getElementById("detailModal");


// ==========================================
// FİKİRLERİ GÖSTER
// ==========================================

function ekraniOlustur() {
    let liste = [...fikirler];

    const arama = aramaAlani
        ? aramaAlani.value
            .trim()
            .toLocaleLowerCase("tr-TR")
        : "";

    if (arama) {
        liste = liste.filter(fikir => {
            const metin = (
                fikir.baslik +
                " " +
                fikir.aciklama +
                " " +
                fikir.yazar +
                " " +
                fikir.kategori
            ).toLocaleLowerCase("tr-TR");

            return metin.includes(arama);
        });
    }

    const kategori = kategoriAlani
        ? kategoriAlani.value
        : "all";

    if (kategori !== "all") {
        liste = liste.filter(
            fikir => fikir.kategori === kategori
        );
    }

    if (aktifBolum === "popular") {
        liste.sort(
            (a, b) => b.begeni - a.begeni
        );

        if (bolumBasligi) {
            bolumBasligi.textContent =
                "Popüler fikirler";
        }

        if (bolumAciklamasi) {
            bolumAciklamasi.textContent =
                "Topluluk tarafından en çok beğenilen fikirler.";
        }
    }

    else if (aktifBolum === "saved") {
        liste = liste.filter(
            fikir => fikir.kaydedildi === true
        );

        liste.sort(
            (a, b) =>
                b.olusturmaTarihi -
                a.olusturmaTarihi
        );

        if (bolumBasligi) {
            bolumBasligi.textContent =
                "Kaydedilen fikirler";
        }

        if (bolumAciklamasi) {
            bolumAciklamasi.textContent =
                "Daha sonra bakmak için kaydettiğin fikirler.";
        }
    }

    else if (aktifBolum === "latest") {
        liste.sort(
            (a, b) =>
                b.olusturmaTarihi -
                a.olusturmaTarihi
        );

        if (bolumBasligi) {
            bolumBasligi.textContent =
                "En yeni fikirler";
        }

        if (bolumAciklamasi) {
            bolumAciklamasi.textContent =
                "Topluluğa en son eklenen fikirler.";
        }
    }

    else {
        liste.sort(
            (a, b) =>
                b.olusturmaTarihi -
                a.olusturmaTarihi
        );

        if (bolumBasligi) {
            bolumBasligi.textContent =
                "Fikirleri keşfet";
        }

        if (bolumAciklamasi) {
            bolumAciklamasi.textContent =
                "Idevo topluluğunun yeni fikirlerini keşfet.";
        }
    }

    const toplamSayfa =
        Math.max(
            1,
            Math.ceil(
                liste.length / SAYFA_BASI_FIKIR
            )
        );

    if (aktifSayfa > toplamSayfa) {
        aktifSayfa = toplamSayfa;
    }

    const baslangic =
        (aktifSayfa - 1) *
        SAYFA_BASI_FIKIR;

    const sayfadakiFikirler =
        liste.slice(
            baslangic,
            baslangic + SAYFA_BASI_FIKIR
        );

    if (fikirlerAlani) {
        fikirlerAlani.innerHTML = "";
    }

    if (sayfadakiFikirler.length === 0) {
        if (fikirlerAlani) {
            fikirlerAlani.innerHTML = `
                <div class="empty">
                    Aradığın kriterlere uygun fikir bulunamadı.
                </div>
            `;
        }
    }

    else {
        sayfadakiFikirler.forEach(fikir => {
            fikirlerAlani.appendChild(
                fikirKartiOlustur(fikir)
            );
        });
    }

    sayfalamaOlustur(toplamSayfa);
}


// ==========================================
// FİKİR KARTI
// ==========================================

function fikirKartiOlustur(fikir) {
    const kart =
        document.createElement("article");

    kart.className = "idea-card";
    kart.dataset.id = String(fikir.id);

    const yorumListesi =
        yorumlar[String(fikir.id)] || [];

    kart.innerHTML = `
        <div class="card-header">

            <span class="category">
                ${htmlTemizle(fikir.kategori)}
            </span>

            <span class="time">
                ${zamanGoster(fikir.olusturmaTarihi)}
            </span>

        </div>

        <h3>
            ${htmlTemizle(fikir.baslik)}
        </h3>

        <p class="description">
            ${htmlTemizle(fikir.aciklama)}
        </p>

        <div class="card-footer">

            <div class="person">

                <div class="avatar">
                    ${htmlTemizle(fikir.basHarfler)}
                </div>

                <span class="person-name">
                    ${htmlTemizle(fikir.yazar)}
                </span>

            </div>

            <div class="actions">

                <button
                    class="action ${
                        fikir.begenildi ? "active" : ""
                    }"
                    data-action="like"
                    data-id="${fikir.id}"
                    type="button"
                >
                    ♥ ${fikir.begeni}
                </button>

                <button
                    class="action ${
                        fikir.kaydedildi ? "active" : ""
                    }"
                    data-action="save"
                    data-id="${fikir.id}"
                    type="button"
                >
                    ${fikir.kaydedildi ? "★" : "☆"}
                </button>

            </div>

        </div>

        <div class="live-comments">

            <div class="live-comments-title">

                <span>
                    Yorumlar
                </span>

                <span
                    class="live-comment-count"
                    data-comment-count="${fikir.id}"
                >
                    ${yorumListesi.length}
                </span>

            </div>

            <div
                class="live-comment-list"
                data-comment-list="${fikir.id}"
            >
                ${yorumlariHTML(fikir.id)}
            </div>

            <div class="live-comment-form">

                <input
                    type="text"
                    class="live-comment-input"
                    data-comment-input="${fikir.id}"
                    placeholder="Yorumunu yaz..."
                    maxlength="250"
                    autocomplete="off"
                >

                <button
                    type="button"
                    class="live-comment-button"
                    data-comment-send="${fikir.id}"
                >
                    Gönder
                </button>

            </div>

        </div>
    `;

    return kart;
}


// ==========================================
// YORUMLARI HTML'E ÇEVİR
// ==========================================

function yorumlariHTML(fikirId) {
    const liste =
        yorumlar[String(fikirId)] || [];

    if (liste.length === 0) {
        return `
            <div class="no-live-comment">
                Henüz yorum yok. İlk yorumu sen yap.
            </div>
        `;
    }

    return liste
        .map(yorum => `
            <div class="live-comment">

                <div class="live-comment-avatar">
                    ${htmlTemizle(
                        yorum.basHarfler || "S"
                    )}
                </div>

                <div class="live-comment-content">

                    <div class="live-comment-top">

                        <strong>
                            ${htmlTemizle(yorum.yazar)}
                        </strong>

                        <span>
                            ${zamanGoster(yorum.tarih)}
                        </span>

                    </div>

                    <p>
                        ${htmlTemizle(yorum.metin)}
                    </p>

                </div>

            </div>
        `)
        .join("");
}


// ==========================================
// YORUM GÖNDERME
// ==========================================

document.addEventListener(
    "click",
    function (olay) {

        const yorumButonu =
            olay.target.closest(
                "[data-comment-send]"
            );

        if (yorumButonu) {
            olay.stopPropagation();

            const id =
                yorumButonu.dataset.commentSend;

            kartYorumuGonder(id);

            return;
        }

        const islemButonu =
            olay.target.closest(
                "[data-action]"
            );

        if (islemButonu) {
            olay.stopPropagation();

            islemYap(
                islemButonu.dataset.action,
                islemButonu.dataset.id
            );

            return;
        }

        const kart =
            olay.target.closest(
                ".idea-card"
            );

        if (kart) {
            fikirDetayiniAc(
                kart.dataset.id
            );
        }
    }
);


// ==========================================
// YORUM INPUT ENTER
// ==========================================

document.addEventListener(
    "keydown",
    function (olay) {

        if (
            olay.key !== "Enter" ||
            !olay.target.matches(
                ".live-comment-input"
            )
        ) {
            return;
        }

        olay.preventDefault();

        const id =
            olay.target.dataset.commentInput;

        kartYorumuGonder(id);
    }
);


// ==========================================
// KARTTAN YORUM GÖNDER
// ==========================================

function kartYorumuGonder(fikirId) {
    const input =
        document.querySelector(
            `[data-comment-input="${fikirId}"]`
        );

    if (!input) {
        return;
    }

    const metin =
        input.value.trim();

    if (!metin) {
        input.focus();
        return;
    }

    const anahtar =
        String(fikirId);

    if (!yorumlar[anahtar]) {
        yorumlar[anahtar] = [];
    }

    yorumlar[anahtar].push({
        yazar: "Sen",
        basHarfler: "S",
        metin,
        tarih: Date.now()
    });

    verileriKaydet();

    input.value = "";

    yorumlariCanliGuncelle(
        fikirId
    );
}


// ==========================================
// CANLI YORUM GÜNCELLE
// ==========================================

function yorumlariCanliGuncelle(
    fikirId
) {
    const liste =
        document.querySelector(
            `[data-comment-list="${fikirId}"]`
        );

    const sayac =
        document.querySelector(
            `[data-comment-count="${fikirId}"]`
        );

    const yorumListesi =
        yorumlar[String(fikirId)] || [];

    if (liste) {
        liste.innerHTML =
            yorumlariHTML(fikirId);
    }

    if (sayac) {
        sayac.textContent =
            yorumListesi.length;
    }
}


// ==========================================
// BEĞEN / KAYDET
// ==========================================

function islemYap(
    islem,
    id
) {
    const fikir =
        fikirBul(id);

    if (!fikir) {
        return;
    }

    if (islem === "like") {

        if (fikir.begenildi) {
            fikir.begeni =
                Math.max(
                    0,
                    fikir.begeni - 1
                );

            fikir.begenildi =
                false;
        }

        else {
            fikir.begeni++;
            fikir.begenildi =
                true;
        }
    }

    if (islem === "save") {
        fikir.kaydedildi =
            !fikir.kaydedildi;
    }

    verileriKaydet();

    // Mevcut sayfa korunuyor.
    ekraniOlustur();
}


// ==========================================
// FİKİR BUL
// ==========================================

function fikirBul(id) {
    return fikirler.find(
        fikir =>
            String(fikir.id) ===
            String(id)
    );
}


// ==========================================
// FİKİR DETAYI
// ==========================================

function fikirDetayiniAc(id) {
    const fikir =
        fikirBul(id);

    if (!fikir) {
        return;
    }

    secilenFikirId =
        fikir.id;

    const detay =
        document.getElementById("detail");

    if (!detay) {
        return;
    }

    detay.innerHTML = `
        <span class="category">
            ${htmlTemizle(fikir.kategori)}
        </span>

        <h2 class="detail-title">
            ${htmlTemizle(fikir.baslik)}
        </h2>

        <p class="detail-description">
            ${htmlTemizle(fikir.aciklama)}
        </p>

        <div class="detail-author">

            <div class="avatar">
                ${htmlTemizle(fikir.basHarfler)}
            </div>

            <span class="person-name">
                ${htmlTemizle(fikir.yazar)}
            </span>

        </div>
    `;

    yorumlariGoster();

    if (detayPenceresi) {
        detayPenceresi.classList.add(
            "show"
        );
    }
}


// ==========================================
// MODAL YORUMLARI
// ==========================================

function yorumlariGoster() {
    const yorumAlani =
        document.getElementById("comments");

    const yorumSayisi =
        document.getElementById("commentNumber");

    if (!yorumAlani) {
        return;
    }

    const anahtar =
        String(secilenFikirId);

    const liste =
        yorumlar[anahtar] || [];

    if (yorumSayisi) {
        yorumSayisi.textContent =
            liste.length;
    }

    yorumAlani.innerHTML = "";

    if (liste.length === 0) {
        yorumAlani.innerHTML = `
            <div class="no-comment">
                Henüz yorum yok.
            </div>
        `;

        return;
    }

    liste.forEach(yorum => {

        const kutu =
            document.createElement("div");

        kutu.className =
            "comment";

        kutu.innerHTML = `
            <div class="comment-name">
                ${htmlTemizle(yorum.yazar)}
            </div>

            <div class="comment-text">
                ${htmlTemizle(yorum.metin)}
            </div>
        `;

        yorumAlani.appendChild(kutu);
    });
}


// ==========================================
// MODAL YORUMU
// ==========================================

const yorumGonderButonu =
    document.getElementById("commentBtn");

const yorumKutusu =
    document.getElementById("commentInput");

if (yorumGonderButonu) {
    yorumGonderButonu.addEventListener(
        "click",
        modalYorumEkle
    );
}

if (yorumKutusu) {
    yorumKutusu.addEventListener(
        "keydown",
        function (olay) {

            if (olay.key === "Enter") {
                olay.preventDefault();
                modalYorumEkle();
            }

        }
    );
}


function modalYorumEkle() {
    if (secilenFikirId === null) {
        return;
    }

    const metin =
        yorumKutusu.value.trim();

    if (!metin) {
        return;
    }

    const anahtar =
        String(secilenFikirId);

    if (!yorumlar[anahtar]) {
        yorumlar[anahtar] = [];
    }

    yorumlar[anahtar].push({
        yazar: "Sen",
        basHarfler: "S",
        metin,
        tarih: Date.now()
    });

    yorumKutusu.value = "";

    verileriKaydet();

    yorumlariGoster();

    // Ana sayfadaki yorum sayısını da güncelle.
    yorumlariCanliGuncelle(
        secilenFikirId
    );
}


// ==========================================
// YENİ FİKİR PENCERESİ
// ==========================================

const yeniFikirButonu =
    document.getElementById("newIdeaBtn");

if (yeniFikirButonu) {

    yeniFikirButonu.addEventListener(
        "click",
        function () {

            if (yeniFikirPenceresi) {
                yeniFikirPenceresi.classList.add(
                    "show"
                );
            }

        }
    );
}


const yeniFikirKapat =
    document.getElementById("closeNewIdea");

if (yeniFikirKapat) {

    yeniFikirKapat.addEventListener(
        "click",
        function () {

            yeniFikirPenceresi.classList.remove(
                "show"
            );

        }
    );
}


// ==========================================
// FİKİR PAYLAŞ
// ==========================================

const fikirPaylasButonu =
    document.getElementById("publishBtn");

if (fikirPaylasButonu) {

    fikirPaylasButonu.addEventListener(
        "click",
        fikirPaylas
    );
}


function fikirPaylas() {

    const baslik =
        document
            .getElementById("ideaTitle")
            .value
            .trim();

    const aciklama =
        document
            .getElementById("ideaDescription")
            .value
            .trim();

    const kategori =
        document
            .getElementById("ideaCategory")
            .value;

    if (!baslik || !aciklama) {
        return;
    }

    const yeniFikir =
        fikirOlustur(
            baslik,
            aciklama,
            kategori,
            ["Sen", "S"],
            0,
            Date.now()
        );

    fikirler.unshift(
        yeniFikir
    );

    verileriKaydet();

    document
        .getElementById("ideaTitle")
        .value = "";

    document
        .getElementById("ideaDescription")
        .value = "";

    yeniFikirPenceresi.classList.remove(
        "show"
    );

    // Yeni fikir en üstte görünsün.
    aktifSayfa = 1;
    aktifBolum = "latest";

    document
        .querySelectorAll(".nav-button")
        .forEach(buton => {
            buton.classList.remove(
                "active"
            );
        });

    const enYeniButonu =
        document.querySelector(
            '[data-page="latest"]'
        );

    if (enYeniButonu) {
        enYeniButonu.classList.add(
            "active"
        );
    }

    ekraniOlustur();
}


// ==========================================
// MENÜ
// ==========================================

document
    .querySelectorAll(".nav-button")
    .forEach(buton => {

        buton.addEventListener(
            "click",
            function () {

                document
                    .querySelectorAll(
                        ".nav-button"
                    )
                    .forEach(digerButon => {
                        digerButon.classList.remove(
                            "active"
                        );
                    });

                buton.classList.add(
                    "active"
                );

                aktifBolum =
                    buton.dataset.page;

                aktifSayfa = 1;

                ekraniOlustur();
            }
        );

    });


// ==========================================
// ARAMA
// ==========================================

if (aramaAlani) {

    aramaAlani.addEventListener(
        "input",
        function () {

            aktifSayfa = 1;

            ekraniOlustur();

        }
    );

}


// ==========================================
// KATEGORİ
// ==========================================

if (kategoriAlani) {

    kategoriAlani.addEventListener(
        "change",
        function () {

            aktifSayfa = 1;

            ekraniOlustur();

        }
    );

}


// ==========================================
// SAYFALAMA
// ==========================================

function sayfalamaOlustur(
    toplamSayfa
) {

    if (!sayfalamaAlani) {
        return;
    }

    sayfalamaAlani.innerHTML = "";

    if (toplamSayfa <= 1) {

        if (sayfaBilgisi) {
            sayfaBilgisi.textContent = "";
        }

        return;
    }

    if (sayfaBilgisi) {
        sayfaBilgisi.textContent =
            "Sayfa " +
            aktifSayfa +
            " / " +
            toplamSayfa;
    }

    for (
        let sayfa = 1;
        sayfa <= toplamSayfa;
        sayfa++
    ) {

        const buton =
            document.createElement(
                "button"
            );

        buton.type = "button";

        buton.className =
            "page";

        if (
            sayfa === aktifSayfa
        ) {
            buton.classList.add(
                "current"
            );
        }

        buton.textContent =
            sayfa;

        buton.addEventListener(
            "click",
            function () {

                aktifSayfa =
                    sayfa;

                ekraniOlustur();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

        sayfalamaAlani.appendChild(
            buton
        );
    }
}


// ==========================================
// 10 SANİYEDE 5 YENİ FİKİR
// ==========================================

setInterval(
    function () {

        for (
            let i = 0;
            i < TEK_SEFERDE_FIKIR;
            i++
        ) {

            const rastgele =
                fikirHavuzu[
                    Math.floor(
                        Math.random() *
                        fikirHavuzu.length
                    )
                ];

            const kisi =
                kisiler[
                    Math.floor(
                        Math.random() *
                        kisiler.length
                    )
                ];

            const yeniFikir =
                fikirOlustur(
                    rastgele[0],
                    rastgele[1],
                    rastgele[2],
                    kisi,
                    Math.floor(
                        Math.random() * 16
                    ),
                    Date.now() - i
                );

            fikirler.unshift(
                yeniFikir
            );
        }

        verileriKaydet();

        // Kullanıcının bulunduğu sayfa korunuyor.
        ekraniOlustur();

    },
    YENI_FIKIR_SURESI
);


// ==========================================
// DETAY PENCERESİNİ KAPAT
// ==========================================

const detayKapat =
    document.getElementById("closeDetail");

if (detayKapat) {

    detayKapat.addEventListener(
        "click",
        function () {

            detayPenceresi.classList.remove(
                "show"
            );

            secilenFikirId = null;

        }
    );
}


// ==========================================
// PENCERE DIŞINA TIKLAMA
// ==========================================

document.addEventListener(
    "click",
    function (olay) {

        if (
            olay.target ===
            yeniFikirPenceresi
        ) {

            yeniFikirPenceresi.classList.remove(
                "show"
            );
        }

        if (
            olay.target ===
            detayPenceresi
        ) {

            detayPenceresi.classList.remove(
                "show"
            );

            secilenFikirId = null;
        }

    }
);


// ==========================================
// ESC
// ==========================================

document.addEventListener(
    "keydown",
    function (olay) {

        if (olay.key !== "Escape") {
            return;
        }

        if (yeniFikirPenceresi) {
            yeniFikirPenceresi.classList.remove(
                "show"
            );
        }

        if (detayPenceresi) {
            detayPenceresi.classList.remove(
                "show"
            );
        }

        secilenFikirId = null;

    }
);


// ==========================================
// ZAMAN
// ==========================================

function zamanGoster(
    zaman
) {

    const saniye =
        Math.max(
            0,
            Math.floor(
                (
                    Date.now() -
                    Number(zaman)
                ) / 1000
            )
        );

    if (saniye < 10) {
        return "az önce";
    }

    if (saniye < 60) {
        return (
            saniye +
            " saniye önce"
        );
    }

    const dakika =
        Math.floor(
            saniye / 60
        );

    if (dakika < 60) {
        return (
            dakika +
            " dakika önce"
        );
    }

    const saat =
        Math.floor(
            dakika / 60
        );

    if (saat < 24) {
        return (
            saat +
            " saat önce"
        );
    }

    const gun =
        Math.floor(
            saat / 24
        );

    return (
        gun +
        " gün önce"
    );
}


// ==========================================
// HTML GÜVENLİĞİ
// ==========================================

function htmlTemizle(
    deger
) {

    const eleman =
        document.createElement(
            "div"
        );

    eleman.textContent =
        String(
            deger ?? ""
        );

    return eleman.innerHTML;
}


// ==========================================
// BAŞLAT
// ==========================================

verileriYukle();

ekraniOlustur();
