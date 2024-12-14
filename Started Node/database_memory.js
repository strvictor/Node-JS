import { randomUUID } from "crypto"

export class DatabaseMemory {
    #videos = new Map()

    list() {
        return Array.from(this.#videos.entries()).map((videoarray) => {
            const id = videoarray[0]
            const data = videoarray[1]

            return {
                id,
                ...data
            }
        })
    }

    create(video) {
        const id_video = randomUUID()

        this.#videos.set(id_video, video)
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
    }
}