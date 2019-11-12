import * as React from 'react'
import * as renderer from 'react-test-renderer'
import ListItem from '..'

test('ListItem component renders', () => {
  const component = renderer.create((
    <ListItem
      transactionId='test'
      merchantId='test'
      customerEmail='test'
      customerName='test'
      currency='test'
      amount={0}
      history={[
        {
          state: 'test',
          trigger: 'test',
          updatedDate: '2019-11-10T01:52:30.259Z',
        },
     ]}
    />
  ))
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
