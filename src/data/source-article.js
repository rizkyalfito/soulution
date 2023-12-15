class articleSource {
  static async article() {
    try {
      const response = await fetch('./data/article-data.json');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseJson = await response.json();
      return responseJson.artikelData;
    } catch (error) {
      console.error('Error while fetching data:', error);
    }
  }
}

const detailArticleData = [
  {
    id: '1c',
    title: 'Tingkat Stress Gen Z Lebih Tinggi Dibanding Milenial dan Gen X',
    teks: 'Generasi Z yang lahir di antara tahun 1997-2012 kini memiliki peran penting dalam menjalani perputaran perkembangan di Indonesia. Lahir bersamaan dengan era digital dan internet dengan kecepatan pegerakannya yang justru semakin menambah tuntutan pada generasi Z semakin rawan stress. Berdasarkan survei yang dilakukan oleh Alva Research Center, menilai bahwa generasi Z lebih banyak merasa stres dan cemas dibanding kelompok generasi yang lebih tua. Survei yang dilakukan melalui wawancara tatap muka terhadap 1.529 responden yang berasal dari generasi Z, milenial, dan generasi X di seluruh Indonesia ini membagi indeksnya menjadi tiga kategori, yakni cukup cemas, cemas, dan sangat cemas. Grafik menunjukan, dari generasi Z yang merasa cukup cemas menunjukkan persentase 40 persen, cemas 23,3 persen, dan sangat cemas 5 persen. Lalu kemudian, kelompok responden milenial menunjukkan tingkat cukup cemas dengan 38,8 persen, cemas 23,5 persen, dan sangat cemas 4,6 persen. Disusul oleh kelompok generasi X yang memiliki tingkat kecemasan terendah, yakni cemas 31,5 persen, cemas 21,3 persen, dan sangat cemas 2,8 persen.Menilik data Alvara, penyebab tingkat kecemasan generasi Z disebut lebih tinggi karena generasi mereka belum memiliki banyak pengalaman dalam menghadapi tekanan. Hal ini berbeda dengan generasi pendahulunya seperti generasi X atau generasi kelahiran tahun 1965-1980 dan milenial atau generasi Y yang lahir pada tahun 1981-1994.Maka dari itu, banyak generasi Z yang mudah berpindah-pindah tempat kerja guna mencari lingkungan yang lebih nyaman dan tidak memiliki tekanan tinggi. Lebih lanjut, survei ini dilakukan di 34 provinsi di seluruh Indonesia dan menggunakan metode multistage random sampling pada 20-31 Maret 2022.',
    picture: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'Nabilah Nur Alifah, Lip M Aditya',
    source: 'Goodstats.id',
  },
  {
    id: '2c',
    title: 'Bahaya Stress Berlebihan',
    teks: 'Sebenarnya stres tidak selalu memberikan dampak negatif karena stres juga bisa berdampak positif kepada manusia. Stres ibarat dua sisi mata uang logam, yaitu memiliki sisi baik dan sisi buruk. Stres yang memberikan dampak positif diistilahkan dengan Eustress, dan stres yang memberikan dampak negatif distilahkan dengan distress. Hasil reaksi tubuh terhadap sumber-sumber stres merupakan eustress. Ketika eustress (stres yang berdampak baik) dialami seseorang, maka terjadilah peningkatan kinerja dan kesehatan. Sebaliknya ketika seseorang mengalami distress (stres yang berdampak buruk), maka mengkibatkan semakin buruknya kinerja, kesehatan dan timbul gangguan hubungan dengan orang lain. Stres yang bisa berdampak positif (eustress) terhadap kesehatan dan kinerja adalah pada saat stres itu tidak melebihi tingkat maksimal. Sedangkan stres yang yang berlebihan atau melebihi tingkat maksimal bisa memberikan dampak negatif (distress) terhadap kinerja dan kesehatan. Timbulnya stres yang berdampak postif atau negative ditentukan oleh jumlah tuntutan-tuntutan yang diterima dan kemampuan yang tersedia baik secara fisik dan psikologis untuk menghadapi sumber stres. Stres merupakan pengalaman hidup yang pasti dialami oleh setiap orang. Perubahan psikososial dapat merupakan tekanan mental (stressor psikosial) sehingga bagi sebagian individu dapat menimbulkan perubahan dalam kehidupan dan berusaha beradaptasi untuk menanggulanginya. Stresor psikososial, seperti perceraian dalam rumah tangga, masalah orang tua dengan banyaknya kenakalan remaja, hubungan interpersonal yang tidak baik dengan teman dan sebagainya. Namun, tidak semua orang dapat beradaptasi dan mengatasi stressor akibat perubahan tersebut sehingga sehingga ada yang mengalami stres, gangguan penyesuaian diri, maupun sakit. Ketika seseorang mengalami stres yang berat, akan memperlihatkan tanda-tanda mudah lelah, sakit kepala, hilang nafsu, mudah lupa, bingung, gugup, kehilangan gairah seksual, kelainan pencernaan dan tekanan darah tinggi. Orang hidup tidak mungkin terhindar dari stres untuk itu kita harus dapat menyikapi dan mengelola stres dengan baik sehingga kualitas hidup kita menjadi lebih baik. Bila gangguan keseimbangan ini terjadi cukup lama akan timbul ansietas kronik. Sebagai faktor yang memberi distres, ia akan menimbulkan banyak keluhan, dalam keadaan akut dalam bentuk kegelisahan, dalam bentuk khronis, gangguan fisik maupun mental, kebosanan, kelelahan dan akhirnya kematian. Penatalaksanaan stres tentunya sesual sifatnya. Bila ia membebani manfaat dalam hidup ia selayaknya dinikmati. Bila ia menimbulkan distres, dalam keadaan akut, tersedia berbagai alternative untuk mengatasinya, baik terhadap stresnya sendiri maupun dampak yang ditimbulkannya.Stress dapat dilihat dari 2 sisi yang berlawanan. Pertama, stress memberikan keuntungan bagi kita. Mengapa? Stres menjadikan kita lebih kuat dengan berusaha mencari solusi atas penyebab masalah dan stress yang sedang dihadapi. Stres juga memberikan banyak pelajaran bagi tubuh kita untuk menyesuaikan diri terhadap masalah yang dihadapi. Kedua, stres juga bisa berbahaya, karena paparan respons stres yang berulang-ulang pada tubuh kita telah terbukti menyebabkan masalah kesehatan fisik dan psikologis yang bertahan lama, seperti kecemasan dan depresi.Dalam keadaan kronis, gangguan yang timbul tentunya harus dihadapi dengan pengobatan. Di sini peran kerja sama dari berbagai bidang kedokteran perlu bila gangguan bersifat onganik. Penting justru peran psiklatri dalam menghadapi gangguan-gangguan tersebut. Dalam menghadapi gangguan psikiatrik mural terdapat pilihan cara menghadapi dan farmakoterapi hingga kepada psikoterapi.',
    picture: 'https://images.unsplash.com/photo-1533537841959-705741f3d3a5?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'Siti Zainab Purwanti, S.Kep, Ners',
    source: 'Kemenkes',
  },
  {
    id: '3c',
    title: 'Alasan Utama Gen Z Rentan Kena Masalah Mental Menurut Studi',
    teks: 'Depresi adalah salah satu jenis gangguan mental yang rentan dialami oleh Generasi Z atau Gen Z. Berdasarkan penelitian University College London, tingkat depresi Gen Z dua pertiga lebih tinggi daripada millenial. Bahkan, berdasarkan hasil riset Pew Research Center, sekitar 70 persen remaja dari berbagai ras, jenis kelamin, dan tingkat pendapatan keluarga mengalami kecemasan dan depresi. Melansir dari McKinsey Health Institute, menurut survei Gen Z Global 2022, perempuan Gen Z dua kali lipat lebih berisiko memiliki kesehatan mental yang buruk jika dibandingkan dengan laki-laki. Sebagian besar negara menunjukkan bahwa Gen Z memiliki kesehatan mental yang buruk tanpa ada penyebab pasti. Namun, McKinsey Health Institute menarik kesimpulan bahwa ada beberapa faktor khusus usia yang dapat memengaruhi kesehatan mental Gen Z, seperti tahap perkembangan, tingkat keterlibatan dengan layanan kesehatan, sikap keluarga atau masyarakat, dan media sosial. Menurut survei kepada lebih dari 42 ribu responden dari 26 negara tersebut, lebih dari sepertiga responden Gen Z mengaku menghabiskan lebih dari dua jam sehari untuk menggunakan media sosial. Mereka mengaku, media sosial sangat memengaruhi kesehatan mental. Sosial media berkontribusi terhadap kesehatan mental Gen Z Berdasarkan laporan survei yang sama, Gen Z yang menghabiskan lebih dari dua jam sehari untuk menggunakan media sosial cenderung memiliki kondisi kesehatan mental yang buruk. Bila dibandingkan dengan generasi lainnya, Gen Z adalah generasi yang paling banyak memperoleh dampak negatif dari media sosial. Responden dari negara berpenghasilan tinggi dua kali lebih mungkin melaporkan dampak negatif media sosial terhadap kehidupan mereka dibandingkan responden dari negara berpenghasilan menengah ke bawah, tulis laporan Gen Z Global 2022 McKinsey Health Institute, dikutip Senin (14/8/2023). Sebagian besar perempuan Gen Z mengaku, media sosial memberikan dampak negatif berupa rasa takut tertinggal tren baru atau Fear of Missing Out/FOMO (32 persen), khawatir terhadap citra tubuh (32 persen), dan kepercayaan diri (13 persen). Responden Gen Z dari Eropa dan Oseania adalah negara yang paling banyak melaporkan dampak negatif dari media sosial (32 persen). Sementara itu, responden dari Asia melaporkan jumlah yang lebih kecil (19 persen). Sementara itu, sebuah studi lain pada orang dewasa muda menunjukkan bahwa penggunaan media sosial yang tinggi berkaitan erat dengan tingkat kesejahteraan yang lebih buruk. Lalu, penelitian lain menemukan bahwa media sosial berpengaruh besar pada kesehatan mental mereka daripada waktu yang dihabiskan. ',
    picture: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'Rindi Salsabila',
    source: 'CNBC Indonesia',
  },
  {
    id: '4c',
    title: 'Masalah Finansial Jadi Faktor Utama Gen Z dan Milenial Alami Stres',
    teks: 'Biaya hidup yang semakin mahal merupakan salah satu dampak dari inflasi. Menurut survei Deloitte mengenai pola perilaku gen Z dan milenial 2022, sebagian besar responden mengaku prihatin dengan keadaan dunia saat ini. Kelompok usia gen Z dan Milenial dilaporkan khawatir akan biaya hidup yang mahal, isu perubahan iklim, hingga konflik geopolitik. Mayoritas dari mereka bertekad untuk mendorong perubahan sosial yang positif, seiring dengan menurunnya angka penyebaran Covid-19 secara global. Akan tetapi, mereka juga mengaku masih kesulitan dalam menghadapi permasalahan hidup sehari-hari, seperti problematika keuangan serta kurangnya keseimbangan waktu dan pekerjaan (work-life balance) yang menyebabkan tingginya tingkat stres. Sementara, masalah gaji, kelelahan, dan kesehatan mental merupakan alasan utama gen Z dan milenial meninggalkan pekerjaan mereka selama dua tahun terakhir. Berdasarkan laporan Deloitte, sebagian besar dari mereka lebih memprioritaskan lingkungan kerja yang nyaman, keseimbangan waktu yang baik, dan peluang pengembangan diri dalam mencari pekerjaan. Laporan ini menunjukkan bahwa banyak dari gen Z dan milenial menilai kembali apa saja yang paling penting bagi mereka di tengah ketidakpastian global saat ini. Tempat kerja dituntut untuk memberdayakan para pekerjanya, melakukan perubahan berkelanjutan, termasuk memberikan kompensasi yang lebih tinggi, tindakan untuk mengatasi perubahan iklim, hingga fokus terhadap kesejahteraan, jelas Michele Parmelee selaku Deputi CEO Deloitte Global. Adapun, survei tersebut melibatkan sebanyak 23.220 responden yang berasal dari total 46 negara, termasuk Amerika Utara, Amerika Latin, Eropa Timur, Eropa Barat, Timur Tengah, Afrika, dan Asia-Pasifik. Rinciannya, sebanyak 14.808 responden berada di kelompok usia gen Z dan 8.412 responden milenial. Gen Z dan milenial sebut keuangan jadi faktor utama penyebab stres. Menurut laporan, sekitar seperempat gen Z (25%) dan milenial (21%) mengatakan, mereka kesulitan untuk mengatur keuangan karena biaya hidup yang mahal. Hal tersebut juga berdampak pada kemampuan mereka untuk menabung. Bahkan, sekitar tiga dari sepuluh responden merasa tidak yakin mereka akan pensiun dengan keadaan finansial yang stabil. Lalu, sekitar tiga perempat responden meyakini bahwa ketimpangan sosial dan jurang kemiskinan kini semakin melebar. Sementara, hanya sekitar 28% responden yang percaya bahwa situasi ekonomi di negara mereka akan membaik. Laporan menyebut bahwa kelompok usia gen Z dan milenial kerap dilanda kecemasan dan stres berlebihan. Namun, proporsi gen Z dinilai lebih besar. Sebanyak 46% gen Z mengakui bahwa mereka mengalami stres sepanjang waktu dengan proporsi yang lebih banyak pada responden perempuan. Sedangkan, persentase milenial yang mengalami stres lebih sedikit, yakni 38% responden. Perbandingan proporsi gen Z yang alami stres menurut jenis kelamin | Goodstats “Tingkat stres dan kecemasan dilaporkan signifikan pada kedua generasi, namun lebih tinggi di antara gen Z. Sebanyak 46% gen Z mengatakan mereka stres sepanjang waktu, ini konsisten dengan hasil survei selama dua tahun terakhir. Ini sebanding dengan 38% milenial, yang tingkat stresnya perlahan menurun dari 44% pada tahun 2020 lalu,” tulis Deloitte dalam laporannya. Deloitte mencatat, ada beberapa faktor yang menyebabkan gen Z dan milenial mengalami stres. Adapun, kekhawatiran akan masalah keuangan dalam jangka panjang menjadi faktor utama yang mendorong tingkat stres kedua generasi tersebut. Proporsinya adalah sebanyak 47% dari gen Z dan 43% dari milenial. Temuan ini mirip dengan survei tahun 2021.',
    picture: 'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'Nada Naurah',
    source: 'Goodstats.id',
  },
  {
    id: '5c',
    title: 'Mengapa Generasi Tua Lebih Berbahagia daripada Generasi Muda?',
    teks: 'Menjelang lebaran, generasi muda kerap mengeluarkan lelucon mengenai kesiapan ditanyai “kapan menikah?” oleh keluarga. Kendati bernada canda, lelucon itu mengemukakan salah satu faktor yang menjadi sumber kebahagiaan dan ketidakbahagiaan (tekanan) bagi orang Indonesia, khususnya Gen Z. Kolaborasi penelitian antara Snapcart dan Iwan Murty tentang tingkat kebahagiaan orang Indonesia memperlihatkan posisi keluarga yang paradoksal. Di satu sisi, keluarga diakui sebagai salah satu sumber utama kebahagiaan, tapi temuan lainnya juga mengatakan tidak sedikit yang menyebut keluarga sebagai sumber tekanan. Dari 9.863 sampel yang diteliti, 60% mengatakan bahwa keluarga adalah sumber utama kebahagiaan mereka. Namun, terdapat 46% sampel yang juga mengatakan bahwa keluarga adalah sumber utama tekanan. Sedangkan sahabat disebut oleh 10% sampel sebagai sumber tekanan. Selain keluarga dan teman, temuan Snapcart dan Iwan Murty lain yang menarik adalah terdapat 44% sampel yang mengakui sumber tekanan adalah diri sendiri. Generasi muda yang paling banyak mengakui betapa mereka menaruh tekanan kepada dirinya sendiri untuk membuktikan diri kepada dunia. Hal inilah yang kemungkinan menjadi faktor yang membuat mereka kurang bahagia dibandingkan generasi yang lebih tua. Riset yang dilakukan secara online pada 3-16 Januari 2023 ini juga menemukan fakta bahwa tingkat kebahagiaan di antara Gen Z secara keseluruhan lebih rendah daripada generasi yang lebih tua. Sampel dari gen Z (15-17 tahun) yang mengaku bahagia mencapai 27%, sampel dari milenial muda (18-27) yang mengaku bahagia mencapai 31%, sedangkan sampel dari milenial tua (28-35) yang mengaku bahagia mencapai 33%. Angka-angka tersebut lebih rendah dari para Gen X yang mengaku bahagia mencapai hingga 37%. Dalam analisisnya, Iwan Murty mengakui perbedaan kebahagiaan antara yang muda dan tua ini bisa jadi ditentukan oleh perbedaan pengalaman hidup, nilai dan prioritas. “Generasi yang lebih muda mungkin lebih menekankan masa depan seperti membangun karier, romansa, dan pembuktian diri dalam kehidupan, dan akibatnya mengalami jenis kebahagiaan yang menggairahkan. Generasi yang lebih tua mungkin memprioritaskan stabilitas dan kesehatan, fokus pada saat ini, dan mengalami kebahagiaan yang diselaraskan dengan ketenangan,” kata Iwan Murty, CEO RB Consulting. Kendati demikian, terdapat beberapa kecenderungan dalam sumber-sumber kebahagiaan ini. Generasi tua lebih mengutamakan keluarga dan kesehatan sebagai sumber kebahagiaan; temuan ini masih konsisten dengan temuan Snapcart dan Iwan Murty pada riset yang serupa pada 2017. Sedangkan sumber kebahagiaan bagi generasi muda lebih banyak tentang pertemanan dan hubungan asmara. Temuan tersebut bisa menjelaskan mengapa, misalnya, generasi tua terlihat lebih antusias merayakan lebaran dengan melakukan mudik untuk berkumpul dengan keluarga besar di kampung halaman. Mereka umumnya tidak mempunyai isu terkait kapan menikah, kapan punya anak atau pun karier karena kondisi mereka cenderung sudah lebih settle ketimbang generasi lebih muda yang masih mengejar banyak hal. Saat para responden ditanyai satu hal yang bisa membuat mereka bahagia, jawaban umum yang diberikan sangat mewakili tiga elemen penting dalam kehidupan manusia: bisa memiliki barang yang diinginkan, pengakuan dari orang lain dan melakukan ziarah keagamaan. Tiga hal tersebut mewakili atau terkait dengan tiga hal yang berbeda: tentang kepemilikan duniawi, hubungan eksternal/sosial dan pencapaian spiritual. Temuan-temuan tersebut berasal dari survei yang dilakukan secara online oleh Snapcart pada 13-16 Januari 2023 dengan total 9.863 responden berusia 11-71 tahun. Responden ini berasal dari panel Snapcart, yang memiliki lebih dari 800.000+ orang online. Kajian ini dilakukan di beberapa provinsi di Indonesia, antara lain DKI Jakarta, Banten, DI Yogyakarta, Jawa Barat, Jawa Tengah, Jawa Timur, Kalimantan, Sulawesi, Sumatera, dan provinsi lainnya. Sampel data yang cukup besar juga memungkinkan survei tersebut menemukan data-data menarik lainnya. Misalnya, pria lebih berbahagia daripada perempuan, dan orang yang menikah lebih berbahagia daripada lajang. Temuan lain juga menunjukkan 7% sampel mengatakan bahwa menikah adalah faktor yang menciptakan kebahagiaan yang sempurna dalam kehidupan, selain traveling (4%), memiliki banyak uang (7%) dan memiliki usaha yang bagus (5%). Survei tentang tingkat kebahagiaan seperti ini, menurut Iwan Murty, bisa memberikan wawasan berharga bagi pemasaran dan masyarakat. “Memahami apa yang membuat orang berbahagia dapat membantu mengembangkan pesan dan kampanye iklan yang lebih efektif. Temuan-temuan tersebut dapat digunakan oleh para pemasar (marketers) agar bisa lebih baik lagi dalam mendefinisikan manfaat produk dan brand personality serta strategi komunikasi yang lebih efektif untuk segmen konsumen yang dihasilkan,” urainya.',
    picture: 'https://images.unsplash.com/photo-1532329683184-6ffd13057d1c?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'Zen RS',
    source: 'Narasi.Tv',
  },
  {
    id: '6c',
    title: 'Manfaat Berpikir Positif untuk Kesehatan Fisik dan Mental, Memahami tentang pikiran positif',
    teks: 'Kesehatan adalah hal yang sangat penting bagi kita dan ada banyak cara yang dapat kita lakukan untuk menjaganya. Salah satu cara yang dapat dilakukan untuk meningkatkan kesejahteraan baik kesehatan fisik maupun mental adalah dengan memiliki pola pikir yang positif dan optimis (Renee, 2022). Berpikir positif bukan berarti kita mengabaikan situasi hidup yang kurang menyenangkan. Berpikir positif berarti bahwa kita mendekati ketidaknyamanan dengan cara yang lebih positif dan produktif, berpikir bahwa yang terbaik akan terjadi, bukan yang terburuk. Berpikir positif sering dimulai dengan self-talk. Self-talk dapat diartikan sebagai pikiran yang tak terucapkan yang muncul di kepala. Pikiran otomatis ini bisa positif atau negatif. Beberapa self-talk berasal dari logika dan alasan, mungkin juga muncul dari kesalahpahaman yang dibuat karena kurangnya informasi, atau harapan dari ide-ide yang terbentuk sebelumnya tentang apa yang mungkin terjadi (Mayo Clinic, 2022). Memiliki pikiran yang positif memungkinkan kita untuk mengatasi situasi stres dengan lebih baik, sehingga mengurangi efek kesehatan yang berbahaya. Orang yang positif dan optimis juga cenderung menjalani gaya hidup yang lebih sehat, melakukan lebih banyak aktivitas fisik, mengikuti diet yang lebih sehat, dan tidak merokok atau minum alkohol secara berlebihan. Jika pikiran yang melintas di kepala kita sebagian besar negatif, pandangan hidup kita cenderung pesimis. Jika pikiran kita sebagian besar positif, kemungkinan besar kita adalah orang yang optimis atau seseorang yang mempraktikkan pemikiran positif (Mayo Clinic, 2022). Manfaat kesehatan dari berpikir positif: Dikutip dari Mayo Clinic (2022), ada beberapa manfaat kesehatan dari berpikir positif, yaitu:Peningkatan rentang hidup, Tingkat depresi yang lebih rendah, Tingkat kesusahan dan rasa sakit yang lebih rendah, Ketahanan yang lebih besar terhadap penyakit, Kesejahteraan psikologis dan fisik yang lebih baik, Kesehatan kardiovaskular yang lebih baik dan pengurangan risiko kematian akibat penyakit kardiovaskular dan stroke,, Mengurangi risiko kematian akibat kanker, Mengurangi risiko kematian akibat kondisi pernapasan, Mengurangi risiko kematian akibat infeksi, Memiliki keterampilan koping yang lebih baik ketika mengalami tekanan, Mengidentifikasi pemikiran diri yang negatif. Beberapa pemikiran diri yang negatif mudah dikenali, seperti Saya tidak cukup baik, atau Aku benar-benar mengacaukannya hari ini (Renee, 2022). Dikutip dari Mayo Clinic (2022), ada juga bentuk-bentuk lain yang lebih sulit untuk diidentifikasi, seperti:Penyaringan, hanya fokus pada aspek negatif dari suatu situasi dan menyaring semua aspek positif. Misalnya, kita merasa senang setelah menyelesaikan tugas kantor dengan cepat dan mendapatkan pujian. Setelah itu, kita hanya fokus pada rencana untuk melakukan lebih banyak tugas dan melupakan pujian yang diterima. Personalisasi, secara otomatis menyalahkan diri sendiri ketika sesuatu yang buruk terjadi, bahkan jika kita tidak terlibat langsung. Bencana, ketika mengalami satu kejadian yang buruk, kemudian secara otomatis berpikir bahwa sisa hari itu seterusnya akan mengalami kejadian yang buruk. Menyalahkan orang lain atas apa yang terjadi pada diri kita, menghindari tanggung jawab atas pikiran dan perasaan kita sendiri. Mengatakan saya harus melakukan sesuatu, memikirkan semua hal yang kita pikir harus kita lakukan dan menyalahkan diri sendiri karena tidak melakukannya. Memperbesar masalah dari hal-hal yang kecil. Perfeksionis, membuat standar yang tidak mungkin dicapai dan ingin mencoba menjadi lebih sempurna sehingga mengalami kegagalan. Polarisasi, melihat sesuatu hanya baik atau buruk dan tidak ada jalan tengah, hanya melihat hitam dan putih, tidak ada nuansa abu-abu. Itu berarti hanya ada baik atau buruk, kesempurnaan atau kegagalan. Dengan mengenali jenis self-talk negatif dalam kehidupan sehari-hari merupakan langkah awal untuk mengubah pola pikir kita (Renee, 2022).',
    picture: 'https://images.unsplash.com/photo-1509909756405-be0199881695?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'Instalasi Keswamas',
    source: 'RSJ Provinsi Aceh',
  },
  {
    id: '7c',
    title: 'Inilah Aktivitas yang Dapat Menghilangkan Stres',
    teks: 'Stress adalah reaksi umum tubuh saat Anda menghadapi ancaman atau tekanan psikologis yang memungkinkan Anda untuk menyesuaikan diri di lingkungan atau situasi baru. Meskipun Anda tidak selalu bisa mengontrol keadaan keadaan Anda, pasti ada cara tertentu untuk mengontrol cara Anda meresponnya. Stress kronis dan akut bisa membahayakan atau berdampak negatif bagi kesehatan tubuh Anda apabila tidak ditangani dengan tepat. Oleh karena itu, penting bagi setiap orang mempunyai caranya sendiri yang efektif menenangkan jiwa dan pikiran. Berikut adalah beberapa kegiatan atau aktivitas yang bisa Anda terapkan sebagai penghilang stres. Olahraga ringan : Bergerak aktif sangat bagus ketika kadar stress tinggi menyerang Anda dan membuat Anda cepat gelisah sehingga jantung berdetak lebih cepat dari biasanya. Banyak penelitian menunjukkan bahwa melakukan aktivitas fisik bisa membantu mengurangi kadar stres serta turut memperbaiki suasana hati.Tak hanya itu, olahraga teratur telah terbukti memperbaiki gejala kondisi kesehatan mental yang umum seperti depresi dan kecemasan.Praktik self-care: Cobalah untuk menyisihkan waktu untuk menerapkan perawatan diri dalam upaya membantu mengurangi kadar stres yang tinggi misalnya dengan beberapa hal ini; Jalan kaki, Baca buku favorit Anda, Nyalakan lilin aromaterapi, Berlatih yoga, Pijat, Lakukan peregangan sebelum tidur, Memanggang kue. Memanggang kue bisa menjadi aktivitas penghilang stres paling ampuh. Pada dasarnya saat Anda membuat kue, hal tersebut membutuhkan perencanaan, konsentrasi penuh serta perhatian yang dapat mengaktifkan otak terutama jika Anda menikmati segala proses pembuatannya. Menghabiskan waktu bersama keluarga dan teman. Memiliki sistem dukungan sosial antar keluarga atau teman sangat penting bagi kesejahteraan Anda secara keseluruhan. Menurut artikel yang dilansir oleh Healthline, sebuah penelitian pada 163 orang dewasa Latin di perguruan tinggi mengaitkan tingkat dukungan yang rendah dari teman, keluarga atau pasangan dengan rasa kesepian, gejala depresi dan stres yang dirasakan.',
    picture: 'https://images.unsplash.com/photo-1621112904887-419379ce6824?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'Kaifia',
    source: 'New.Yesdok.com',
  },
  {
    id: '8c',
    title: 'Mengenal apa itu Overthinking',
    teks: "Overthinking saat ini mungkin sudah menjadi pembahasan yang melekat di kalangan mahasiswa. Ketika seseorang mengalami overthinking justru ia menghambat penyelesaian masalah dan bukan untuk mencari solusi jalan keluar. Sering kali kita tidak menyadari sedang mengalami overthinking. Oleh sebab itu, penting untuk mengetahui apa itu overthinking supaya kita memiliki awareness terhadap diri kita sendiri.''Overthinking adalah menggunakan terlalu banyak waktu untuk memikirkan suatu hal dengan cara yang merugikan serta overthinking dapat berupa ruminasi dan khawatir'' ujar Wirdatul Anisa Psikolog pada Kuliah Online CPMH UGM pada Jumat (18/6). Ruminasi adalah kecenderungan untuk terus memikirkan hal yang telah berlalu. Merasa hari ini akan lebih baik jika kemarin melakukan suatu hal juga merupakan salah satu bentuk masa lalu. Sedangkan khawatir adalah kecenderungan memikirkan prediksi yang negatif. ''Memang bukan hal yang mudah untuk mengubah kebiasaan overthinking'' imbuh Nurul Kusuma Hidayati Psikolog dan peneliti Central Public Mental Health UGM. Untuk mengubah kebiasaan overthinking perlu kemauan dan tekad yang kuat. Namun, untuk mengurangi kebiasaan overthinking bisa dimulai dari menyadari apa yang sedang dipikirkan kemudian kita bisa mengarahkan pikiran ke arah yang lebih rasional. ''Kekhawatiran dimulai dari respons kita terhadap suatu hal yang berlebih'' imbuh Nurul. Selain itu, khawatir dan ruminasi jika terus berlanjut dapat berubah menjadi catastrophizing yaitu salah satu bentuk distorsi kognitif. Ketika seseorang mengalami catastrophizing ia akan melebih-lebihkan dan memiliki pikiran yang tidak rasional serta merasa tidak mendapatkan jalan keluar. ''Sering kali seseorang yang mengalami catastrophizing tidak menyadari dan percaya bahwa mereka tidak punya kuasa atas kecemasan ekstrem yang mereka rasakan dan cenderung merasa tidak berdaya,'' ujar Wirdatul. Sebenarnya pikiran negatif belum tentu salah, namun yang terpenting bagi kita adalah menyadari bahwa kita memiliki kendali atas pikiran tersebut. Pikiran, perasaan, dan perilaku merupakan hal yang berkaitan sehingga ketika kita mampu untuk berpikiran positif maka akan muncul perilaku yang positif. Untuk dapat berpikiran positif kita harus menilai suatu kejadian atau hal itu dimulai dari respons yang positif dahulu.",
    picture: 'https://images.unsplash.com/photo-1652765361512-d3cc43360d6a?q=80&w=1515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'Khansa & Satria.Ardi.N',
    source: 'UGM',
  },
];

const detailArticleSource = {
  getArticleById(id) {
    return detailArticleData.find((artikel) => artikel.id === id);
  },
};

export { articleSource, detailArticleSource };
