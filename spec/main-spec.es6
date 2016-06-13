import {ComponentRegistry} from 'nylas-exports';
import {activate, deactivate} from '../lib/main';

import MuteToolbar from '../lib/mute-toolbar';

describe("activate", () => {
  it("should register the component as an action button", () => {
    spyOn(ComponentRegistry, 'register');
    activate();
    expect(ComponentRegistry.register).toHaveBeenCalledWith(MuteToolbar, {role: 'Composer:ActionButton'});
  });
});

describe("deactivate", () => {
  it("should unregister the component as an action button", () => {
    spyOn(ComponentRegistry, 'unregister');
    deactivate();
    expect(ComponentRegistry.unregister).toHaveBeenCalledWith(MuteToolbar);
  });
});
