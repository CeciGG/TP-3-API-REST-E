class ModelMem {
    #libros

    constructor() {
        this.#libros = [
            { id: '1', titulo: "Orgullo y prejuicio",   autor: "Jane Austen",       anio: 1813 },
            { id: '2', titulo: "Cumbres Borrascosas",   autor: "Emily Brontë",      anio: 1847 },
            { id: '3', titulo: "Jane Eyre",             autor: "Charlotte Brontë",  anio: 1847 },
            { id: '4', titulo: "Persuasión",            autor: "Jane Austen",       anio: 1817 },
            { id: '5', titulo: "Anna Karenina",         autor: "León Tolstói",      anio: 1877 }
            ]
    }

    obtenerLibros = () => this.#libros

    obtenerLibro = id => {
        const libro = this.#libros.find(p => p.id === id)
        return libro || {}
    }

    guardarLibro = libro => {
        libro.id = String(parseInt(this.#libros[this.#libros.length-1]?.id || 0) + 1) 
        this.#libros.push(libro)
        return libro
    }

    actualizarLibro = (id,libro) => {
        const index = this.#libros.findIndex(p => p.id === id)
        if(index != -1) {
            const libroAnt = this.#libros[index]
            const libroAct = { ...libroAnt, ...libro }
            this.#libros.splice(index, 1, libroAct)
            return libroAct
        }
        else {
            return null
        }
    }

    borrarLibro = id => {
        const index = this.#libros.findIndex(p => p.id === id)
        if(index != -1) {
            const libro = this.#libros.splice(index, 1)[0]
            return libro
        }
        else {
            return null
        }
    }
}

export default ModelMem