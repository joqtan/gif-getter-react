import { shallow } from 'enzyme'
import GifGetterApp from '../GifGetterApp'

describe('tests on <GifGetterApp/> component', () => {
    const wrapper = shallow(<GifGetterApp />)
    test('component should render properly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('should show a list of categories', () => {
        const categories = ['star wars', 'lord of the ring']
        const wrapper = shallow(<GifGetterApp defaultCategories={categories} />)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    })
})
