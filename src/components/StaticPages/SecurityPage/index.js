import React from 'react';
import './SecurityPage.css';
import MainPageHeader from '../../MainPageComponents/MainPageHeader';
import MainPageFooter from '../../MainPageComponents/MainPageFooter';

const SecurityPage = () => {
  return (
    <div className="App">
      <MainPageHeader/>
      <body>
        <div className="body__info__security">
          <h1 className="body__info__security__title">Заходи безпеки при використанні банківських продуктів</h1>
          <div className="body__info__security__paragraph">
            <h3>
              Основні терміни в сфері захисту банківської таємниці та персональних даних
            </h3>
            <ul>
              <li>
                <b>База персональних даних -</b> іменована сукупність упорядкованих персональних даних в електронній формі та/або у формі картотек персональних даних.
              </li>
              <li>
                <b>Володілець персональних даних -</b> фізична або юридична особа, яка визначає мету обробки персональних даних, встановлює склад цих даних та процедури їх обробки, якщо інше не визначено законом.
              </li>
              <li>
                <b>Згода суб’єкта персональних даних -</b> добровільне волевиявлення фізичної особи (за умови її поінформованості) щодо надання дозволу на обробку її персональних даних відповідно до сформульованої мети їх обробки, висловлене у письмовій формі або у формі, що дає змогу зробити висновок про надання згоди. У сфері електронної комерції згода суб’єкта персональних даних може бути надана під час реєстрації в інформаційно-телекомунікаційній системі суб’єкта електронної комерції шляхом проставлення відмітки про надання дозволу на обробку своїх персональних даних відповідно до сформульованої мети їх обробки, за умови, що  така система не створює можливостей для обробки персональних даних до моменту проставлення відмітки.
              </li>
              <li>
                <b>Знеособлення персональних даних -</b> вилучення відомостей, які дають змогу прямо чи опосередковано ідентифікувати особу.
              </li>
              <li>
                <b>Картотека -</b> будь-які структуровані персональні дані, доступні за визначеними критеріями, незалежно від того, чи такі дані централізовані, децентралізовані або розділені за функціональними чи географічними принципами.
              </li>
              <li>
                <b>Обробка персональних даних -</b> будь-яка дія або сукупність дій, таких як збирання, реєстрація, накопичення, зберігання, адаптування, зміна, поновлення, використання і поширення (розповсюдження, реалізація, передача), знеособлення, знищення персональних даних, у тому числі з використанням інформаційних (автоматизованих) систем.
              </li>
              <li>
                <b>Персональні дані -</b> відомості чи сукупність відомостей про фізичну особу, яка ідентифікована або може бути конкретно ідентифікована.
              </li>
              <li>
                <b>Розпорядник персональних даних -</b> фізична чи юридична особа, якій володільцем персональних даних або законом надано право обробляти ці дані від імені володільця.
              </li>
              <li>
                <b>Суб’єкт персональних даних -</b> фізична особа, персональні дані якої обробляються.
              </li>
              <li>
                <b>Третя особа -</b> будь-яка особа, за винятком суб’єкта персональних даних, володільця чи розпорядника персональних даних та Уповноваженого Верховної Ради України з прав людини, якій володільцем чи розпорядником персональних даних здійснюється передача персональних даних.
              </li>
            </ul>
          </div>
          <div className="body__info__security__paragraph">
            <h3>
              Мета обробки персональних даних
            </h3>
            <span>
              Мета обробки персональних даних Відповідно до вимог законодавства Банком як володільцем персональних даних була сформульована мета обробки персональних даних, яка визначена у внутрішніх документах Банку, що регулюють його діяльність, та відповідає законодавству про захист персональних даних. Таким чином, метою обробки Банком персональних даних є:
            </span>
            <ul>
              <li>
                здійснення Банком своєї фінансового-господарської діяльності;
              </li>
              <li>
                пропонування та/або надання повного кола послуг Банком та/або третіми особами, у тому числі шляхом здійснення прямих контактів із суб’єктом персональних даних за допомогою засобів зв’язку;
              </li>
              <li>
                укладення, зміни, припинення договорів, виконання договорів, а також для здійснення дій, пов’язаних із укладенням, зміною, припиненням та/або виконанням договорів, у тому числі шляхом здійснення прямих контактів із суб’єктом персональних даних за допомогою засобів зв’язку;
              </li>
              <li>
                забезпечення реалізації трудових та пов’язаних із ними відносин (організація відряджень, культурних та навчальних заходів, безпека осіб, налагодження відносин у трудовому колективі, внутрішньобанківських процесів, посилення корпоративних зв’язків та внутрішніх комунікацій тощо), відносин, що виникають на основі договорів про виконання робіт/надання послуг, відносин у сфері управління людськими ресурсами, у тому числі кадровим потенціалом, які регулюються Кодексом законів про працю України, Цивільним кодексом України, Законом України «Про банки і банківську діяльність», Статутом, внутрішніми документами Банку, а також здійснення Банком прав та виконання обов’язків за колективним договором, організації Банком та/або третіми особами медичного обслуговування, оздоровлення і відпочинку, пенсійного забезпечення чи іншого виду соціального захисту/забезпечення суб’єкта персональних даних та/чи його родичів;
              </li>
              <li>
                захисту Банком своїх прав та інтересів при реалізації Банком відносин, які регулюються Цивільним кодексом України, Господарським кодексом України, Законами України «Про банки і банківську діяльність», «Про акціонерні товариства», «Про господарські товариства», «Про державну реєстрацію юридичних осіб та фізичних осіб-підприємців», «Про запобігання та протидію легалізації (відмиванню) доходів, одержаних злочинним шляхом, або фінансуванню тероризму та фінансуванню розповсюдження зброї масового знищення», «Про платіжні системи та переказ коштів в Україні», «Про організацію формування та обігу кредитних історій» тощо.
              </li>
            </ul>
          </div>
          <div className="body__info__security__paragraph">
            <h3>
              Підстави обробки персональних даних
            </h3>
            <span>
              Обробка персональних даних здійснюється Банком за згодою суб’єкта персональних даних, а також в інших випадках, передбачених статтею 11 Закону України «Про захист персональних даних».
            </span>
            <span>
              Підставами обробки персональних даних відповідно до законодавства є:
            </span>
            <ul>
              <li>
                згода суб’єкта персональних даних на обробку його персональних даних; - дозвіл на обробку персональних даних, наданий володільцю персональних даних відповідно до закону виключно для здійснення його повноважень;
              </li>
              <li>
                укладення та виконання правочину, стороною якого є суб’єкт персональних даних або який укладено на користь суб’єкта персональних даних чи для здійснення заходів, що передують укладенню правочину на вимогу суб’єкта персональних даних;
              </li>
              <li>
                захист життєво важливих інтересів суб’єкта персональних даних; - необхідність виконання обов’язку володільця персональних даних, який передбачений законом;
              </li>
              <li>
                необхідність захисту законних інтересів володільця персональних даних або третьої особи, якій передаються персональні дані, крім випадків, коли потреби захисту основоположних прав і свобод суб’єкта персональних даних у зв’язку з обробкою його даних переважають такі інтереси.
              </li>
            </ul>
            <span>
              Звертаємо Вашу увагу, що Банк здійснює обробку персональних даних, отриманих із загальнодоступних джерел, без згоди суб’єкта персональних даних. Звернення фізичної особи до Банку або користування послугами Банку свідчить про згоду такої особи на обробку Банком її персональних даних у зв’язку із таким зверненням чи користуванням послугами Банку. Заперечення особи щодо обробки персональних даних, необхідних Банку для виконання своїх зобов’язань, зокрема відкликання особою згоди на обробку даних, можуть стати підставою для припинення виконання Банком умов укладених договорів. У разі відкликання фізичною особою згоди на обробку персональних даних без виконання нею процедур, необхідних для припинення договірних або інших відносин з Банком, Банк продовжуватиме обробку персональних даних в межах та обсягах, обумовлених реалізацією існуючих правовідносин та законодавством України, зокрема для захисту Банком своїх прав та законних інтересів за договорами. Банк здійснює обробку персональних даних до закінчення строків зберігання інформації, визначених законодавством України або внутрішніми документами Банку.
            </span>
            <span>
              Порядок доступу до персональних даних визначається Банком самостійно відповідно до вимог Закону України «Про захист персональних даних». Для отримання доступу до персональних даних, а також з інших питань щодо обробки персональних даних у Банку необхідно письмово звертатися за адресою: 01033, м. Київ, вул. Жилянська, 43
            </span>
          </div>
          <div className="body__info__security__paragraph">
            <h3>
              Склад та зміст персональних даних, які обробляються Банком
            </h3>
            <sapn>
              Склад та зміст персональних даних, які Банк має встановити для ідентифікації фізичної особи визначений чинним законодавством України, а також відповідними внутрішніми документами Банку, та складає будь-яку інформацію про фізичну особу, в тому числі, однак не виключно інформацію щодо:
            </sapn>
            <ul>
              <li>
                прізвища, імені, по батькові, інформації, яка зазначена в паспорті (або в іншому документі, що посвідчує особу), реєстраційного номеру облікової картки платника податків (ідентифікаційного номеру);»
              </li>
              <li>
                громадянства, дати та місця народження;»
              </li>
              <li>
                місця проживання/перебування та місця реєстрації проживання, умови проживання;»
              </li>
              <li>
                освіти, професії;»
              </li>
              <li>
                посади та місця роботи, стажу роботи;»
              </li>
              <li>
                фінансового стану, доходів/нарахувань, утримань;»
              </li>
              <li>
                записів голосу та/або фото-, відеозображень;»
              </li>
              <li>
                кредитної історії, а також будь-якої інформації про стан виконання фізичною особою обов’язків за договорами, які укладені з Банком та/або іншими установами;»
              </li>
              <li>
                номерів контактних телефонів/факсів, адреси електронної пошти;»
              </li>
              <li>
                фактів притягнення до адміністративної чи кримінальної відповідальності тощо.
              </li>
            </ul>
            <sapn>
              З метою здійснення моніторингу за операціями з використанням електронних платіжних засобів згідно чинного законодавства України, Банк здійснює обробку персональних даних щодо місця перебування/ місцезнаходження особи та реквізитів здійснених операцій (зняття готівкових коштів в банкоматах, використання платіжної картки при розрахунках за товари та послуги, інші операції).
            </sapn>
            <sapn>
              З метою надання послуг, передбачених Договором про надання послуг дистанційного обслуговування, Банк здійснює обробку щодо місцезнаходження Клієнта, номера контактного телефону, адреси електронної пошти. Банк відповідно до чинного законодавства України має право витребувати від Клієнта інші документи та відомості, які містять персональні дані, виключно з метою виконання Банком вимог чинного законодавства України, яке регулює відносини у сфері запобігання та протидії легалізації (відмиванню) доходів, одержаних злочинним шляхом, або фінансуванню тероризму та фінансуванню розповсюдження зброї масового знищення.
            </sapn>
            <sapn>
              Банк здійснює обробку персональних даних, отриманих від третіх осіб, якщо це передбачено законодавством України або за умови надання ними гарантії, що така передача здійснюється третьою особою з дотриманням вимог законодавства України і не порушує права осіб, персональні дані яких передаються Банку.
            </sapn>
            <span>
              Обробка Банком персональних даних про расове або етнічне походження, політичні, релігійні або світоглядні переконання, членство в політичних партіях та професійних спілках, а також даних, що стосуються здоров’я, статевого життя, біометричних або генетичних даних не здійснюється.
            </span>
          </div>
          <div className="body__info__security__paragraph">
            <h3>
              Права суб’єктів персональних даних
            </h3>
            <sapn>
              Відповідно до статті 8 Закону України «Про захист персональних даних» суб’єкт персональних даних має право:
            </sapn>
            <ol type="1">
              <li>
                Знати про джерела збирання, місцезнаходження своїх персональних даних, мету їх обробки, місцезнаходження або місце проживання (перебування) володільця чи розпорядника персональних даних або дати відповідне доручення щодо отримання цієї інформації уповноваженим ним особам, крім випадків, встановлених законом;
              </li>
              <li>
                Отримувати інформацію про умови надання доступу до персональних даних, зокрема інформацію про третіх осіб, яким передаються його персональні дані;
              </li>
              <li>
                На доступ до своїх персональних даних;
              </li>
              <li>
                Отримувати не пізніш як за тридцять календарних днів з дня надходження запиту, крім випадків, передбачених законом, відповідь про те, чи обробляються його персональні дані, а також отримувати зміст таких персональних даних;
              </li>
              <li>
                Пред’являти вмотивовану вимогу володільцю персональних даних із запереченням проти обробки своїх персональних даних;
              </li>
              <li>
                Пред'являти вмотивовану вимогу щодо зміни або знищення своїх персональних даних будь-яким володільцем та розпорядником персональних даних, якщо ці дані обробляються незаконно чи є недостовірними;
              </li>
              <li>
                На захист своїх персональних даних від незаконної обробки та випадкової втрати, знищення, пошкодження у зв'язку з умисним приховуванням, ненаданням чи несвоєчасним їх наданням, а також на захист від надання відомостей, що є недостовірними чи ганьблять честь, гідність та ділову репутацію фізичної особи;
              </li>
              <li>
                Звертатися із скаргами на обробку своїх персональних даних до Уповноваженого або до суду;
              </li>
              <li>
                Застосовувати засоби правового захисту в разі порушення законодавства про захист персональних даних;
              </li>
              <li>
                Вносити застереження стосовно обмеження права на обробку своїх персональних даних під час надання згоди;
              </li>
              <li>
                Відкликати згоду на обробку персональних даних;
              </li>
              <li>
                Знати механізм автоматичної обробки персональних даних;
              </li>
              <li>
                На захист від автоматизованого рішення, яке має для нього правові наслідки.
              </li>
            </ol>
          </div>
          <div className="body__info__security__paragraph">
            <h3>
              Особи, яким передаються персональні дані
            </h3>
            <span>
              У процесі обробки персональних даних за наявності підстав Банк має право поширювати (передавати) персональні дані, зокрема:»
            </span>
            <ul>
              <li>
                для забезпечення виконання третіми особами своїх функцій або надання послуг Банку, зокрема, аудиторам, страховим компаніям, оцінювачам, платіжним системам, установам, що здійснюють ідентифікацію, авторизацію та процесинг операцій, іншим банкам-контрагентам та іншим особам, якщо такі функції та послуги стосуються діяльності Банку, здійснюваних ним операцій, випущених ним платіжних та інших інструментів, або є необхідними для укладання та виконання Банком договорів (правочинів), надання відповідних послуг Клієнту Банку, а також партнерам Банку;»
              </li>
              <li>
                при настанні підстав для передачі третім особам банківської таємниці згідно з законодавством України або відповідно до умов укладених договорів;»
              </li>
              <li>
                на користь ОТП Групи та будь-яких осіб, що за характером корпоративних зв’язків належать до ОТП Групи в Україні та за кордоном;»
              </li>
              <li>
                особам, які надають Банку послуги з перевірки якості обслуговування, з організації аудіозапису, фото/відео-зйомки, поштових відправлень, телефонних дзвінків, відправлень SMSповідомлень, відправлень електронною поштою;»
              </li>
              <li>
                до бюро кредитних історій, у зв’язку зі стягненням простроченої заборгованості перед Банком, а також особам, що надають Банку послуги зі стягнення заборгованості;»
              </li>
              <li>
                особам, що надають Банку послуги зі зберігання документів, створення та зберігання їх електронних копій (архівів, баз даних);»
              </li>
              <li>
                особам, які здійснюють представництво інтересів Банку або надають послуги чи забезпечують іншу діяльність Банку, що не суперечить чинному законодавству України;»
              </li>
              <li>
                в інших випадках, передбачених чинним законодавством України та умовами укладених Банком договорів, та коли поширення (передача) персональних даних є необхідними з огляду на функції, повноваження та зобов’язання Банку у відповідних правовідносинах.
              </li>
            </ul>
            <sapn>
              Передача персональних даних третім особам здійснюється Банком у зазначених випадках без отримання додаткової письмової згоди та окремого повідомлення фізичної особи – суб’єкта персональних даних, а також за умови, що сторона, якій передаються персональні дані, вжила заходів щодо забезпечення вимог Закону України «Про захист персональних даних».
            </sapn>
          </div>
          <div className="body__info__security__paragraph">
            <h3>
              Права суб’єктів персональних даних
            </h3>
            <span>
              Банк з метою здійснення банківської діяльності та на виконання вимог чинного законодавства України здійснює обробку персональних даних фізичних осіб, зокрема: працівників Банку, Клієнтів – фізичних осіб, уповноважених осіб Клієнтів – юридичних осіб, контрагентів та інших осіб. Відповідно, Банк обробляє персональні дані в наступних базах персональних даних:»
            </span>
            <ul>
              <li>
                База персональних даних «Співробітники»;»
              </li>
              <li>
                База персональних даних «Клієнти»;»
              </li>
              <li>
                База персональних даних «Контрагенти».
              </li>
            </ul>
          </div>
        </div >
      </body >
      <MainPageFooter/>
    </div >
  );
}

export default SecurityPage;
