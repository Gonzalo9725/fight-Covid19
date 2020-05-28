import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Register from '../components/Register'

describe('Componente Register', () => {
    const form = mount( <Register/> );
    const testInput = {
        target: {
            value: 'gonzalovaras@gmail.com'
        }
    }

    const testInputPassword = {
        target: {
            value: '662211'
        }
    }

    test('Llamar OnChange al ingresar email', () => {
        form.find('#mail').simulate('change', testInput)
        expect(form.find('#mail').prop('value')).toEqual('gonzalovaras@gmail.com')
    })

    test('Llamar OnChange al ingresar password', () => {
        form.find('#pass').simulate('change', testInputPassword)
        expect(form.find('#pass').prop('value')).toEqual('662211')
    })

    test('El email debe ser un string', () => {
        form.find('#mail').simulate('change', testInput)
        expect(typeof(form.find('#mail').prop('value'))).toBe('string')
    })

    test('renders correctly', () => {
        const tree = renderer.create(<Register />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})