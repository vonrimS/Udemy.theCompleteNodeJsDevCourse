const greeter = (name = 'Ivan', age = 37) => {
  console.log('Hello ' + name + '. We know that your are ' + age + ' years old.')
}

greeter('Mikhail', 25)
greeter()