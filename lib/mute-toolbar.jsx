import {
  React,
  FocusedContactsStore,
} from 'nylas-exports';

export default class MuteToolbar extends React.Component {
  static displayName = 'MuteToolbar';

  // This sidebar component listens to the FocusedContactStore,
  // which gives us access to the Contact object of the currently
  // selected person in the conversation. If you wanted to take
  // the contact and fetch your own data, you'd want to create
  // your own store, so the flow of data would be:

  // FocusedContactStore => Your Store => Your Component
  constructor(props) {
    super(props);
    this.state = this._getStateFromStores();
  }

  componentDidMount() {
    this.unsubscribe = FocusedContactsStore.listen(this._onChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  _onChange = () => {
    this.setState(this._getStateFromStores());
  }

  _getStateFromStores = () => {
    return {
      contact: FocusedContactsStore.focusedContact(),
    };
  }

  _onClick = () => {
      console.log('I got clicked');
  }

  _renderContent() {
    // Want to include images or other static assets in your components?
    // Reference them using the nylas:// URL scheme:
    //
    // <RetinaImg
    //    url="nylas://<<package.name>>/assets/checkmark_templatethis.2x.png"
    //    mode={RetinaImg.Mode.ContentIsMask}/>
    //
    return (
      <div className="header">
        <h1>{this.state.contact.displayName()} is the focused contact.</h1>
      </div>
    );
  }

  _renderPlaceholder() {
    return (
      <div> No Data Available </div>
    );
  }

  render() {
    const content = (this.state.contact) ? this._renderContent() : this._renderPlaceholder();
    return (
        <button>
            Hello World
        </button>
    );
  }
}


// Providing container styles tells the app how to constrain
// the column your component is being rendered in. The min and
// max size of the column are chosen automatically based on
// these values.
MuteToolbar.containerStyles = {
  order: 1,
  flexShrink: 0,
};
