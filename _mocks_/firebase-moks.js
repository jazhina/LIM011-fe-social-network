const firestore = () => {
    return {
        collection: (publicaciones) => {
            return {
                add: (objData) => {
                    return new Promise((resolve, reject) => {
                        resolve('El comentario fue agregado')
                        reject('Ocurrio un error')
                    })
                    
                }
            }
        }
    }
}


const firebase = {
    firestore: firestore
}