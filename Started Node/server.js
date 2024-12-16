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

    const search = request.query.search

    const videos = database.list(search)

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


server.delete('/videos/:id', (request, response) => {
    const id_video = request.params.id

    database.delete(id_video)

    return response.status(204).send()
})

server.listen({
    port: 3333,
})