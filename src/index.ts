// Partial<T>
// 1) Є іорма редагування користувача.
//  Користувач може вибрати, які поля він хоче оновити. створити тип для такої форми на основі існуючого типу User

// 2) Є конфігураційний  об'єкт з декількома полями.
//  Створити функцію, яка приймає часткові налаштування та повертає повний конфіграційний об'єкт.

// Readonly<T>
// 3) Створити функцію, якаприймає масив чисел і повертає його ж, але гарантовано не змінюючи вхідний масив.

// 4) Створити об'єкт конфігураціїї, який не можна змювати після створення.

// Pick<T>
// 5)Є об'єкт користувача і потрібно створити функцію, яка повертає лише ім'я та електронну пошту користувача.

// 6) ???Ви хочете зберігти тільки певніполя з АРІ-відповіді для відображення в UI

// Record<K, T>
// 7) Створити об'єкт , який мапить імена користувачів до їх віку.
// 8) Мапа з іменами місяців до кількості їх днів

// Omit<T, K>
// 9) Є тип користувача. Створити новий тип без поля пароля для відпраки данних на клієнтську сторону
// 10) Створити новий тип на основі АРІ-відповіді, але без дати створення

// Завдання 1
// Є наступний JavaScript код:

let age: number = 50;
let name: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined;
let callback = (a: number): number => {
  return 100 + a;
};
// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

// Завдання 2
// JavaScript змінна може зберігати значення будь-якого типу:

let anything = -20;
anything = "Text";
anything = {};
// Який тип ви надаєте змінній anything в TypeScript, щоб зберегти її гнучкість?

// Завдання 3
// У TypeScript тип unknown дозволяє нам зберігати будь-які значення, але ми можемо привласнити unknown змінну безпосередньо інший змінної, якщо ми впевнені у її типі. У вас є наступний код:

let some: unknown;
some = "Text";
let str: string;
str = some;
// Що потрібно виправити в цьому коді, щоб він став правильним та безпечним?

// Завдання 4
// У вас є наступний JavaScript масив:

let person = ["Max", 21];
// Як переписати його в TypeScript, використовуючи концепцію кортежів, щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?

// Завдання 5
// Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?

// Завдання 6
// У вас є такі функції JavaScript:

function showMessage(message) {
  console.log(message);
}

function calc(num1, num2) {
  return num1 + num2;
}

function customError() {
  throw new Error("Error");
}
// Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?

// Завдання 7
// Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum) і повертає boolean значення, що вказує, чи це день робочий чи вихідний.

// Завдання 8
// Створіть тип "Gender", використовуючи union type, який може містити значення "male", "female". Створіть змінну myGender цього типу.

// Завдання 9
// У вас є два об'єкти:

const page1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
// Створіть новий тип даних, який підходить для цих двох об'єктів.
// ..........................................................................................................................................................................
// Generic
// Мета цього завдання - допомогти вам зрозуміти та застосувати generics у TypeScript. Ви працюватимете з функціями, що повертають проміси, використовувати вбудований тип Pick, об'єднувати об'єкти за допомогою generics, а також вирішувати проблеми типів у класах.

// Завдання 1
// Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.

function getPromise() {
  return new Promise((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});
// Завдання 2
// У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType. Функція compare повинна повертати AllType.

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(top, bottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
// Завдання 3
// У вас є функція merge, яка поєднує два об'єкти. Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.

function merge(objA, objB) {
  return Object.assign(objA, objB);
}
// Завдання 4
// Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:

class Component {
  constructor(public props: T) {}
}

class Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}
// Завдання 5
// Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.

interface KeyValuePair {
  key;
  value;
}
// Завдання 6
// Ви маєте форму реєстрації користувачів. Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, залишивши ім'я та прізвище без змін.

// Виправте тип у аргументі функції так, щоб не було помилок типу.

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: User) {
  // Оновлення користувача
}

createOrUpdateUser({ email: "user@mail.com", password: "password123" });
// Завдання 7
// У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку. Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Замініть наступний код на версію за допомогою Record
const RoleDescription = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
// Завдання 8
// У вас є тип Form, який містить інформацію про форму, включаючи поле errors. Ви хочете створити новий тип Params, який включає всі поля з Form, крім errors.

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реалізуйте Params так, щоб унеможливити поле 'errors' з типу Form
type Params = Form;
``;
