import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';

export default function SecondScreen({navigation}){
    const DATA = [
        { name: 'Nasi Goreng', key: '1', desc: 'Nasi goreng adalah makanan berupa nasi yang digoreng dan dicampur dalam minyak goreng, margarin atau mentega. Biasanya ditambah kecap manis, bawang merah, bawang putih, asam jawa, lada dan bahan lainnya; seperti telur, daging ayam, dan kerupuk. Ada pula nasi goreng jenis lain yang dibuat bersama ikan asin yang juga populer di seluruh Indonesia.'},
        { name: 'Ayam Bakar', key: '2', desc: 'Ayam panggang adalah daging ayam yang dimasak sebagai hidangan dengan cara dipanggang. Baik dipanggang di dapur rumah, di atas api, atau dengan rotisserie. Umumnya ayam disangrai dengan memanfaatkan lemak dan sarinya sendiri dengan cara memutar daging selama pemanggangan.'},
        { name: 'Soto Lamongan', key: '3', desc: 'Soto Ayam Lamongan adalah jenis soto yang berkembang di Kabupaten Lamongan. Ciri makanan khas Jawa Timur adalah penggunaan serbuk koya sebagai pelengkap. Koya terbuat dari kerupuk udang dan bawang putih goreng yang ditumbuk hingga halus dan menjadi bubuk.'},
        { name: 'Seruit', key: '4', desc:'Seruit adalah makanan khas daerah Lampung, Indonesia, yaitu masakan ikan yang digoreng atau dibakar dicampur sambal terasi, tempoyak (olahan durian) atau mangga. Jenis ikan adalah besarnya ikan sungai seperti belide, baung, layis dll, ditambah lalapan'},
        { name: 'Sate', key: '5', desc:'Sate atau satai adalah makanan yang terbuat dari daging yang dipotong kecil-kecil dan ditusuk sedemikian rupa dengan tusukan lidi tulang daun kelapa atau bambu, kemudian dipanggang menggunakan bara arang kayu.'},
        { name: 'Rendang', key: '6', desc:'Rendang atau randang dalam bahasa Minangkabau (Jawi: رندڠ) adalah Masakan Minangkabau yang berbahan dasar daging yang berasal dari Sumatera Barat, Indonesia. Masakan ini dihasilkan dari proses memasak suhu rendah dalam waktu lama dengan menggunakan aneka rempah-rempah dan santan.'},
        { name: 'Bakso', key: '7', desc:'Bakso atau baso adalah jenis bola daging yang lazim ditemukan pada masakan Indonesia. Bakso umumnya dibuat dari campuran daging sapi giling dan tepung tapioka, tetapi ada juga bakso yang terbuat dari daging ayam, ikan, atau udang bahkan daging kerbau. Dalam penyajiannya, bakso umumnya disajikan panas-panas dengan kuah kaldu sapi bening, dicampur mi, bihun, taoge, tahu, terkadang telur lalu ditaburi bawang goreng dan seledri. Bakso sangat populer dan dapat ditemukan di seluruh Indonesia, dari gerobak pedagang kaki lima hingga restoran besar. Berbagai jenis bakso sekarang banyak ditawarkan dalam bentuk makanan beku yang dijual di pasar swalayan ataupun mal-mal. Irisan bakso dapat juga dijadikan pelengkap jenis makanan lain seperti mi goreng, nasi goreng, sop atau capcai.'},
        { name: 'Rawon', key: '8', desc:'Rasa hidangan Rawon merupakan perpaduan dari rasa manis, gurih dan legit. Rawon merupakan kuliner khas Jawa Timur, berupa sup daging dengan kuah berwarna hitam. Warna hitam dari kuah Rawon berasal dari buah kepayang atau sering disebut dengan kluwak.'},
        { name: 'Gado-Gado', key: '9', desc:'Gado-gado adalah makanan khas Jakarta berisi sayur-sayuran yang direbus, irisan telur dan tahu, serta ditaburi bawang goreng dan kerupuk. Sayur-sayuran ditambahkan dengan bumbu kacang atau saus dari kacang tanah yang telah dihaluskan yang kemudian diaduk merata. Gado-gado dapat dimakan langsung seperti selada dengan bumbu/saus kacang, atau dapat juga dimakan beserta nasi putih atau kadang-kadang juga disajikan dengan lontong.'},
        { name: 'Gudeg', key: '10', desc:'Gudeg (bahasa Jawa: ꦒꦸꦝꦼꦒ꧀, translit. Gudhěg) adalah hidangan khas Provinsi Yogyakarta dan Jawa Tengah yang terbuat dari nangka muda yang dimasak dengan santan. Perlu waktu berjam-jam untuk membuat hidangan ini. Warna coklat biasanya dihasilkan oleh daun jati yang dimasak bersamaan.'},
        { name: 'Tumpeng', key: '11', desc: 'Tumpeng atau nasi tumpeng adalah makanan masyarakat Jawa yang penyajian nasinya dibentuk kerucut dan ditata bersama dengan lauk-pauknya. Olahan nasi yang dipakai umumnya berupa nasi kuning, nasi putih biasa, atau nasi uduk.'},
        { name: 'Pempek', key: '12', desc: 'Pempek adalah salah satu makanan tradisional asal Palembang provinsi Sumatera Selatan. Makanan ini terbuat dari bahan dasar sagu dan ikan karena di Bangka masyarakatnya mayoritas nelayan dan merupakan provinsi tetangga dari Palembang, oleh karena itu pempek mudah ditemui di kepulauan Bangka Belitung.'},
        { name: 'Nasi Padang', key: '13', desc: 'Nasi padang adalah sebuah hidangan yang disajikan secara lengkap secara prasmanan dengan daging, ikan, sayuran, dan makanan pedas dimakan dengan nasi putih, itu adalah komoditas ekspor paling terkenal dan masyarakat Minangkabau mempunyai kontribusi yang besar untuk masakan Indonesia.'},
        { name: 'Nasi Liwet', key: '14', desc:'Nasi liwet (bahasa Jawa: ꦱꦼꦒ​ꦭꦶꦮꦼꦠ꧀, translit. sêgå liwêt; bahasa Sunda: ᮞᮍᮥ ᮜᮤᮝᮩᮒ᮪) adalah hidangan nasi khas Indonesia yang dimasak dengan santan, kaldu ayam, dan rempah-rempah[1] Nasi kukus biasanya dimasak dalam air, tetapi nasi liwet adalah nasi yang dimasak dengan santan, kaldu ayam, daun salam dan serai, sehingga memberikan nasi rasa yang kaya, aromatik, dan gurih.[2] Nasi liwet adalah cara memasak nasi tradisional Jawa dengan santan. Ada juga varian nasi liwet ala Sunda yang berbeda rasa dan penyajiannya.'},
        { name: 'Lumpia', key: '15', desc:'Lumpia merupakan jajanan tradisional khas Tionghoa dan merupakan kuliner khas dari Semarang. Selain rasanya yang enak dan murah, lumpia juga memiliki isian yang sehat, biasanya terdiri dari sayuran segar, rebung, telur, daging, maupun makanan laut'},
        { name: 'Godok Batinta', key: '16', desc:'Selain dikenal dengan nama godok batinta yang mana batintab artinya berbalur gula merah kental, camilan ini juga disebut dengan godok pisang atau roti pisang yang digoreng. Camilan khas Minang yang manis legit ini sangat cocok untuk dinikmati saat santai.'},
        { name: 'Tekwan', key: '17', desc:'Tekwan adalah penganan khas Palembang yang terbuat dari campuran daging ikan dan tapioka, yang dibentuk berupa bulatan kecil-kecil, dan disajikan dalam kuah udang dengan rasa yang khas. Biasanya pelengkap tekwan adalah sohun, irisan bengkoang dan jamur, serta ditaburi irisan daun bawang, seledri, dan bawang goreng. Sejarah asal nama tekwan ada dua pendapat. Pendapat pertama tekwan merupakan akronim dari bekotek samo kawan yang artinya ngobrol-ngobrol bersama teman. Dan pendapat kedua yaitu akronim dari bahasa inggris take one yang artinya ambil satu-satu.'},
        { name: 'Sate Lilit', key: '18', desc:'Sate Lilit adalah sebuah varian sate asal Bali. Sate ini terbuat dari daging babi, ikan, ayam, daging sapi, atau bahkan kura-kura yang dicincang, kemudian dicampur dengan parutan kelapa, santan, jeruk nipis, bawang merah, dan merica.'},
        { name: 'Kerak Telor', key: '19', desc:'Kerak telur adalah makanan asli daerah Jakarta (Betawi), dengan bahan-bahan beras ketan putih, telur ayam atau bebek, ebi (udang kering yang diasinkan) yang disangrai kering ditambah bawang merah goreng, lalu diberi bumbu yang dihaluskan berupa kelapa sangrai, cabai merah, kencur, jahe, merica butiran, garam dan gula pasir. Kerak telor dapat ditemukan pada hari biasa. Anda bisa menemukan kerak telor di sekitar Kota Tua, Jakarta Barat. Menurut sejarah, Kerak Telor sudah ada dari zaman kolonial Belanda, kerak telor diciptakan oleh masyarakat Betawi secara tak sengaja Pada tahun 1970-an.'},
        { name: 'Terang Bulan', key: '20', desc:'Kue Terang bulan (juga dikenal sebagai Martabak manis, Martabak bangka di beberapa daerah atau apam balik di Semenanjung Malaka) adalah kudapan sejenis panekuk yang biasa dijajakan di pinggir jalan di seluruh Indonesia, Malaysia, Brunei, dan Singapura.'}
    ];

    return(
        <ImageBackground
            style={styles.background} 
            source={require("../assets/Background.jpg")}>
            <View style={{marginTop:60, height:750, width:Dimensions.get("screen").width}}>
                <FlashList
                data={DATA}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={()=>navigation.navigate('Third' ,item)}>
                        <Text style={styles.item}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                    )}
                estimatedItemSize={200}
            />
            </View>
            
            <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate('First')}>
                    <AntDesign name='leftcircle' size={50} color="black"/>
                </TouchableOpacity>
            </View>
       </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: Dimensions.get("screen").width,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    item: {
        flex:1,
        marginTop:20,
        width:350,
        padding:20,
        borderWidth:1,
        borderColor:"black",
        borderRadius:20,
        fontSize: 24,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignSelf:"center"
    },
    button: {
        margin:20,
        top:0,
        right:150,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
  });