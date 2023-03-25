class Person {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }
  introduction() {
    return `Hi, my name is ${this.name}. I'm ${this.age} years old and I work as a ${this.occupation}.`;
  }
}

class Form {
  constructor(form) {
    this.form = form;
  }
  handleSubmit() {
    console.log(
      new Person(
        form.name.value,
        form.age.value,
        form.occupation.value
      ).introduction()
    );
    document.querySelector("h1").innerHTML = new Person(
      form.name.value,
      form.age.value,
      form.occupation.value
    ).introduction();
    document.querySelector(".modalContainer").classList.remove("hidden");
    setTimeout(closeModal, 2000);
    function closeModal() {
      document.querySelector(".modalContainer").classList.add("hidden");
    }
  }
}

const form = document.querySelector("form");

const formClass = new Form(form);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  formClass.handleSubmit();
  form.reset();
});
