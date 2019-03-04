function Question(question, ans1, ans2, ans3, ans4, correct) {
  this.question = question;
  this.answers = [ans1, ans2, ans3, ans4];
  this.answerCorrect = correct;
}

var q1 = new Question('Tujuan dilaksanakan ibadah haji?', 'Mengunjungi Baitullah di Mekah kerana mengerjakan ibadat tertentu pada masa tertentu dengan syarat tertentu.', 'Mengunjungi Kaabah di Mekah kerana melakukan tawaf kerana Allah.', 'Mengunjungi Baitullah di Mekah kerana melakukan ibadat tertentu pada bila-bila masa.', 'Mengunjungi Baitullah di Mekah kerana ingin melakukan tawaf, saie dan bercukur.', 1);
var q2 = new Question('Apakah hukum menunaikan haji?', 'Harus', 'Fardhu kifayah', 'Wajib bagi yang mampu', 'Sunat', 3);
var q3 = new Question('Diantara berikut ini, manakah bukan merupakan rukun haji?', 'Sai', 'Tertib', 'Wukuf', 'Melontar Jamratul Aqabah', 2);
var q4 = new Question('Tanggal waktu dilaksanakannya wukuf bagi umat Islam ialah', '9 Zulkaedah', '10 Zulhijjah', '9 Zulhijjah', '10 Zulkaedah', 0);
var q5 = new Question('Berikut, manakah yang bukan merupakan syarat-syarat dalam melakukan ibadah haji :', 'Ada kesempatan waktu', 'Mempunyai ilmu yang luas tentang haji', 'Ada kendaraan untuk pulang dan pergi', 'Mempunyai nafkah yang cukup untuk tanggungan yang ditinggalkan', 1);
var q6 = new Question('Berikut ini, manakah yang merupakan larangan saat mengerjakan haji?', 'Menanam pohon di Mekah', 'Menutup kepala bagi laki-laki', 'Memakai obat-obatan terlarang', 'Menutup tapak tangan bagi perempuan', 3);
var q7 = new Question('Apakah yang dimaksud dengan tawaf ifadhah?', 'Tawaf selamat datang', 'Tawaf selamat tinggal', 'Tawaf sunat yang boleh dilakukan sewaktu-waktu', 'Tawaf rukun yang wajib dikerjakan oleh semua jemaah haji', 1);
var q8 = new Question('Berikut adalah perkara sunat yang dilakukan sebelum niat ihram haji kecuali :', 'Pakai pakaian ihram berwarna putih', 'Memohon maaf kesalahan yang pernah dilakukan terhadap orang lain', 'Memotong kuku', 'Memakai minyak rambut dan bau-bauan', 2);
var q9 = new Question('Jemaah yang melakukan haji secara tamattuk atau qiran dikenakan dam berupa?', 'Tertib dan taqdir', 'Tertib dan takdil', 'Takhyir dan taqdir', 'Takhyir dan takdil', 1);
var q10 = new Question('Berikut adalah rukun umrah kecuali', 'Wukuf', 'Tawaf', 'Sai', 'Tertib', 3);

var list = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];