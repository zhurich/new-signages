export const CATEGORIES = [
  { key: "warning", title: "Предупреждающие" },
  { key: "priority", title: "Приоритета" },
  { key: "prohibitory", title: "Запрещающие" },
  { key: "mandatory", title: "Предписывающие" },
  { key: "special_instructions", title: "Особых предписаний" },
  { key: "informational", title: "Информационные" },
  { key: "service", title: "Сервиса" },
  { key: "additional_information", title: "Дополнительной информации" },
];

export const WARNING_SIGNS = [
  {
    code: "1.1",
    title: "Железнодорожный переезд со шлагбаумом",
    categoryKey: "warning",
  },
  {
    code: "1.2",
    title: "Железнодорожный переезд без шлагбаума",
    categoryKey: "warning",
  },
  {
    code: "1.3.1",
    title: "Однопутная железная дорога",
    categoryKey: "warning",
  },
  {
    code: "1.3.2",
    title: "Многопутная железная дорога",
    categoryKey: "warning",
  },
  {
    code: "1.4.1",
    title: "Приближение к железнодорожному переезду (300 м)",
    categoryKey: "warning",
  },
  {
    code: "1.4.2",
    title: "Приближение к железнодорожному переезду (200 м)",
    categoryKey: "warning",
  },
  {
    code: "1.4.3",
    title: "Приближение к железнодорожному переезду (100 м)",
    categoryKey: "warning",
  },
  {
    code: "1.4.4",
    title: "Приближение к железнодорожному переезду (50 м)",
    categoryKey: "warning",
  },
  {
    code: "1.4.5",
    title: "Приближение к железнодорожному переезду (обычное)",
    categoryKey: "warning",
  },
  {
    code: "1.5",
    title: "Пересечение с трамвайными путями",
    categoryKey: "warning",
  },
  {
    code: "1.6",
    title: "Пересечение с круговым движением",
    categoryKey: "warning",
  },
  { code: "1.7", title: "Светофорное регулирование", categoryKey: "warning" },
  { code: "1.8", title: "Пешеходный переход", categoryKey: "warning" },
  { code: "1.9", title: "Дети", categoryKey: "warning" },
  { code: "1.10", title: "Перегон скота", categoryKey: "warning" },
  { code: "1.11", title: "Дикие животные", categoryKey: "warning" },
  { code: "1.12.1", title: "Опасный поворот направо", categoryKey: "warning" },
  { code: "1.12.2", title: "Опасный поворот налево", categoryKey: "warning" },
  { code: "1.13", title: "Опасные повороты", categoryKey: "warning" },
  { code: "1.14", title: "Крутой спуск", categoryKey: "warning" },
  { code: "1.15", title: "Крутой подъём", categoryKey: "warning" },
  {
    code: "1.16",
    title: "Сужение дороги с двух сторон",
    categoryKey: "warning",
  },
  { code: "1.17", title: "Выброс гравия", categoryKey: "warning" },
  { code: "1.18.1", title: "Сужение дороги справа", categoryKey: "warning" },
  { code: "1.18.2", title: "Сужение дороги слева", categoryKey: "warning" },
  { code: "1.19", title: "Тоннель", categoryKey: "warning" },
  { code: "1.20", title: "Дорожные работы", categoryKey: "warning" },
  { code: "1.21", title: "Переправа через реку", categoryKey: "warning" },
  { code: "1.22", title: "Скользкая дорога", categoryKey: "warning" },
  { code: "1.23", title: "Неровная дорога", categoryKey: "warning" },
  { code: "1.24", title: "Затор на дороге", categoryKey: "warning" },
  { code: "1.25", title: "Боковой ветер", categoryKey: "warning" },
  { code: "1.26", title: "Низколетящие самолёты", categoryKey: "warning" },
  {
    code: "1.27",
    title: "Пересечение равнозначных дорог",
    categoryKey: "warning",
  },
  { code: "1.28", title: "Опасная обочина", categoryKey: "warning" },
  { code: "1.29", title: "Искусственная неровность", categoryKey: "warning" },
  { code: "1.30", title: "Прочие опасности", categoryKey: "warning" },
  {
    code: "1.31.1",
    title: "Направляющие полосы (слева)",
    categoryKey: "warning",
  },
  {
    code: "1.31.2",
    title: "Направляющие полосы (справа)",
    categoryKey: "warning",
  },
  {
    code: "1.31.3",
    title: "Направляющие полосы (обе стороны)",
    categoryKey: "warning",
  },
];

