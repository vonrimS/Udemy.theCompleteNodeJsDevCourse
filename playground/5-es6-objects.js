// object property shorthand

const name = "Mikhail"
const ageUser = 35

const user = {
  name,
  age: ageUser,
  location: 'Philadelphia'
}

console.log(user)

// object destructuring

const product = {
  label: 'Ren notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2
}

// const labe = product.label
// const stock = product.stock

// const { label: productLabel, stock, rating = 5 } = product

// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label = 'Blue bull', stock = 300 } = {}) => {
  console.log(type, label, stock)
}

transaction('order')
//transaction('order', product)