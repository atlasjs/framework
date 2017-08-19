import express from 'express'
import Core from 'atlasjs/core'

export default class Atlas extends Core {

  server: Object

  constructor() {
    super()

    this.server = express()
  }

  use = (middleware: Function) => this.server.use(middleware)

  database(type: String, options: Object) {

  }

  listen(port: Number) {
    return new Promise((resolve, reject) => {
       super.Router.run(this.server)

       this.server.listen(port, (err) => !err ? resolve() : reject(err))
    })
  }

}
