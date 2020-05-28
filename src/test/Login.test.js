import React from 'react';
import { mount } from 'enzyme';
import Login from '../components/Login'

describe('Componente Login', () => {
    const form = mount( <Login/> );
    const testInput = {
        target: {
            value: 'varasgonzalo97@gmail.com'
        }
    }

    const testInputPassword = {
        target: {
            value: '123456'
        }
    }

    test('Llamar OnChange al ingresar email', () => {
        form.find('#mail').simulate('change', testInput)
        expect(form.find('#mail').prop('value')).toEqual('varasgonzalo97@gmail.com')
    })

    test('Llamar OnChange al ingresar password', () => {
        form.find('#pass').simulate('change', testInputPassword)
        expect(form.find('#pass').prop('value')).toEqual('123456')
    })

    test('El email debe ser un string', () => {
        form.find('#mail').simulate('change', testInput)
        expect(typeof(form.find('#mail').prop('value'))).toBe('string')
    })
})