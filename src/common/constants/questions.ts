import { QuestQuestion } from '@/common/types/quest'

export const techQuestions: QuestQuestion[] = [
   {
      type: 'tech',
      question: {
         en: 'What is the main function of DNS in a computer network?',
         id: 'Apa fungsi utama dari DNS dalam jaringan komputer?',
      },
      choices: [
         {
            answer: {
               en: 'Translate domain names into IP addresses',
               id: 'Mengubah nama domain menjadi alamat IP',
            },
            isCorrect: true,
         },
         {
            answer: {
               en: 'Manage access to servers',
               id: 'Mengelola akses ke server',
            },
            isCorrect: false,
         },
         {
            answer: {
               en: 'Secure the network from attacks',
               id: 'Mengamankan jaringan dari serangan',
            },
            isCorrect: false,
         },
         {
            answer: {
               en: 'Connect devices to the internet',
               id: 'Menghubungkan perangkat ke internet',
            },
            isCorrect: false,
         },
      ],
   },
   {
      type: 'tech',
      question: {
         en: 'What does API stand for?',
         id: 'Apa kepanjangan dari API?',
      },
      choices: [
         {
            answer: {
               en: 'Application Programming Interface',
               id: 'Application Programming Interface',
            },
            isCorrect: true,
         },
         {
            answer: {
               en: 'Automated Process Interaction',
               id: 'Automated Process Interaction',
            },
            isCorrect: false,
         },
         {
            answer: {
               en: 'Application Protocol Interaction',
               id: 'Application Protocol Interaction',
            },
            isCorrect: false,
         },
         {
            answer: {
               en: 'Artificial Processing Integration',
               id: 'Artificial Processing Integration',
            },
            isCorrect: false,
         },
      ],
   },
   {
      type: 'tech',
      question: {
         en: 'Which programming language is most commonly used for AI development?',
         id: 'Bahasa pemrograman apa yang paling umum digunakan untuk pengembangan AI?',
      },
      choices: [
         {
            answer: { en: 'Python', id: 'Python' },
            isCorrect: true,
         },
         {
            answer: { en: 'C++', id: 'C++' },
            isCorrect: false,
         },
         {
            answer: { en: 'Java', id: 'Java' },
            isCorrect: false,
         },
         {
            answer: { en: 'Ruby', id: 'Ruby' },
            isCorrect: false,
         },
      ],
   },
   {
      type: 'tech',
      question: {
         en: 'Which frontend framework is built on JavaScript?',
         id: 'Framework frontend mana yang berbasis JavaScript?',
      },
      choices: [
         {
            answer: { en: 'React', id: 'React' },
            isCorrect: true,
         },
         {
            answer: { en: 'Django', id: 'Django' },
            isCorrect: false,
         },
         {
            answer: { en: 'Laravel', id: 'Laravel' },
            isCorrect: false,
         },
         {
            answer: { en: 'Flask', id: 'Flask' },
            isCorrect: false,
         },
      ],
   },
   {
      type: 'tech',
      question: {
         en: 'What is cloud computing?',
         id: 'Apa itu cloud computing?',
      },
      choices: [
         {
            answer: {
               en: 'Delivering computing services over the internet',
               id: 'Menyediakan layanan komputasi melalui internet',
            },
            isCorrect: true,
         },
         {
            answer: {
               en: 'Computing using local hardware',
               id: 'Komputasi menggunakan perangkat keras lokal',
            },
            isCorrect: false,
         },
         {
            answer: {
               en: 'Building apps for specific hardware',
               id: 'Membuat aplikasi di perangkat keras tertentu',
            },
            isCorrect: false,
         },
         {
            answer: {
               en: 'Managing big data offline',
               id: 'Mengelola data besar secara offline',
            },
            isCorrect: false,
         },
      ],
   },
   {
      type: 'tech',
      question: {
         en: 'Which one is a relational database?',
         id: 'Mana yang merupakan database relasional?',
      },
      choices: [
         {
            answer: { en: 'MySQL', id: 'MySQL' },
            isCorrect: true,
         },
         {
            answer: { en: 'MongoDB', id: 'MongoDB' },
            isCorrect: false,
         },
         {
            answer: { en: 'Redis', id: 'Redis' },
            isCorrect: false,
         },
         {
            answer: { en: 'Elasticsearch', id: 'Elasticsearch' },
            isCorrect: false,
         },
      ],
   },
   {
      type: 'tech',
      question: {
         en: 'Which port does the HTTP protocol use?',
         id: 'Protokol HTTP bekerja pada port berapa?',
      },
      choices: [
         {
            answer: { en: '80', id: '80' },
            isCorrect: true,
         },
         {
            answer: { en: '443', id: '443' },
            isCorrect: false,
         },
         {
            answer: { en: '22', id: '22' },
            isCorrect: false,
         },
         {
            answer: { en: '25', id: '25' },
            isCorrect: false,
         },
      ],
   },
   {
      type: 'tech',
      question: {
         en: 'What is the difference between HTTP and HTTPS?',
         id: 'Apa perbedaan antara HTTP dan HTTPS?',
      },
      choices: [
         {
            answer: {
               en: 'HTTPS provides encryption for security',
               id: 'HTTPS menyediakan enkripsi untuk keamanan',
            },
            isCorrect: true,
         },
         {
            answer: {
               en: 'HTTPS is faster than HTTP',
               id: 'HTTPS lebih cepat dibandingkan HTTP',
            },
            isCorrect: false,
         },
         {
            answer: {
               en: 'HTTP is used for desktop apps',
               id: 'HTTP digunakan untuk aplikasi desktop',
            },
            isCorrect: false,
         },
         {
            answer: {
               en: 'HTTPS is only used on local networks',
               id: 'HTTPS hanya digunakan di jaringan lokal',
            },
            isCorrect: false,
         },
      ],
   },
   {
      type: 'tech',
      question: {
         en: 'Which one is a Linux-based operating system?',
         id: 'Mana yang merupakan sistem operasi berbasis Linux?',
      },
      choices: [
         {
            answer: { en: 'Ubuntu', id: 'Ubuntu' },
            isCorrect: true,
         },
         {
            answer: { en: 'Windows', id: 'Windows' },
            isCorrect: false,
         },
         {
            answer: { en: 'macOS', id: 'macOS' },
            isCorrect: false,
         },
         {
            answer: { en: 'ChromeOS', id: 'ChromeOS' },
            isCorrect: false,
         },
      ],
   },
   {
      type: 'tech',
      question: {
         en: 'What is the process of connecting two nodes in a network called?',
         id: 'Proses menghubungkan dua node dalam jaringan disebut?',
      },
      choices: [
         {
            answer: { en: 'Routing', id: 'Routing' },
            isCorrect: true,
         },
         {
            answer: { en: 'Switching', id: 'Switching' },
            isCorrect: false,
         },
         {
            answer: { en: 'Broadcasting', id: 'Broadcasting' },
            isCorrect: false,
         },
         {
            answer: { en: 'Cloning', id: 'Cloning' },
            isCorrect: false,
         },
      ],
   },
]

