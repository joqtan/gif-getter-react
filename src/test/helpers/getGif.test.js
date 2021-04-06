import { getGif } from '../../helpers/getGifs'
describe('tests on getGif helper', () => {
    test('should get 5 elements', async () => {
        const gifs = await getGif('random')
        expect(gifs.length).toBe(5)
    })
    test('should receive a category', async () => {
        const gifs = await getGif('')
        expect(gifs.length).toBe(0)
    })
})