export const PRIORITY_SIGNS = [
  { code: "2.1", title: "Главная дорога", categoryKey: "priority" },
  { code: "2.2", title: "Конец главной дороги", categoryKey: "priority" },
  {
    code: "2.3.1",
    title: "Пересечение со второстепенной дорогой",
    categoryKey: "priority",
  },
  {
    code: "2.3.2",
    title: "Примыкание второстепенной дороги справа",
    categoryKey: "priority",
  },
  {
    code: "2.3.3",
    title: "Примыкание второстепенной дороги слева",
    categoryKey: "priority",
  },
  { code: "2.4", title: "Уступите дорогу", categoryKey: "priority" },
  {
    code: "2.5",
    title: "Движение без остановки запрещено",
    categoryKey: "priority",
  },
  {
    code: "2.6",
    title: "Преимущество встречного движения",
    categoryKey: "priority",
  },
  {
    code: "2.7",
    title: "Преимущество перед встречным движением",
    categoryKey: "priority",
  },
];

export const PROHIBITORY_SIGNS = [
  { code: "3.1", title: "Остановка запрещена", categoryKey: "prohibitory" },
  { code: "3.2", title: "Стоянка запрещена", categoryKey: "prohibitory" },
  {
    code: "3.3",
    title: "Остановка запрещена в обоих направлениях",
    categoryKey: "prohibitory",
  },
  {
    code: "3.4",
    title: "Стоянка запрещена в обоих направлениях",
    categoryKey: "prohibitory",
  },
  {
    code: "3.5",
    title: "Ограничение максимальной скорости",
    categoryKey: "prohibitory",
  },
  {
    code: "3.6",
    title: "Запрещено движение транспортных средств",
    categoryKey: "prohibitory",
  },
  {
    code: "3.7",
    title: "Запрещено движение транспортных средств в обоих направлениях",
    categoryKey: "prohibitory",
  },
  {
    code: "3.8",
    title: "Запрещено движение транспортных средств для определенных категорий",
    categoryKey: "prohibitory",
  },
  { code: "3.9", title: "Запрещен обгон", categoryKey: "prohibitory" },
  { code: "3.10", title: "Запрещен разворот", categoryKey: "prohibitory" },
  {
    code: "3.11",
    title: "Запрещена разворот в обоих направлениях",
    categoryKey: "prohibitory",
  },
  {
    code: "3.12",
    title: "Запрещена стоянка в обоих направлениях",
    categoryKey: "prohibitory",
  },
  {
    code: "3.13",
    title: "Запрещена остановка в обоих направлениях",
    categoryKey: "prohibitory",
  },
  {
    code: "3.14",
    title: "Запрещено движение грузовых автомобилей",
    categoryKey: "prohibitory",
  },
  {
    code: "3.15",
    title: "Запрещено движение транспортных средств с прицепами",
    categoryKey: "prohibitory",
  },
  {
    code: "3.16",
    title: "Запрещено движение велосипедистов",
    categoryKey: "prohibitory",
  },
  {
    code: "3.17",
    title: "Запрещено движение мопедов",
    categoryKey: "prohibitory",
  },
  {
    code: "3.18",
    title: "Запрещено движение моторных лодок",
    categoryKey: "prohibitory",
  },
  {
    code: "3.19",
    title:
      "Запрещено движение транспортных средств, не соответствующих требованиям экологического класса",
    categoryKey: "prohibitory",
  },
  {
    code: "3.20",
    title: "Запрещено движение транспортных средств с высокой степенью шума",
    categoryKey: "prohibitory",
  },
  {
    code: "3.21",
    title: "Запрещено движение транспортных средств, перевозящих опасные грузы",
    categoryKey: "prohibitory",
  },
  {
    code: "3.22",
    title:
      "Запрещено движение транспортных средств с максимальной массой более указанной",
    categoryKey: "prohibitory",
  },
  {
    code: "3.23",
    title:
      "Запрещено движение транспортных средств с максимальной нагрузкой на ось",
    categoryKey: "prohibitory",
  },
  {
    code: "3.24",
    title:
      "Запрещено движение транспортных средств с прицепами (с запрещением для определенной категории)",
    categoryKey: "prohibitory",
  },
  {
    code: "3.25",
    title:
      "Запрещено движение транспортных средств, предназначенных для перевозки определенных товаров",
    categoryKey: "prohibitory",
  },
  {
    code: "3.26",
    title: "Запрещено движение транспортных средств, перевозящих животных",
    categoryKey: "prohibitory",
  },
  {
    code: "3.27",
    title: "Запрещено движение пешеходов",
    categoryKey: "prohibitory",
  },
  {
    code: "3.28",
    title: "Запрещено движение животных",
    categoryKey: "prohibitory",
  },
  {
    code: "3.29",
    title: "Запрещено движение транспорта с прицепами в обоих направлениях",
    categoryKey: "prohibitory",
  },
  {
    code: "3.30",
    title: "Запрещено движение пешеходных транспортных средств",
    categoryKey: "prohibitory",
  },
  {
    code: "3.31",
    title:
      "Запрещено движение транспортных средств, не имеющих необходимых документов",
    categoryKey: "prohibitory",
  },
  {
    code: "3.32",
    title: "Запрещено движение транспорта, не прошедшего технический осмотр",
    categoryKey: "prohibitory",
  },
  {
    code: "3.33",
    title:
      "Запрещено движение транспорта, не зарегистрированного в установленном порядке",
    categoryKey: "prohibitory",
  },
  {
    code: "3.34",
    title:
      "Запрещено движение транспортных средств, не прошедших проверку по загрязнению окружающей среды",
    categoryKey: "prohibitory",
  },
  {
    code: "3.35",
    title:
      "Запрещено движение транспортных средств, нарушающих требования по безопасности движения",
    categoryKey: "prohibitory",
  },
  {
    code: "3.36",
    title:
      "Запрещено движение транспортных средств, нарушающих требования по охране окружающей среды",
    categoryKey: "prohibitory",
  },
  {
    code: "3.37",
    title: "Запрещено движение транспортных средств с низкой подвеской",
    categoryKey: "prohibitory",
  },
  {
    code: "3.38",
    title: "Запрещено движение по территории",
    categoryKey: "prohibitory",
  },
];