export const generalQuestions: QuestQuestion[] = [
   {
      type: 'general',
      question: {
         en: 'What is the largest continent in the world?',
         id: 'Apa benua terbesar di dunia?',
      },
      choices: [
         {
            answer: { en: 'Africa', id: 'Afrika' },
            isCorrect: false,
         },
         {
            answer: { en: 'The Americas', id: 'Amerika' },
            isCorrect: false,
         },
         {
            answer: { en: 'Asia', id: 'Asia' },
            isCorrect: true,
         },
         {
            answer: { en: 'Europe', id: 'Eropa' },
            isCorrect: false,
         },
      ],
   },
   {
      type: 'general',
      question: {
         en: 'Who is known as the Proclamator of Indonesia?',
         id: 'Siapa yang dikenal sebagai Bapak Proklamator Indonesia?',
      },
      choices: [
         {
            answer: { en: 'General Sudirman', id: 'Jenderal Sudirman' },
            isCorrect: false,
         },
         {
            answer: { en: 'Ahmad Yani', id: 'Ahmad Yani' },
            isCorrect: false,
         },
         {
            answer: {
               en: 'Soekarno and Mohammad Hatta',
               id: 'Soekarno dan Mohammad Hatta',
            },
            isCorrect: true,
         },
         {
            answer: { en: 'Ki Hajar Dewantara', id: 'Ki Hajar Dewantara' },
            isCorrect: false,
         },
      ],
   },
   {
      type: 'general',
      question: {
         en: 'What is the capital of Japan?',
         id: 'Apa ibukota dari negara Jepang?',
      },
      choices: [
         {
            answer: { en: 'Kyoto', id: 'Kyoto' },
            isCorrect: false,
         },
         {
            answer: { en: 'Tokyo', id: 'Tokyo' },
            isCorrect: true,
         },
         {
            answer: { en: 'Osaka', id: 'Osaka' },
            isCorrect: false,
         },
         {
            answer: { en: 'Hokkaido', id: 'Hokkaido' },
            isCorrect: false,
         },
      ],
   },
   {
      type: 'general',
      question: {
         en: 'Where is Borobudur Temple located?',
         id: 'Di mana Candi Borobudur berada?',
      },
      choices: [
         {
            answer: {
               en: 'Magelang, Central Java',
               id: 'Magelang, Jawa Tengah',
            },
            isCorrect: true,
         },
         {
            answer: { en: 'Yogyakarta', id: 'Yogyakarta' },
            isCorrect: false,
         },
         {
            answer: { en: 'Surakarta', id: 'Surakarta' },
            isCorrect: false,
         },
         {
            answer: { en: 'Semarang', id: 'Semarang' },
            isCorrect: false,
         },
      ],
   },
   {
      type: 'general',
      question: {
         en: 'What is the national emblem of Indonesia?',
         id: 'Apa lambang negara Indonesia?',
      },
      choices: [
         {
            answer: { en: 'Rice and Cotton', id: 'Padi dan Kapas' },
            isCorrect: false,
         },
         {
            answer: { en: 'Garuda Pancasila', id: 'Garuda Pancasila' },
            isCorrect: true,
         },
         {
            answer: { en: 'The Red and White Flag', id: 'Bendera Merah Putih' },
            isCorrect: false,
         },
         {
            answer: { en: 'Banyan Tree', id: 'Pohon Beringin' },
            isCorrect: false,
         },
      ],
   },
   {
      type: 'general',
      question: {
         en: 'What is the official currency of the United Kingdom?',
         id: 'Apa mata uang resmi negara Inggris?',
      },
      choices: [
         {
            answer: { en: 'Pound Sterling', id: 'Pound Sterling' },
            isCorrect: true,
         },
         {
            answer: { en: 'Dollar', id: 'Dolar' },
            isCorrect: false,
         },
         {
            answer: { en: 'Franc', id: 'Franc' },
            isCorrect: false,
         },
         {
            answer: { en: 'Euro', id: 'Euro' },
            isCorrect: false,
         },
      ],
   },
   {
      type: 'general',
      question: {
         en: 'Who invented the light bulb?',
         id: 'Siapa penemu bola lampu?',
      },
      choices: [
         {
            answer: {
               en: 'Alexander Graham Bell',
               id: 'Alexander Graham Bell',
            },
            isCorrect: false,
         },
         {
            answer: { en: 'Thomas Alva Edison', id: 'Thomas Alva Edison' },
            isCorrect: true,
         },
         {
            answer: { en: 'Nikola Tesla', id: 'Nikola Tesla' },
            isCorrect: false,
         },
         {
            answer: { en: 'James Watt', id: 'James Watt' },
            isCorrect: false,
         },
      ],
   },
   {
      type: 'general',
      question: {
         en: 'Which animal is the icon of Australia?',
         id: 'Hewan apa yang menjadi ikon negara Australia?',
      },
      choices: [
         {
            answer: { en: 'Koala', id: 'Koala' },
            isCorrect: false,
         },
         {
            answer: { en: 'Emu', id: 'Emu' },
            isCorrect: false,
         },
         {
            answer: { en: 'Platypus', id: 'Platipus' },
            isCorrect: false,
         },
         {
            answer: { en: 'Kangaroo', id: 'Kanguru' },
            isCorrect: true,
         },
      ],
   },
   {
      type: 'general',
      question: {
         en: 'How many islands does Indonesia have according to official data?',
         id: 'Berapa jumlah pulau di Indonesia menurut data resmi?',
      },
      choices: [
         {
            answer: { en: '13,000', id: '13.000' },
            isCorrect: false,
         },
         {
            answer: { en: '17,000', id: '17.000' },
            isCorrect: true,
         },
         {
            answer: { en: '20,000', id: '20.000' },
            isCorrect: false,
         },
         {
            answer: { en: '15,000', id: '15.000' },
            isCorrect: false,
         },
      ],
   },
   {
      type: 'general',
      question: {
         en: 'What is the official language of Brazil?',
         id: 'Apa bahasa resmi negara Brazil?',
      },
      choices: [
         {
            answer: { en: 'Portuguese', id: 'Portugis' },
            isCorrect: true,
         },
         {
            answer: { en: 'Spanish', id: 'Spanyol' },
            isCorrect: false,
         },
         {
            answer: { en: 'English', id: 'Inggris' },
            isCorrect: false,
         },
         {
            answer: { en: 'French', id: 'Prancis' },
            isCorrect: false,
         },
      ],
   },
]

