console.log("Створити масив з 10 студентів.");
const studentsArray = [
  "Sergey",
  "Ivan",
  "Roman",
  "Denis",
  "Vlad",
  "Anna",
  "Artyr",
  "Maksim",
  "Pavel",
  "Stas",
];
// 1. Додати 2 студенти в кінець масиву
console.group("1. Додати 2 студенти в кінець масиву");
studentsArray.push("Maria");
studentsArray.push("Oliver");
console.log(studentsArray);
console.groupEnd();
// 2. Додати 2 студенти на початок масиву
console.group("2. Додати 2 студенти на початок масиву");
studentsArray.unshift("Mark");
studentsArray.unshift("Nazar");
console.log(studentsArray);
console.groupEnd();
// 3. Видалити останнього студента
console.group("3. Видалити останнього студента");
studentsArray.pop();
console.log(studentsArray);
console.groupEnd();
// 4. Видалити першого студента
console.group("4. Видалити першого студента");
studentsArray.shift();
console.log(studentsArray);
console.groupEnd();
// 5. Користувач вводить імя студента, перевірити чи такий студент є масиві і вивести результат в консоль
console.group(
  "5. Користувач вводить імя студента, перевірити чи такий студент є масиві і вивести результат в консоль"
);
const studentForCheck = prompt("Студент:");
console.log(studentsArray.includes(studentForCheck));
console.groupEnd();
// 6. Створити ще один масив з існуючого, включивши в нього студентів починаючи з індекса 3 і закінчуючи індесом 6 включно ( 3,4,5,6)
console.group(
  "6. Створити ще один масив з існуючого, включивши в нього студентів починаючи з індекса 3 і закінчуючи індесом 6 включно ( 3,4,5,6)"
);
const tempArr = studentsArray.slice(3, 7);
console.log(tempArr);
console.groupEnd();
// 7. Створити ще один масив нових студентів(довжина 5), і обєднати існуючих студентів з новими у новий масив усі студенти.
console.group(
  "7. Створити ще один масив нових студентів(довжина 5), і обєднати існуючих студентів з новими у новий масив усі студенти."
);
const newStudentArr = ["Alex", "John", "Fred", "Lisa", "Kate"];
const allStudentsArr = studentsArray.concat(newStudentArr);
console.log(allStudentsArr);
console.groupEnd();
// 8. Видалити студента номер 4
console.group("8. Видалити студента номер 4");
allStudentsArr.splice(3, 1);
console.log(allStudentsArr);
console.groupEnd();
// 9. Замінити студента номер 6 на студента з ім'ям Іван
console.group("9. Замінити студента номер 6 на студента з ім'ям Іван");
allStudentsArr[5] = "Ivan";
console.log(allStudentsArr);
console.groupEnd();
// 10. Вививести усіх студентів у консоль у вигляді стрічки, студенти повинні бути розділені символом тире -
console.group(
  "10. Вививести усіх студентів у консоль у вигляді стрічки, студенти повинні бути розділені символом тире -"
);
console.log(allStudentsArr.join("-"));
console.groupEnd();
