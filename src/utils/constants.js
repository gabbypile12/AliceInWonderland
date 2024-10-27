const gameQuestions = {
  Java: [
    {
      question: "What is NOT a Primitive Type?",
      options: ["int", "String", "double", "float"],
      indexOfCorrectAns: 1,
    },
    {
      question: `The NEW operator allows for:`,
      options: [
        "The creation of a primitive type",
        "The creation of an object",
        "The creation of a String",
        "The creation of a new method",
      ],
      indexOfCorrectAns: 1,
    },
    {
      question: `What would you not use "this" for?`,
      options: [
        "The current object in a class",
        "Calling another constructor from the default constructor",
        "The current object in the main method",
        "Calling the instance variables of the current object",
      ],
      indexOfCorrectAns: 2,
    },
    {
      question:
        "Which of the following is an INCORRECT implementation of an array?",
      options: [
        "StringBuffer array[] = new StringBuffer[5];",
        "int array[] = {1,2,3,4,5};",
        "Car array[] = {new Car c1(“Toyota”, “2018”, “used”), new Car c2(“Mazda”, “2024”, “new”)};",
        "Student[] array = new Student[3];",
      ],
      indexOfCorrectAns: 3,
    },
    {
      question: "What method is an incorrect way to iterate through an array?",
      options: [
        "for(int i = 0; i < array.length; i++){array[i] = value;}",
        "for(int i : array){i = value;}",
        "while(i < array.length){array[i++] = value;}",
        "They are all correct",
      ],
      indexOfCorrectAns: 3,
    },
  ],
  Python: [
    {
      question: "Is Python a compiled language or an interpreted language?",
      options: [
        "Complied language",
        "Interpreted language",
        "Partially compiled and partially interpreted",
        "Neither",
      ],
      indexOfCorrectAns: 3,
    },
    {
      question: "How do you comment in Python?",
      options: ["//", "%", "#", "– –"],
      indexOfCorrectAns: 2,
    },
    {
      question: `What is this: "A new instance type is created and keeps values that are copied?"`,
      options: [
        "A shallow copy",
        "A reference copy",
        "A deep copy",
        "A keep copy",
      ],
      indexOfCorrectAns: 0,
    },
    {
      question: "What is true about Multiple Inheritance?",
      options: [
        "A parent class can be inherited by multiple other classes and is supported by Python",
        "A parent class can be inherited by multiple other classes and is NOT supported by Python",
        "A class can be inherited from multiple parent classes and is supported by Python",
        "A class can be inherited from multiple parent classes and is NOT supported by Python",
      ],
      indexOfCorrectAns: 2,
    },
    {
      question: "What is slicing in Python?",
      options: [
        "An object operation to extract data from an object",
        "A string operation to remove part of a string or list",
        "An object operation to remove data from an object",
        "A string operation to extract part of a string or list",
      ],
      indexOfCorrectAns: 3,
    },
  ],
  OOP: [
    {
      question: "What is NOT an object-oriented programming language?",
      options: ["Java", "C", "Python", "C++"],
      indexOfCorrectAns: 1,
    },
    {
      question:
        "What is one of the main four functions of object-oriented programming?",
      options: ["Polymorphism", "Data Algorithms", "Entrapment", "Willing"],
      indexOfCorrectAns: 0,
    },
    {
      question: `What is a type of inheritance?`,
      options: [
        "Single inheritance",
        "Multiple inheritance",
        "Hierarchal inheritance",
        "All of the answers are correct",
      ],
      indexOfCorrectAns: 3,
    },
    {
      question: "What is encapsulation?",
      options: [
        "It is putting all of the data in one file",
        "Binding all necessary methods and data together while hiding unnecessary details",
        "All methods are under one class",
        "Blurb that expresses the main function of a method",
      ],
      indexOfCorrectAns: 1,
    },
    {
      question: "How much memory does a class occupy?",
      options: ["256 MB", "128 MB", "0 MB", "32 MB"],
      indexOfCorrectAns: 2,
    },
  ],
  tips: [
    {
      question:
        "What is the best way to get help with your computer science questions?",
      options: [
        "Go to Office Hours",
        `Don’t Ask Questions`,
        "Remain Confused",
        "Complain That You Don’t Understand",
      ],
      indexOfCorrectAns: 0,
    },
    {
      question: "How can you manage stress effectively?",
      options: [
        "Start Assignments and Studying for Exams Early",
        "Leave Things for the Last Minute",
        "Don’t Take Notes",
        "Cram Assignments and Studying Without Breaks",
      ],
      indexOfCorrectAns: 0,
    },
    {
      question: `What is the best way to get better at computer science?`,
      options: [
        "Look at theoretical concepts",
        "Practice making different types of programs",
        "Don’t Practice Your Coding Skills",
        "Use ChatGPT for all assignments",
      ],
      indexOfCorrectAns: 1,
    },
    {
      question: "What skills are important to have to learn computer science?",
      options: [
        "Practicing your soccer skills",
        "Learn how to cook",
        "Have a good foundation in math",
        "Be a girl boss",
      ],
      indexOfCorrectAns: 2,
    },
    {
      question: "Why is a study schedule important?",
      options: [
        "So that you can nap all-day",
        "So that you can ignore your work",
        "So that you can manage your time to balance studying and a social life",
        "So that you can be bored",
      ],
      indexOfCorrectAns: 2,
    },
  ],
};

export { gameQuestions };
