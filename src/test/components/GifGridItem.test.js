import { shallow } from 'enzyme'
import GifGridItem from '../../components/GifGridItem'

describe('tests on <GifGridItem/> component', () => {
    const title = 'title'
    const url = 'http:localhost/image.jpg'
    const wrapper = shallow(<GifGridItem title={title} url={url} />)
    test('should show the component properly', () => {
        expect(wrapper).toMatchSnapshot()
    })
    test('p should have a paragraph with the title', () => {
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title)
    })
    test('img should have a image with source and alt from props', () => {
        const img = wrapper.find('img')
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })
    test('div should contain a propertie called animate__fadeInUpBig', () => {
        const div = wrapper.find('div')
        expect(div.hasClass('animate__fadeInUpBig')).toBe(true)
    })
})
