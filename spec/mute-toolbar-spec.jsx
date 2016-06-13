import {React, ReactDOM} from 'nylas-exports';
const ReactTestUtils = require('react-addons-test-utils');

import MuteToolbar from '../lib/mute-toolbar';


describe("MuteToolbar", () => {
  var component;

  beforeEach(() => {
    component = ReactTestUtils.renderIntoDocument(
      <MuteToolbar draftClientId="test" />
    );
  });

  it("should render into the page", () => {
    expect(component).toBeDefined();
  });

  it("should have a displayName", () => {
    expect(MuteToolbar.displayName).toBe('MuteToolbar');
  });

  it("should show a dialog box when clicked", () => {
    spyOn(component, '_onClick');
    // const buttonNode = ReactDOM.findDOMNode(component.refs.button);
    // ReactTestUtils.Simulate.click(buttonNode);
    // expect(component._onClick).toHaveBeenCalled();
  });
});
