import React from 'react'
import {shallow,mount} from 'enzyme'
import AddPerson from './AddPerson'
import Goop from './Goop'

describe('<AddPerson />',()=>{

    // Given I am on the Add Person page, when I fill in the fields and click "Add", I am taken back to the list page.
    it('contains an Add button',()=>{
        const component = shallow(<AddPerson/>)

        expect(component.find("#addBtn")).toHaveLength(1) // Works selecting by component ID

        // --- OTHER WAYS TO find() NODES ---
        // expect(component.find(".addButton")).toHaveLength(1) // Works selecting by Class name
        // expect(component.find({displayName: 'XYZ'})).toHaveLength(1) // Works selecting by component prop value
        // expect(component.find('Goop')).toHaveLength(1) // Works selecting by react displayName
        // expect(component.find(Goop)).toHaveLength(1) // Works selecting by component ID
    })

    it('takes you to list page when Add button is clicked',()=>{
        const component = shallow(<AddPerson />)
        console.log('000000  BEFORE 000000')
        console.log('------- window.location properties ---------')
        console.log(`window.location.hash: ${window.location.hash}`)
        console.log(`window.location.host: ${window.location.host}`)
        console.log(`window.location.hostname: ${window.location.hostname}`)
        console.log(`window.location.href: ${window.location.href}`)
        console.log(`window.location.origin: ${window.location.origin}`)
        console.log(`window.location.pathname: ${window.location.pathname}`)
        console.log(`window.location.port: ${window.location.port}`)
        console.log(`window.location.protocol: ${window.location.protocol}`)
        console.log(`window.location.search: ${window.location.search}`)
        component.find('#addBtn').simulate('click')
        console.log('------- window.location properties ---------')
        console.log(`window.location.hash: ${window.location.hash}`)
        console.log(`window.location.host: ${window.location.host}`)
        console.log(`window.location.hostname: ${window.location.hostname}`)
        console.log(`window.location.href: ${window.location.href}`)
        console.log(`window.location.origin: ${window.location.origin}`)
        console.log(`window.location.pathname: ${window.location.pathname}`)
        console.log(`window.location.port: ${window.location.port}`)
        console.log(`window.location.protocol: ${window.location.protocol}`)
        console.log(`window.location.search: ${window.location.search}`)

    })

    // test that addHandler was called
    // test that history.push() was called
    // test that URL
})