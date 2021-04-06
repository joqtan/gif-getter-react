import { shallow } from 'enzyme'
import GifGrid from '../../components/GifGrid'
import useFetchGif from '../../hooks/useFetchGif'

jest.mock('../../hooks/useFetchGif')

describe('test on <GifGrid/> component', () => {
    const category = ''

    test('component should render properly', () => {
        useFetchGif.mockReturnValue({ data: [], loading: true })
        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot()
    })

    test('should show items when images were loaded in useFetchGif', () => {
        const gifs = [
            {
                id: '72534333',
                url: 'https://www.giflink.com/img/id?72534333',
                title: 'GIF title',
            },
        ]
        useFetchGif.mockReturnValue({ data: gifs, loading: false })
        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    })
})
