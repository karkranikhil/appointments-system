import React from 'react';
import ReactDOM from 'react-dom'
import { Appointment } from '../src/Appointment';
describe('Appointment', () => {
  let container
  let render
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        render = component => ReactDOM.render(component, container);
      });
    it('renders the first customer first name', () => {
        const customer = { firstName: 'Ashley' };
        
        render(<Appointment customer={customer} />)
        expect(container.textContent).toMatch('Ashley');
    });
    it('renders the second  customer last name', () => {
        const customer = { firstName: 'Nikhil' };
        render(<Appointment customer={customer} />)
        expect(container.textContent).toMatch('Nikhil');
    });
  });