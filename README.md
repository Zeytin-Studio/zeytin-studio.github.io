# Zeytin Studio — web sitesi

Stüdyonun tanıtım sitesi ve Play Store için gizlilik politikası.

## Klasör yapısı

```
index.html            Ana sayfa (oyunlar, iletişim)
gizlilik/index.html   Gizlilik politikası (TR + EN)
app-ads.txt           AdMob doğrulama dosyası
assets/style.css      Stiller (açık + koyu tema)
assets/site.js        Dil seçimi ve e-posta kopyalama
assets/favicon.svg    Zeytin ikonu
```

## Yayınlama (GitHub Pages, ücretsiz)

1. GitHub'da sağ üstteki **+ → New organization** ile `zeytinstudio` adında ücretsiz bir organizasyon açın.
   Ad alınmışsa `zeytin-studio` gibi bir varyasyon seçin; aşağıdaki adreslerde de onu kullanın.
2. Organizasyonun içinde **zeytinstudio.github.io** adında **public** bir repo oluşturun.
   Repo adı organizasyon adıyla birebir aynı olmalı, yoksa site o adreste açılmaz.
3. Bu klasördeki tüm dosyaları repoya yükleyin (**Add file → Upload files**, sürükle-bırak yeterli).
4. **Settings → Pages** bölümünde kaynağın **Deploy from a branch → main → / (root)** olduğundan emin olun.
5. Birkaç dakika içinde site yayında olur:
   - Ana sayfa: `https://zeytinstudio.github.io/`
   - Gizlilik politikası: `https://zeytinstudio.github.io/gizlilik/`
   - İngilizce gizlilik politikası: `https://zeytinstudio.github.io/gizlilik/?lang=en`

## Yayına almadan önce

- [ ] **E-posta:** `zeytinstudio@gmail.com` adresini açın ya da tüm dosyalarda kendi adresinizle değiştirin
      (`index.html` ve `gizlilik/index.html`).
- [ ] **app-ads.txt:** `pub-0000000000000000` yerine kendi AdMob yayıncı kimliğinizi yazın.
      AdMob → **Ayarlar → Hesap bilgileri → Yayıncı kimliği**.
- [ ] **Reklam onay formu:** Politikada Avrupa kullanıcılarına onay formu gösterildiği yazıyor.
      Uygulamaya Google UMP (User Messaging Platform) eklenmiş olmalı.
- [ ] **Hedef kitle:** Politika "13 yaş altına yönelik değil" diyor. Play Console'da hedef yaş grubunu buna uygun seçin.

## Play Console'da kullanılacak alanlar

- **Gizlilik politikası URL'si:** `https://zeytinstudio.github.io/gizlilik/`
- **Web sitesi (mağaza kaydı → iletişim bilgileri):** `https://zeytinstudio.github.io/`
  AdMob, `app-ads.txt` dosyasını bu adreste arar. Web sitesi alanını doldurmazsanız AdMob doğrulaması yapılamaz.

## Yeni oyun eklemek

`index.html` içinde bir `<article class="game">` bloğunu kopyalayıp adı, açıklamayı ve durumu değiştirin.
Oyun yayınlandığında `chip soon` etiketini Play Store linkine çevirebilirsiniz.
