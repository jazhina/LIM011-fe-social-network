import { createComment } from "../SPA/functions/functions-dom"

describe('CreateComemt', () => {
    it('Deberia poder agregar una nota', () => {
        return createComment('Bienvenido').then((data) => {
            expect(data).toBe('Bienvenido');
        })
    })
})