export const historyQuestions: QuestQuestion[] = [
   {
      type: 'history',
      question: {
         en: 'Who founded the Budi Utomo organization?',
         id: 'Siapa yang dikenal sebagai pendiri organisasi Budi Utomo?',
      },
      choices: [
         {
            answer: { en: 'Ki Hajar Dewantara', id: 'Ki Hajar Dewantara' },
            isCorrect: false,
         },
         {
            answer: { en: 'Soekarno', id: 'Soekarno' },
            isCorrect: false,
         },
         {
            answer: { en: 'H.O.S. Tjokroaminoto', id: 'H.O.S. Tjokroaminoto' },
            isCorrect: false,
         },
         {
            answer: { en: 'Dr. Sutomo', id: 'Dr. Sutomo' },
            isCorrect: true,
         },
      ],
   },
   {
      type: 'history',
      question: {
         en: 'In what year did the G30S/PKI event happen?',
         id: 'Peristiwa G30S/PKI terjadi pada tahun berapa?',
      },
      choices: [
         {
            answer: { en: '1949', id: '1949' },
            isCorrect: false,
         },
         {
            answer: { en: '1965', id: '1965' },
            isCorrect: true,
         },
         {
            answer: { en: '1970', id: '1970' },
            isCorrect: false,
         },
         {
            answer: { en: '1950', id: '1950' },
            isCorrect: false,
         },
      ],
   },
   {
      type: 'history',
      question: {
         en: 'What was the oldest Hindu kingdom in Indonesia?',
         id: 'Kerajaan Hindu tertua di Indonesia adalah?',
      },
      choices: [
         {
            answer: { en: 'Majapahit', id: 'Majapahit' },
            isCorrect: false,
         },
         {
            answer: { en: 'Srivijaya', id: 'Sriwijaya' },
            isCorrect: false,
         },
         {
            answer: { en: 'Kutai', id: 'Kutai' },
            isCorrect: true,
         },
         {
            answer: { en: 'Tarumanagara', id: 'Tarumanegara' },
            isCorrect: false,
         },
      ],
   },
   {
      type: 'history',
      question: {
         en: 'In what year was the Linggarjati Agreement signed?',
         id: 'Perjanjian Linggarjati ditandatangani pada tahun berapa?',
      },
      choices: [
         {
            answer: { en: '1946', id: '1946' },
            isCorrect: true,
         },
         {
            answer: { en: '1945', id: '1945' },
            isCorrect: false,
         },
         {
            answer: { en: '1948', id: '1948' },
            isCorrect: false,
         },
         {
            answer: { en: '1947', id: '1947' },
            isCorrect: false,
         },
      ],
   },
   {
      type: 'history',
      question: {
         en: 'Who was the first president of Indonesia?',
         id: 'Siapa presiden pertama Indonesia?',
      },
      choices: [
         {
            answer: { en: 'Soekarno', id: 'Soekarno' },
            isCorrect: true,
         },
         {
            answer: { en: 'Soeharto', id: 'Soeharto' },
            isCorrect: false,
         },
         {
            answer: { en: 'B.J. Habibie', id: 'B.J. Habibie' },
            isCorrect: false,
         },
         {
            answer: {
               en: 'Megawati Soekarnoputri',
               id: 'Megawati Soekarnoputri',
            },
            isCorrect: false,
         },
      ],
   },
   {
      type: 'history',
      question: {
         en: 'What was the first Islamic kingdom in Indonesia?',
         id: 'Kerajaan Islam pertama di Indonesia adalah?',
      },
      choices: [
         {
            answer: { en: 'Demak', id: 'Demak' },
            isCorrect: false,
         },
         {
            answer: { en: 'Samudera Pasai', id: 'Samudera Pasai' },
            isCorrect: true,
         },
         {
            answer: { en: 'Aceh', id: 'Aceh' },
            isCorrect: false,
         },
         {
            answer: { en: 'Banten', id: 'Banten' },
            isCorrect: false,
         },
      ],
   },
   {
      type: 'history',
      question: {
         en: 'Which female hero is known for fighting for women’s emancipation?',
         id: 'Siapa pahlawan perempuan yang dikenal dengan perjuangan emansipasi wanita?',
      },
      choices: [
         {
            answer: { en: 'R.A. Kartini', id: 'R.A. Kartini' },
            isCorrect: true,
         },
         {
            answer: { en: 'Cut Nyak Dien', id: 'Cut Nyak Dien' },
            isCorrect: false,
         },
         {
            answer: {
               en: 'Martha Christina Tiahahu',
               id: 'Martha Christina Tiahahu',
            },
            isCorrect: false,
         },
         {
            answer: { en: 'Dewi Sartika', id: 'Dewi Sartika' },
            isCorrect: false,
         },
      ],
   },
   {
      type: 'history',
      question: {
         en: 'What was the name of the Dutch ship that sank in the Java Sea in 1629?',
         id: 'Apa nama kapal Belanda yang tenggelam di Laut Jawa pada tahun 1629?',
      },
      choices: [
         {
            answer: { en: 'Batavia', id: 'Batavia' },
            isCorrect: true,
         },
         {
            answer: { en: 'De Ruyter', id: 'De Ruyter' },
            isCorrect: false,
         },
         {
            answer: { en: 'Hollandia', id: 'Hollandia' },
            isCorrect: false,
         },
         {
            answer: { en: 'Utrecht', id: 'Utrecht' },
            isCorrect: false,
         },
      ],
   },
   {
      type: 'history',
      question: {
         en: 'When did the Diponegoro War take place?',
         id: 'Perang Diponegoro berlangsung pada tahun berapa?',
      },
      choices: [
         {
            answer: { en: '1825–1830', id: '1825-1830' },
            isCorrect: true,
         },
         {
            answer: { en: '1815–1820', id: '1815-1820' },
            isCorrect: false,
         },
         {
            answer: { en: '1835–1840', id: '1835-1840' },
            isCorrect: false,
         },
         {
            answer: { en: '1845–1850', id: '1845-1850' },
            isCorrect: false,
         },
      ],
   },
   {
      type: 'history',
      question: {
         en: 'How long was Indonesia colonized by the Dutch?',
         id: 'Berapa lama Indonesia dijajah oleh Belanda?',
      },
      choices: [
         {
            answer: { en: '350 years', id: '350 tahun' },
            isCorrect: true,
         },
         {
            answer: { en: '300 years', id: '300 tahun' },
            isCorrect: false,
         },
         {
            answer: { en: '400 years', id: '400 tahun' },
            isCorrect: false,
         },
         {
            answer: { en: '200 years', id: '200 tahun' },
            isCorrect: false,
         },
      ],
   },
]

