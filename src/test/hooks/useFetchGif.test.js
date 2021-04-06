import useFetchGif from '../../hooks/useFetchGif'
import { renderHook } from '@testing-library/react-hooks'

describe('test on hook useFetchGif', () => {
    test('should return initialState', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
            useFetchGif('starwars')
        )
        const { data, loading } = result.current
        await waitForNextUpdate()

        expect(data).toEqual([])
        expect(loading).toBe(true)
    })

    test('should return an array of images an loading as false', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
            useFetchGif('starwars')
        )
        await waitForNextUpdate()
        const { data, loading } = result.current
        expect(data.length).toEqual(5)
        expect(loading).toBe(false)
    })
})
