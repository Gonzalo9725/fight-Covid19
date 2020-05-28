import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/Home';
import People from './People'

describe('Component Home', () =>{
    const home = shallow(<Home/>);
    
    test('El componente Home existe', () => {
        expect(home.exists()).toBeTruthy();
    })

    test('Api Testing', async function () {
        const response = new People();
        let data = await response.api();
        expect(data.results[1]).toHaveProperty("name");
    })
})