// Class declaration
class Task {
  // constructor
  constructor(title) {
    if (!title) throw new Error('El titulo es requerido')
    this.title = title
    this.completed = false
  }
}

const tarea = new Task('Aprendiendo JS')
console.log(tarea, tarea instanceof Task)

// Class expresion
const TaskList = class {
  constructor() {
    this.tasks = [
      {title: 'tarea 1', completed: false},
      {title: 'tarea 2', completed: true},
      {title: 'tarea 3', completed: true}
    ]
  }

  // getters
  get uncomplited() {
    return [...this.tasks].filter(task => !task.completed)
  }

  get complited() {
    return [...this.tasks].filter(task => task.completed)
  }

  // setters
  set addTask(task) {
    this.tasks.push(task)
  }

  // Methods
  search(search) {
    return this.tasks.find(task => task.title.includes(search))
  }

  /**
   * *Stattic methods
   * Los metodos estaticos no se heredan, solo pueden invocarse desde la clase
   *  y no es necesario instanciar la clase para utlizar el metodo
   */
  static normalizeTask(title) {
    title = title.trim()
    return title.charAt(0).toUpperCase() + title.substring(1)
  }
}

const tareas = new TaskList()
console.log(tareas.complited)

const tarea2 = new Task('Mi nueva tarea')
tareas.addTask = {...tarea2}

console.log(tareas.uncomplited)
console.log(tareas.search('nueva'))

// accediendo a metodos estaticos
console.log(TaskList.normalizeTask('   esto es una tarea  '))
console.log(tareas.constructor.normalizeTask(' puedo acceder desde constructor de la instancia'))
// console.log(tareas.normalizeTask('  pero no se puede acceder desde una instancia '))

// Subclassing o herencia
class Reminder extends Task {
  constructor(title, date) {
    // Super para los parametros al contructor de la clase heredada: Task
    super(title)
    this.date = date
  }

  get duration() {
    return `${this.title} finaliza el ${this.date}`
  }
}

const reminder = new Reminder('Tarea con fecha', '10 de enero')
console.log(reminder.duration)