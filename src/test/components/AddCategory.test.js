import { shallow } from 'enzyme'
import AddCategory from '../../components/AddCategory'

describe('test con <AddCategory/> component', () => {
    const setCategories = jest.fn()
    let wrapper = shallow(<AddCategory setCategories={setCategories} />)

    beforeEach(() => {
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    })

    test('should it render properly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('should change the input', () => {
        const value = 'hey'
        const input = wrapper.find('input')
        input.simulate('change', { target: { value } })
        expect(wrapper.find('p').text().trim()).toBe(value)
    })

    test('should not call the event with submit', () => {
        const form = wrapper.find('form')
        form.simulate('submit', { preventDefault() {} })
        expect(setCategories).not.toHaveBeenCalled()
    })

    test('should call setCategories and clean the input', () => {
        const value = 'hey'
        wrapper.find('input').simulate('change', { target: { value } })
        wrapper.find('form').simulate('submit', { preventDefault() {} })
        expect(setCategories).toHaveBeenCalled()
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function))
        expect(wrapper.find('input').prop('value')).toBe('')
    })
})
