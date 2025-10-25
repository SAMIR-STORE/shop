// بيانات المنتجات — عدلها كما تشاء
const PRODUCTS = [
  {
    id: 'pdf-physics-01',
    name: 'Resume de course Physique en francais 2BAC  ',
    short: '📘 ملخص شامل في الفيزياء والكيمياء – السنة الثانية بكالوريا',
    description: 'ملخص شامل للفيزياء والكيمياء للسنة الثانية بكالوريا. يحتوي على ملخصات دقيقة ومنظمة لجميع الدروس، مع جداول تلخيصية ومخططات ذهنية لتسهيل المراجعة السريعة والتحضير للامتحانات..',
    price: 29,
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
    short: 'جميع  التعاريف التي ستحتاجها في الفزياء ولإكمياء بشكل مختصر جدا',
    description: 'ستجد في هدا pdf جميع التعاريف التي ستحتاجها طيلة السنة الدراسية في مادة الفزياء', 
    price: 0,
    currency: 'MAD',
    images: [
    'defPc.png', 
    'defPc1.png',
    'defPc2.png'
    
    ],
    features: [
      'ملف pdf يتكون من 3 صفحات',
      'جودة عالية وبشكل واضح'
    ],
    buyLink: 'definition Pc.pdf'
  },
   {
    id: 'exam english',
    name: 'examen english ',
    short: 'امتحانات وطنية في مادة اللغة لإنجليزية بدون تصحيح من سنة 2011 حتى 2023',
    description: 'ستجد في هدا pdf جيمع لإمتحانات الوطنية الخاصة بشعبتي العلوم وحتى الشعبات التقنية ابتداءً من سنة 2011 حتى 2023', 
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
      'ملف pdf يتكون من 143 صفحات',
      'جودة عالية وبشكل واضح'
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
    price: 29,
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
    short: ' هدا pdf يحتوي على جميع الوطنيات في مادة الرياضيات مع التصحيح من سنة 2011 حتى سنة 2024 ',
    description: ' مع هدا pdf لن تحتاج  مرة تانية الى تنزيل اي تمارين او امتحانات في مادة الرياضيات ولن تضطر الى البحت عن الحلول.',
    price: 0,
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
      'ملف pdf يتكون من 468 صفحة',
      'جودة عالية وبشكل واضح',
      'ملف قابل للطباعة',
      'هدا pdf سيساعدك كتيرا في الوطنيات لأنه يحتوي على حلول بشكل مبسط جدا'
      
      
    ],
    buyLink: 'https://wa.me/message/LWXDVOQC5JETC1'

    
  },
  {
    id: 'exam-math',
    name: 'Tous examens nationaux maths sans correction',
    short: 'يحتوي على جميع الوطنيات في مادة الرياضيات',
    description: 'يحتوي هدا pdf على وطنيات في مادة الرياضيات باللغة الفرنسية', 
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
      
      'ملفات عمل قابلة للتعديل'
    ],
    buyLink: 'tous examens nationaux maths sans correction.pdf'
  },   
  
  {
    id: 'ss-node',
    name: '1st semester English-1-prof: Sara English',
    short: 'كتاب من انتاج لأستادة سارا  ',
    description: 'يحتوي على ملخص وتمارين  خاصة بالدورة لأولى لمادة لإنجليزية التانية باك جميع الشعب.',
    price: 0,
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
    name: 'Résumé ATP et Muscle + <Exercices Nationaux corrigés>',
    short: 'ملخص و متحانات وطنية مع التصحيح في درسين APT و muscl  .',
    description: 'ملخص رائع وشامل لدرسي ATP و Muscl الخاصين بشعبتي pc و svt اضافة الى امتحانات جهوية خاصة بهذين المحورين فقط مع التصحيح.',
    price: 0,
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
      '  ملخصات بسيطة',
      'تمارين وطنية خاصة بالدرس مع الحل',
      ' تنظيم جيد وسهولة في لقراءة'
    ],
    buyLink: 'https://wa.me/message/LWXDVOQC5JETC1'
  },
  {
    id: 'ebook-ui-design',
    name: 'Résumé Math-examens-nationaux2025 -Prof-Fayssal.pdf',
    short: 'ملخص قصير وشامل لجميع دروس الرياضيات وفق لإيطار المرجعي لسنة 2025',
    description: 'يحتوي هدا pdf على ملخص رائع لمادة الرياضيات الى امتحانات خاصة بكل دورة مع التصحيح', 
    price: 0,
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
      ' تنظيم اكتر من جيد ومريح للعين',
      'ملفات عمل قابلة للتعديل'
    ],
    buyLink: '#'
  },
  {
    id: 'maxi-svt',
    name: 'Maxi-svt 1st',
    short: 'هدا pdf تابع لسلاسل maxi',
    description: 'يحتوي هدا pdf على مجزوءة واحدة خاصة بي svt الدورة لأولى', 
    price: 0,
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
      'يعلمك ايضا طريقة التعامل مع لأسئلة وطريقة لإجابة عنها '
    ],
    buyLink: 'https://wa.me/message/LWXDVOQC5JETC1'
  },
   {
    id: 'course philo',
    name: 'المختصر في دروس الفلسفة ',
    short: 'ملخص بسيط جدا لجميع دروس الفلسفة',
    description: 'يحتوي هدا pdf على جميع دروس الفلسفة بشكل مختصر اضافة الى منهجيات خاصة بي القولة والنص والسؤال', 
    price: 9,
    currency: 'MAD',
    images: [
    'philo1.png', 
    'philo2.png',
    'philo3.png'
    
    ],
    features: [
      'ملف pdf يتكون من 16 صفحة',
      'تنظيم جيد وسهولة في لقراءة'
    ],
    buyLink: 'examen english.pdf'
  },
  {
    id: 'limet avec correction ',
    name: '  pdf 250 limet avec correction',
    short: 'ملف شامل لـ 250 تمرين في درس النهايات مع التصحيح المفصل لطلاب الثانية باكالوريا.',
    description: ' هذا الملف بصيغة PDF يحتوي على 250 تمرينًا محلولًا حول درس النهايات، موجه خصيصًا لطلاب السنة الثانية من سلك البكالوريا في مسالك العلوم الفيزيائية (PC)، وعلوم الحياة والأرض (SVT)، والعلوم الرياضية (SM). يقدم الملف تمارين متنوعة مع حلولها المفصلة لمساعدة التلاميذ على فهم وتطبيق مختلف تقنيات حساب النهايات والاستعداد الجيد للامتحانات.  ', 
    price: 0,
    currency: 'MAD',
    images: [
    '250-limet-avec correction-screen1.png', 
    '250-limet-avec correction-screen2.png',
    '250-limet-avec correction-screen3.png'
    ],
    features: [
      'موجه لطلاب الثانية باكالوريا (SVT, PC, SM)',
      'يحتوي على 250 تمرين متنوع في النهايات ',
      '  حلول مفصلة لجميع التمارين خطوة بخطوة',
      ' كتاب PDF من 138 صفحة',
      ' يعلمك طريقة التعامل مع الأمثلة ومنهجية الإجابة '
    ],
    buyLink: '250-limet avec correction .pdf '
  }
  //Définitions de physique et de chimie
]
// يمكنك لاحقًا تبديل العملة والأسعار أو إضافة خصومات/رموز 
 


