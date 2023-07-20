export default function WelcomeDialog() {
    return (
      <FancyBorder color="yellow">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
    );
  }

function FancyBorder(props) { // its like abstract component like abstract property.
    return (
      <div style={{"backgroundColor":props.color}}>
        {props.children}
      </div>
    );
}