export const riddles: QuestQuestion[] = [
   {
      type: 'riddles',
      question: {
         en: 'Police direct traffic every day, so traffic becomes...?',
         id: 'Setiap hari polisi mengatur lalu...?',
      },
      choices: [
         {
            answer: { en: 'Heavy', id: 'Lintas' },
            isCorrect: false,
         },
         {
            answer: { en: 'Thrifty', id: 'Hemat' },
            isCorrect: false,
         },
         {
            answer: { en: 'Smooth', id: 'Lancar' },
            isCorrect: true,
         },
         {
            answer: { en: 'Passing', id: 'Lewat' },
            isCorrect: false,
         },
      ],
      clue: {
         en: 'Six letters, and the 4th letter is “O”.',
         id: "Terdiri dari 5 huruf dan huruf ke 4 nya adalah 'A'",
      },
      solution: {
         en: 'Because traffic is directed by the police, it flows smoothly.',
         id: 'Karena lalu lintas sudah diatur oleh polisi, maka lalu lintas akan menjadi lancar',
      },
   },
   {
      type: 'riddles',
      question: {
         en: 'The prison goes wild when all the inmates...?',
         id: 'Penjara bisa heboh kalau semua tahanannya...?',
      },
      choices: [
         {
            answer: { en: 'Cough', id: 'Batuk' },
            isCorrect: true,
         },
         {
            answer: { en: 'Escape', id: 'Kabur' },
            isCorrect: false,
         },
         {
            answer: { en: 'Thrive', id: 'Subur' },
            isCorrect: false,
         },
         {
            answer: { en: 'Sleep', id: 'Tidur' },
            isCorrect: false,
         },
      ],
      clue: {
         en: 'Five letters, and the 4th letter is “G”.',
         id: "Terdiri dari 5 huruf dan huruf ke 4 nya adalah 'U'",
      },
      solution: {
         en: 'If every inmate coughs at once, the whole prison is in chaos.',
         id: 'Jika semua tahanan batuk, maka penjara bakalan heboh',
      },
   },
   {
      type: 'riddles',
      question: {
         en: 'What helps the doctor the most...?',
         id: 'Yang membantu dokter...?',
      },
      choices: [
         {
            answer: { en: 'Nurse', id: 'Suster' },
            isCorrect: false,
         },
         {
            answer: { en: 'Recovery', id: 'Sembuh' },
            isCorrect: true,
         },
         {
            answer: { en: 'Anyone', id: 'Siapa aja' },
            isCorrect: false,
         },
         {
            answer: { en: 'Thank you', id: 'Terimakasih' },
            isCorrect: false,
         },
      ],
      clue: {
         en: 'No clue for this one — take a guess!',
         id: 'Waduuh, ga ada clue buat pertanyaan ini! kira kira apa yaa?',
      },
      solution: {
         en: 'Because a patient recovering is how the doctor succeeds.',
         id: 'Karena yang membantu dokter jadinya bisa sembuh, coba kalo bukan dokter',
      },
   },
]
