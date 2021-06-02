import Theme from "theme.js";
const ThemedButton = (props) => (
  <Theme.Comsumer>
    {(theme) => <button {...props}>button with them: {theme} </button>}
  </Theme.Comsumer>
);
export default ThemedButton;