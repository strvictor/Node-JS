// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//     response.write('Hello Word!')

//     return response.end()
// })

// server.listen(3333)

import fastify, {} from 'fastify'
import { DatabaseMemory } from './database_memory.js'

const server = fastify()

const database = new DatabaseMemory


server.get('/videos', (request, response) => {
    const videos = database.list()

    return videos
})


server.post('/videos', (request, response) => {

    const {title, description, duration} = request.body

   database.create({
    title,
    description,
    duration,
   })

   return response.status(201).send()
})


server.put('/videos/:id', (request, response) => {
    const id_video = request.params.id
    const {title, description, duration} = request.body

    database.update(id_video, {
        title,
        description,
        duration,
    })

    return response.status(204).send()
})


server.delete('/videos/:id', () => {
    return "home"
})

server.listen({
    port: 3333,
})