export const MANDATORY_SIGNS = [
  {
    code: "4.1",
    title: "Обязательное направление движения",
    categoryKey: "mandatory",
  },
  {
    code: "4.2",
    title: "Обязательное направление движения в обоих направлениях",
    categoryKey: "mandatory",
  },
  { code: "4.3", title: "Движение только прямо", categoryKey: "mandatory" },
  { code: "4.4", title: "Движение только направо", categoryKey: "mandatory" },
  { code: "4.5", title: "Движение только налево", categoryKey: "mandatory" },
  {
    code: "4.6",
    title: "Обязательное движение по полосе",
    categoryKey: "mandatory",
  },
  {
    code: "4.7",
    title: "Обязательное движение по полосам в обоих направлениях",
    categoryKey: "mandatory",
  },
  {
    code: "4.8",
    title:
      "Движение запрещено на участке дороги для всех транспортных средств, кроме указанных",
    categoryKey: "mandatory",
  },
  {
    code: "4.9",
    title: "Обязательное движение по обочине",
    categoryKey: "mandatory",
  },
  {
    code: "4.10",
    title: "Обязательное движение по направляющим полосам",
    categoryKey: "mandatory",
  },
  {
    code: "4.11",
    title: "Обязательное движение по кольцевой развязке",
    categoryKey: "mandatory",
  },
  {
    code: "4.12",
    title: "Обязательное движение по мосту",
    categoryKey: "mandatory",
  },
  {
    code: "4.13",
    title:
      "Обязательное движение по полосам, предназначенным для определенного типа транспорта",
    categoryKey: "mandatory",
  },
  {
    code: "4.14",
    title:
      "Обязательное движение по полосам, предназначенным для определенной категории транспортных средств",
    categoryKey: "mandatory",
  },
  {
    code: "4.15",
    title:
      "Обязательное движение по полосам, определенным для движения по определенному направлению",
    categoryKey: "mandatory",
  },
  {
    code: "4.16",
    title:
      "Движение по полосе, предназначенной для работы транспортных средств с определенными характеристиками",
    categoryKey: "mandatory",
  },
];

export const ALL_SIGNS: Record<
  string,
  { code: string; title: string; categoryKey: string }[]
> = {
  warning: WARNING_SIGNS,
  priority: PRIORITY_SIGNS,
  prohibitory: PROHIBITORY_SIGNS,
  mandatory: MANDATORY_SIGNS,
};
