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
let age = 50;
let name = "Max";
let toggle = true;
let empty = null;
let notInitialize;
let callback = (a) => {
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
// У TypeScript тип unknown дозволяє нам зберігати будь-які значення, але ми можемо привласнити unknown змінну безпосередньо інший змінної, якщо ми впевнені у її типі.
// У вас є наступний код:
let some;
some = "Text";
let str;
if (typeof some === "string") {
    str = some;
}
// Що потрібно виправити в цьому коді, щоб він став правильним та безпечним?
// Завдання 4
// У вас є наступний JavaScript масив:
// let person = ["Max", 21];
// Як переписати його в TypeScript, використовуючи концепцію кортежів, щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?
let person = ["Max", 21];
// Завдання 5
// Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)?
let variable;
// І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable'(literal type) ?
let varible;
// Завдання 6
// У вас є такі функції JavaScript:
// function showMessage(message) {
//   console.log(message);
// }
function showMessage(message) {
    console.log(message);
}
// function calc(num1, num2) {
//   return num1 + num2;
// }
function calc(num1, num2) {
    return num1 + num2;
}
// function customError() {
//   throw new Error("Error");
// }
function customError() {
    throw new Error("Error");
}
// Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
// Завдання 7
// Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum) і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
var Days;
(function (Days) {
    Days["monday"] = "monday";
    Days["tuesday"] = "tuesday";
    Days["wednesday"] = "wednesday";
    Days["thursday"] = "thursday";
    Days["friday"] = "friday";
    Days["saturday"] = "saturday";
    Days["sunday"] = "sunday";
})(Days || (Days = {}));
const isWeekend = (day) => {
    return day === Days.saturday || day === Days.sunday;
};
const myGender = "male";
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
// Мета цього завдання - допомогти вам зрозуміти та застосувати generics у TypeScript. Ви працюватимете з функціями, що повертають проміси, використовувати вбудований тип Pick,
// об'єднувати об'єкти за допомогою generics, а також вирішувати проблеми типів у класах.
// Завдання 1
// Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа.
// Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
// function getPromise<T>(): Promise<T[]> {
//   return new Promise<T[]>((resolve) => {
//     resolve(["Text", 50] as any as T[]);
//   });
// }
function getPromise() {
    return new Promise((resolve) => {
        resolve(["Text", 50]);
    });
}
getPromise().then((data) => {
    console.log(data);
});
function compare(top, bottom) {
    return {
        ...top,
        ...bottom,
    };
}
// Завдання 3
// У вас є функція merge, яка поєднує два об'єкти. Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
function merge(objA, objB) {
    return Object.assign({}, objA, objB);
}
// Завдання 4
// Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
class Component {
    constructor(props) {
        this.props = props;
    }
}
class Page extends Component {
    pageInfo() {
        console.log(this.props.title);
    }
}
const pair1 = { key: '1', value: 2 };
const pair2 = { key: 1, value: 2 };
function createOrUpdateUser(initialValues) {
    // Оновлення користувача
}
createOrUpdateUser({ email: "user@mail.com", password: "password123" });
// Завдання 7
// У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку. 
// Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
export var UserRole;
(function (UserRole) {
    UserRole["admin"] = "admin";
    UserRole["editor"] = "editor";
    UserRole["guest"] = "guest";
})(UserRole || (UserRole = {}));
// type UserRolesStatus = Record<UserRole, string>
// Замініть наступний код на версію за допомогою Record
const RoleDescription = {
    [UserRole.admin]: "Admin User",
    [UserRole.editor]: "Editor User",
    [UserRole.guest]: "Guest User",
};
//# sourceMappingURL=index.js.map