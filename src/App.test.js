import React from 'react'
import {shallow} from 'enzyme'
import App from './App'

describe('<App/>',()=>{
    it('renders 1 <App /> component',()=>{
        const component = shallow(<App />)
        expect(component).toHaveLength(1)
    })

    it('has supplied props',()=>{
        const component= shallow(<App name="app" />)
        console.log(component.instance().props)
        expect(component.instance().props.name).toBe("app")

    })

    it('shallow: returns HTML',()=>{
        const component = shallow(<App name="app"/>)
        console.log('shallow component.html():')
        console.log(component.html())
    })

    it('displays an "Add Person" button',()=>{
        const component = shallow(<App name="app"/>)
        expect(component.find("#addPersonButton")).toHaveLength(1)
    })

    it('clicking Add Person button takes you to Add Person page',()=>{
        const component = shallow(<App name="app" />)
        expect(component.find('#addPersonButton')).toHaveLength(1)

    })
})





