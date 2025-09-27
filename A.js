// بيانات المنتجات — عدلها كما تشاء
const PRODUCTS = [
  {
    id: 'pdf-physics-01',
    name: 'Resume de course Physique en francais 2BAC  ',
    short: '📘 ملخص شامل في الفيزياء والكيمياء – السنة الثانية بكالوريا',
    description: 'ملخص شامل للفيزياء والكيمياء للسنة الثانية بكالوريا. يحتوي على ملخصات دقيقة ومنظمة لجميع الدروس، مع جداول تلخيصية ومخططات ذهنية لتسهيل المراجعة السريعة والتحضير للامتحانات..',
    price: 49,
    currency: 'MAD',
    images: [
      'asl.png',
      'Cpy1.png',
      'copy2.png'
    ],
    features: [
      '🎯 مميزات الملف:',
      ' مناسب للمراجعة السريعة قبل الفروض والامتحان الوطني',
      ' منظم حسب الوحدات الدراسية الرسمية',
      '20 صفحة PDF عالية الجودة',
      'ملف قابل للطباعة',
      ' يساعدك على التركيز على أهم النقاط دون تشتت',
      
    ],
    // رابط الشراء (Placeholder الآن) — سنستبدله لاحقًا برابط الدفع
    buyLink: 'https://wa.me/message/LWXDVOQC5JETC1'
  },
  {
    id: 'defPcX',
    name: 'Définitions de physique et de chimie',
    short: 'x',
    description: 'x', 
    price: 0,
    currency: 'MAD',
    images: [
    'defPc.png', 
    'defPc1.png',
    'defPc2.png'
    
    ],
    features: [
      'x',
      'x'
    ],
    buyLink: 'definition Pc.pdf'
  },
   {
    id: 'exam english',
    name: 'examen english ',
    short: 'from 2011 to 2023',
    description: 'x', 
    price: 0,
    currency: 'MAD',
    images: [
    'exam-eng0.png', 
    'exam-eng1.png',
    'exam-eng2.png',
    'exam-eng3.png',
    'exam-eng4.png'
    
    ],
    features: [
      'x',
      'x'
    ],
    buyLink: 'examen english.pdf'
  },
  {
    id: 'code-snippets-node',
    name: 'مجموعة واتساب لدراسة ',
    short: 'هده المجموعة عامة بحيت يمكن للجميع الدخول لها مجانا ولكن بشروط :',
    description: 'هده المجموعة عامة بحيت يمكن للجميع الدخول لها مجانا ولكن بشروط : 1- الإنضباط > 2-احترام اعضاء المجموعة > 3- العمل بجد',
    price: 0,
    currency: 'MAD',
    images: [
      '1.PNG',
      '2.PNG',
      '3.PNG',
    ],
    features: [
      ' 🎯مميزات هده المجموعة:',
      'العمل يوميا',
      'مشرف ذو خبرة سابقة',
      'التركيز على المواد الأساسية : فزياء > رياضيات > svt'
    ],
    buyLink: 'https://chat.whatsapp.com/DqhSaVyj5KrHw5BRXWTm7e?mode=ems_copy_t'
  },
  // بيانات المنتجات — عدّلها كما تشاء
  {
    id: 'pdf-ph-01',
    name: ' اللاصق في لمات ',
    short: 'كتاب اللاصق في المات من انتاج سعيد ابراغ يحتوي على جميع الدروس وفق لإيطار المرجعي لسنة 2025.',
    description: 'كتاب اللاصق في المات من انتاج سعيد ابراغ يحتوي على جميع الدروس وفق لإيطار المرجعي لسنة 2025, يحتوي هدا pdf على 550 صفحة مع شرح لدروس الرياضيات بالتفاصيل مع تمارين مصححة وكذلك امتحانات خاصة بكل فرض مع التصحيح وأيضا امتحانات وطنية مع التصحيح وكذلك نمادج متوقعة من انتاج لأستاد ابراغ.',
    price: 50,
    currency: 'MAD',
    images: [
      'debut.png',
      'math 1.png',
      'math 2.png',
      'math 3.png',
      'fin.png'

    ],
    features: [
      ':انظر الفهرس 🟡',
      '550 صفحة PDF عالية الجودة',
      ' تمارين محلولة بالكامل',
      'ملف قابل للطباعة',
      'تحديثات مجانية لمدة 3 أشهر'
    ],
    buyLink: 'https://wa.me/message/LWXDVOQC5JETC1'
  },
   {
    id: 'exam nationaux corr',
    name: 'les examans nationaux ++ Correction 💥',
    short: 'كتاب من انتاج لأستادة سارا  ',
    description: 'يحتوي على ملخص وتمارين  خاصة بالدورة لأولى لمادة لإنجليزية التانية باك جميع الشعب.',
    price: 39,
    currency: 'MAD',
    images: [
      'exam-mat-corr0.png',
      'exam-mat-corr1.png',
      'exam-mat-corr2.png',
      'exam-mat-corr3.png',
      'exam-mat-corr4.png',
      'exam-mat-corr5.png',
      'exam-mat-corr6.png',
      'exam-mat-corr7.png',
      'exam-mat-corr8.png',
      'exam-mat-corr8.png',
      'exam-mat-corr9.png',
      'exam-mat-corr10.png',
      'exam-mat-corr11.png',
      'exam-mat-corr12.png',
    ],
    features: [
      ':انظر الفهرس 🟡',
      '62 صفحة PDF عالية الجودة',
      'ملف قابل للطباعة',
      ':انظر الفهرس 🟡'
      
      
    ],
    buyLink: 'https://wa.me/message/LWXDVOQC5JETC1'

    
  },
  {
    id: 'exam-math',
    name: 'Tous examens nationaux maths sans correction',
    short: 'x',
    description: 'x', 
    price: 0,
    currency: 'MAD',
    images: [
    'exam-mat0.png', 
    'exam-mat1.png',
    'exam-mat2.png',
    'exam-mat3.png',
    'exam-mat4.png'
    ],
    features: [
      'كتاب PDF من 346 صفحة',
      'تصاميم عالية الجودة',
      'فصول تفاعلية',
      'ملفات عمل قابلة للتعديل'
    ],
    buyLink: 'tous examens nationaux maths sans correction.pdf'
  },   
  
  {
    id: 'ss-node',
    name: '1st semester English-1-prof: Sara English',
    short: 'كتاب من انتاج لأستادة سارا  ',
    description: 'يحتوي على ملخص وتمارين  خاصة بالدورة لأولى لمادة لإنجليزية التانية باك جميع الشعب.',
    price: 19,
    currency: 'MAD',
    images: [
      'en1.png',
      'en2.png',
      'en3.png',
      'en4.png',
      'en5.png'
   
    ],
    features: [
      ':انظر الفهرس 🟡',
      '62 صفحة PDF عالية الجودة',
      'ملف قابل للطباعة',
      ':انظر الفهرس 🟡'
      
      
    ],
    buyLink: 'https://wa.me/message/LWXDVOQC5JETC1'

    
  },

  {
    id: 'ss-js',
    name: 'Résumé ATP et Muscle + Exercices Nationaux corrigés',
    short: ' X .',
    description: 'X.',
    price: 20,
    currency: 'MAD',
    images: [
      'atp et muscl 0.png',
      'atp et muscl 1.png',
      'atp et muscl 2.png',
      'atp et muscl 3.png',
      'atp et muscl 4.png',
      'atp et muscl 5.png'
    ],
    features: [
      'كتاب PDF من 31 صفحة',
      '  X',
      'X',
      ' X'
    ],
    buyLink: '#'
  },
  {
    id: 'ebook-ui-design',
    name: 'Résumé Math-examens-nationaux2025 -Prof-Fayssal.pdf',
    short: 'x',
    description: 'x', 
    price: 49,
    currency: 'MAD',
    images: [
    'mat1.png',
    'mat2.png',
    'mat3.png',
    'mat4.png',
    'mat5.png',
    ],
    features: [
      'كتاب PDF من 120 صفحة',
      'تصاميم عالية الجودة',
      'فصول تفاعلية',
      'ملفات عمل قابلة للتعديل'
    ],
    buyLink: '#'
  },
  {
    id: 'maxi-svt',
    name: 'Maxi-svt 1st',
    short: 'x',
    description: 'x', 
    price: 29,
    currency: 'MAD',
    images: [
    'maxi-svt0.png', 
    'maxi-svt1.png',
    'maxi-svt2.png',
    'maxi-svt3.png',
    'maxi-svt5.png'
    ],
    features: [
      'كتاب PDF من 332 صفحة',
      'تصاميم عالية الجودة',
      'فصول تفاعلية',
      'ملفات عمل قابلة للتعديل'
    ],
    buyLink: '#'
  },
   {
    id: 'course philo',
    name: 'المختصر في دروس الفلسفة ',
    short: 'x',
    description: 'x', 
    price: 9,
    currency: 'MAD',
    images: [
    'philo1.png', 
    'philo2.png',
    'philo3.png'
    
    ],
    features: [
      'x',
      'x'
    ],
    buyLink: 'examen english.pdf'
  },
  //Définitions de physique et de chimie
]
// يمكنك لاحقًا تبديل العملة والأسعار أو إضافة خصومات/رموز 
 

// يمكنك لاحقًا تبديل العملة والأسعار أو إضافة خصومات/رموز ترويجية هنا.
  


// يمكنك لاحقًا تبديل العملة والأسعار أو إضافة خصومات/رموز ترويجية هنا.