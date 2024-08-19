const mongoose = require('mongoose')
const db_url = process.env.MONGODB_URI

mongoose.set('strictQuery', false)

mongoose.connect(db_url)
  .then(_result => {
    // eslint-disable-next-line no-console
    console.log('Connected to MongoDB')
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.log('error connecting to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
  },
  number: {
    type: String,
    minLength: 8,
    required: true,
    validate: {
      validator: function(v) {
        return /^\d{2,3}-\d+$/.test(v)
      },
      message: props => `${props.value} is not a valid phone number`
    },
  },
})

personSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)