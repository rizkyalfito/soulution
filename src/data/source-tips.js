class tipsSource {
  static async ShortTips() {
    try {
      const response = await fetch('./data/shortTips-data.json');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseJson = await response.json();
      return responseJson.tipsJangkaPendek;
    } catch (error) {
      console.error('Error while fetching data:', error);
    }
  }

  static async LongTips() {
    try {
      const response = await fetch('./data/longTips-data.json');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseJson = await response.json();
      return responseJson.tipsJangkaPanjang;
    } catch (error) {
      console.error('Error while fetching data:', error);
    }
  }
}

const detailShortData = [
  {
    id: '1a',
    title: 'Coba Citra Terpandu',
    teks: 'Pembayangan terpandu seperti berlibur singkat dalam pikiran Anda. Ini bisa melibatkan membayangkan diri sendiri berada di tempat bahagia Anda mungkin membayangkan diri Anda duduk di pantai, mendengarkan deburan ombak, mencium aroma laut, dan merasakan hangatnya pasir di bawah Anda. Citra terpandu dapat dilakukan dengan rekaman di mana Anda mendengarkan seseorang memandu Anda melalui pemandangan yang damai. Atau, setelah Anda mengetahui cara melakukannya sendiri, Anda dapat mempraktikkan imajinasi terpandu sendiri. Cukup tutup mata Anda sebentar dan jalani diri Anda melalui pemandangan yang damai. Pikirkan tentang semua pengalaman indrawi yang Anda alami dan biarkan diri Anda merasa seperti Anda benar-benar berada di sana. Setelah beberapa menit, buka mata Anda dan kembali ke momen saat ini.',
    picture: 'https://images.unsplash.com/photo-1508558936510-0af1e3cccbab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2a',
    title: 'Merenungkan',
    teks: 'Meditasi memberikan pereda stres jangka pendek serta manfaat pengelolaan stres jangka panjang. Ada berbagai bentuk meditasi yang bisa dicoba–masing-masing unik dan memiliki daya tarik tersendiri. Anda mungkin mengembangkan mantra yang Anda ulangi dalam pikiran Anda saat Anda menarik napas dalam-dalam secara perlahan. Atau, Anda mungkin meluangkan beberapa menit untuk melatih kesadaran, yang melibatkan keberadaan pada saat ini. Cukup perhatikan apa yang Anda lihat, dengar, rasakan, sentuh, dan cium. Saat Anda fokus pada saat ini dan saat ini, Anda tidak akan bisa merenungkan sesuatu yang telah terjadi dan Anda tidak bisa mengkhawatirkan sesuatu di masa depan. Meditasi dan kewaspadaan membutuhkan latihan, namun hal ini dapat membuat perbedaan besar pada tingkat stres Anda secara keseluruhan karena membawa Anda kembali ke masa kini.',
    picture: 'https://images.unsplash.com/photo-1548620798-00ff123d4047?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3a',
    title: 'Berlatih Relaksasi Otot Progresif',
    teks: 'Untuk berlatih, Anda bisa memulainya dengan beberapa kali menarik napas dalam-dalam. melibatkan relaksasi semua otot di tubuh Anda, kelompok demi kelompok. Kemudian, berlatihlah mengencangkan dan mengendurkan setiap kelompok otot, dimulai dari dahi hingga ke jari kaki. Dengan latihan, Anda akan belajar mengenali ketegangan dan ketegangan pada otot dan Anda akan bisa lebih mudah rileks. Namun, setiap kali Anda berlatih, Anda akan merasakan perasaan relaksasi yang melanda seluruh tubuh Anda. ',
    picture: 'https://images.unsplash.com/photo-1562771379-eafdca7a02f8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '4a',
    title: 'Fokus pada Pernapasan',
    teks: 'Hanya berfokus pada napas atau mengubah cara bernapas dapat membuat perbedaan besar pada tingkat stres Anda secara keseluruhan. Teknik pernapasan dapat menenangkan tubuh dan otak Anda hanya dalam beberapa menit. Kabar terbaiknya adalah tidak ada orang di sekitar Anda yang tahu bahwa Anda melakukannya. Jadi, apakah Anda sedang berada dalam rapat yang menegangkan atau sedang duduk di teater yang ramai, latihan pernapasan bisa menjadi kunci untuk mengurangi stres Anda. Meskipun ada banyak latihan pernapasan yang berbeda, seperti pernapasan karate, beberapa latihan sederhana meliputi: 1. Tarik napas melalui hidung dan perhatikan perut Anda terisi udara. Hitung perlahan sampai tiga saat Anda menarik napas. Tahan selama satu detik, lalu hembuskan perlahan melalui hidung sambil menghitung sampai tiga lagi. 2. Tarik napas melalui hidung dan bayangkan Anda menghirup udara yang damai dan tenang. Bayangkan udara menyebar ke seluruh tubuh Anda. Saat Anda mengeluarkan napas, bayangkan Anda sedang menghembuskan stres dan ketegangan.',
    picture: 'https://images.unsplash.com/photo-1529693662653-9d480530a697?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '5a',
    title: 'Jalan-jalan',
    teks: 'Olahraga adalah pereda stres luar biasa yang dapat bekerja dalam hitungan menit. Berjalan-jalan memungkinkan Anda menikmati perubahan pemandangan, yang dapat membawa Anda ke dalam kerangka berpikir yang berbeda, dan juga membawa manfaat dari olahraga. Jadi apakah Anda hanya perlu berjalan-jalan di sekitar kantor untuk beristirahat dari tugas yang membuat frustrasi atau Anda memutuskan untuk berjalan-jalan di taman setelah bekerja, berjalan kaki adalah cara sederhana namun efektif untuk meremajakan pikiran dan tubuh Anda.',
    picture: 'https://images.unsplash.com/photo-1536698258381-e82b0ef8775f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '6a',
    title: 'Dapatkan Pelukan Dari Orang Tersayang',
    teks: 'Sentuhan fisik dapat membantu menghilangkan stres Anda. Memeluk orang yang dicintai bisa sangat bermanfaat. Saat Anda memeluk seseorang, oksitosin (juga dikenal sebagai hormon pelukan) dilepaskan. Oksitosin dikaitkan dengan tingkat kebahagiaan yang lebih tinggi dan tingkat stres yang lebih rendah. Oksitosin mengurangi hormon stres norepinefrin dan dapat menghasilkan rasa rileks. Jadi jangan takut untuk meminta pelukan pada orang tersayang jika kamu membutuhkannya. Ini baik untuk Anda berdua dan ini bisa menjadi salah satu bentuk pereda stres paling sederhana yang tersedia.',
    picture: 'https://images.unsplash.com/photo-1620862291688-ab7d606b7221?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '7a',
    title: 'Nikmati Aromaterapi',
    teks: 'Aromaterapi memiliki manfaat nyata untuk menghilangkan stres dapat membantu Anda merasa berenergi, lebih rileks, atau lebih hadir pada saat itu. Penelitian yang muncul menunjukkan bahwa aroma tertentu dapat mengubah aktivitas gelombang otak dan menurunkan hormon stres dalam tubuh. Jadi apakah Anda menyukai lilin, diffuser, atau produk tubuh, pertimbangkan untuk memasukkan beberapa aromaterapi ke dalam hari Anda.',
    picture: 'https://images.unsplash.com/photo-1635752496514-1faa92975e9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '8a',
    title: 'Buat Karya Seni',
    teks: 'Menghubungi sisi kreatif Anda mungkin mudah bagi Anda selama masa kanak-kanak, tetapi belum terlambat untuk melakukannya lagi jika Anda sudah kehilangan minat terhadap karya seni. Jika Anda tidak suka menggambar atau melukis, pertimbangkan untuk mewarnai di buku mewarnai. Buku mewarnai untuk orang dewasa semakin populer, dan untuk alasan yang bagus—mewarnai bisa menjadi pereda stres yang hebat. Penelitian secara konsisten menunjukkan bahwa mewarnai dapat memberikan efek meditatif. Sebuah studi menemukan bahwa tingkat kecemasan menurun pada orang yang mewarnai pola geometris yang kompleks, menjadikannya cara yang tepat untuk mengurangi stres.',
    picture: 'https://images.unsplash.com/photo-1613564190017-da7d7521b591?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const detailShortSource = {
  getTipById(id) {
    return detailShortData.find((tip) => tip.id === id);
  },
};

const detailLongData = [
  {
    id: '1b',
    title: 'Makan Diet Seimbang',
    teks: 'dan mengonsumsi makanan tinggi lemak dan tinggi gula dapat memberikan rasa lega sementara yang menambah stres jangka panjang Anda. Karbohidrat olahan, seperti kue dan keripik kentang, dapat menyebabkan lonjakan gula darah. Saat gula darah Anda turun, Anda mungkin mengalami lebih banyak stres dan kecemasan. Mengonsumsi makanan yang sehat dapat membantu Anda melawan stres dalam jangka panjang. Makanan seperti telur, alpukat, dan kenari mendukung pengaturan suasana hati dan keseimbangan energi. ',
    picture: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2b',
    title: 'Cobalah Suplemen Pereda Stres',
    teks: 'Beberapa vitamin dan suplemen mungkin bermanfaat untuk menghilangkan stres. Vitamin apa yang membantu mengatasi stres? Multivitamin harian dapat membantu mengatasi defisit nutrisi dan memastikan Anda mendapatkan vitamin dan mineral yang diperlukan untuk merasakan yang terbaik. Suplemen lain yang dapat membantu menghilangkan stres meliputi: 1. Hormon alami ini dapat membantu mengatur ritme sirkadian tubuh Anda. Memperbaiki kualitas tidur dapat membantu Anda mengurangi stres. 2. Ashwagandha: Ramuan adaptogenik ini dianggap membantu meningkatkan ketahanan tubuh terhadap stres mental dan fisik. 3. L-theanine: Asam amino ini telah terbukti membantu mengurangi stres, meningkatkan relaksasi, dan meningkatkan kualitas tidur. 4. Vitamin B: Beberapa penelitian menunjukkan bahwa vitamin B dapat membantu menurunkan kadar homosistein, mengurangi stres, dan meningkatkan suasana hati.',
    picture: 'https://images.unsplash.com/photo-1606940743881-b33f4b04d661?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3b',
    title: 'Luangkan Waktu untuk Aktivitas Santai',
    teks: 'Namun, banyak orang merasa hidupnya terlalu sibuk untuk melakukan hobi, permainan, atau kesenangan ekstra. Namun memasukkan waktu luang ke dalam jadwal Anda bisa menjadi kunci untuk membantu Anda merasa yang terbaik. Dan ketika Anda merasa lebih baik, kinerja Anda akan lebih baik, yang berarti waktu senggang dapat membuat waktu kerja Anda lebih efisien. Apakah Anda senang merawat taman atau suka membuat selimut, hobi dan waktu luang adalah kunci untuk menjalani hidup terbaik Anda.',
    picture: 'https://images.unsplash.com/photo-1590861840597-8ca56f8096a8?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '4b',
    title: 'Kembangkan Kebiasaan Berbicara pada Diri Sendiri yang Positif',
    teks: 'Cara Anda berbicara kepada diri sendiri penting. Kritik diri yang keras, keraguan diri, dan prediksi bencana tidak membantu. Jika Anda terus-menerus memikirkan hal-hal seperti, Saya tidak punya waktu untuk ini, dan Saya tidak tahan dengan ini, Anda akan membuat diri Anda stres. Penting untuk belajar berbicara kepada diri sendiri dengan cara yang lebih realistis dan penuh kasih sayang. Saat Anda menyebut diri sendiri atau meragukan kemampuan Anda untuk sukses, balaslah dengan dialog batin yang lebih ramah. Percakapan diri yang positif dapat membantu Anda mengembangkan pandangan yang lebih sehat. Dan percakapan yang optimis dan penuh kasih dapat membantu Anda mengelola emosi dan mengambil tindakan positif. ',
    picture: 'https://images.unsplash.com/photo-1623185131451-ea1c7552afc3?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '5b',
    title: 'Berlatih Yoga',
    teks: 'Yoga menggabungkan gerakan fisik, meditasi, olahraga ringan, dan pernapasan terkontrol semuanya memberikan pereda stres yang sangat baik. Melengkapi Pengobatannya Bagaimana yoga mengurangi stres? Kognisi dan emosi yang terkandung menyoroti pengaruh sistem muskuloskeletal. Dan meskipun Anda mungkin memperoleh manfaat langsung dari satu sesi yoga, kemungkinan besar Anda akan menerima manfaat jangka panjang jika Anda memasukkannya ke dalam hidup Anda secara konsisten. Yoga menawarkan berbagai manfaat fisik, psikologis, dan spiritual. Untuk memulai, Anda dapat mengikuti kelas, mendaftar program online, atau menggunakan aplikasi untuk membantu Anda mulai berlatih.',
    picture: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '6b',
    title: 'Ungkapkan Rasa Terima Kasih',
    teks: 'Rasa Syukur membantu Anda mengenali semua hal yang patut Anda syukuri. Entah Anda bersyukur atas hari yang cerah atau bersyukur Anda tiba di tempat kerja dengan selamat, pikirkan semua hal baik yang Anda miliki dalam hidup. Rasa syukur juga mengingatkan Anda akan semua sumber daya yang Anda miliki untuk mengatasi stres, yang bisa sangat memberdayakan. Studi juga menunjukkan orang yang bersyukur menikmati kesehatan mental yang lebih baik, stres yang lebih rendah, dan kualitas hidup yang lebih baik. setiap hari, jadikan rasa syukur sebagai kebiasaan rutin.',
    picture: 'https://images.unsplash.com/photo-1503610594381-aed30c818b8e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '7b',
    title: 'Prioritaskan Latihan',
    teks: 'Dan kabar terbaiknya adalah, ada banyak jenis aktivitas berbeda yang dapat mengurangi stres Anda. Efek kebiasaan dan olahraga akut pada biomarker air liur sebagai respons terhadap stres psikososial. Bergabunglah dengan pusat kebugaran, ikuti kelas, atau berolahraga di luar ruangan. Ingatlah bahwa ada banyak cara berbeda untuk meningkatkan aktivitas fisik di hari Anda juga. Jalan kaki, latihan kekuatan, kayak, hiking, dan kelas spin hanyalah beberapa contoh cara menghilangkan stres.',
    picture: 'https://images.unsplash.com/uploads/141148589884100082977/a816dbd7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '8b',
    title: 'Nilai Kembali Daftar Tugas Anda',
    teks: 'Jika Anda mencoba memeras 20 jam kerja menjadi 16 jam, Anda akan merasa stres. Mengurangi beban kerja bisa menjadi kunci untuk membantu Anda menjalani hari dengan perasaan lebih baik. Apakah itu berarti keluar dari komite tempat Anda bergabung atau melibatkan mempekerjakan seseorang untuk menyelesaikan beberapa pekerjaan rumah tangga untuk Anda, Mengasah keterampilan manajemen waktu dapat memungkinkan Anda meminimalkan pemicu stres yang Anda alami, dan mengelola stres yang tidak dapat Anda hindari dengan lebih baik. Ketika Anda mampu menyelesaikan segala sesuatu yang menjadi harus dilakukan daftar tanpa stres karena terburu-buru atau lupa, seluruh hidup Anda terasa lebih mudah.',
    picture: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '9b',
    title: 'Dapatkan Dukungan Sosial',
    teks: 'Memiliki orang-orang yang suportif dalam hidup Anda adalah kunci manajemen stres. Jika Anda kekurangan dukungan emosional dan persahabatan, penting untuk mendapatkannya. Anda mungkin juga perlu memperluas jaringan Anda. Bergabunglah dengan sebuah organisasi, hadiri kelompok pendukung, atau dapatkan bantuan profesional jika Anda kekurangan orang yang mendukung dalam hidup Anda. ',
    picture: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '10b',
    title: 'Hentikan Hal-Hal yang Menambah Stres Anda',
    teks: 'Terkadang, cara terbaik untuk mengurangi stres adalah dengan menghilangkan sesuatu dari hidup Anda. Singkirkan hal-hal yang menambah stres Anda sehingga Anda bisa merasakan lebih banyak kedamaian. Menonton berita, terus-menerus terhubung dengan perangkat digital, minum alkohol, dan mengonsumsi terlalu banyak kafein hanyalah beberapa hal yang dapat menambah stres dalam hidup Anda. Melakukan beberapa perubahan pada kebiasaan sehari-hari dapat membantu Anda merasa lebih baik.',
    picture: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const detailLongSource = {
  getTipById(id) {
    return detailLongData.find((tip) => tip.id === id);
  },
};

export { tipsSource, detailShortSource, detailLongSource };
