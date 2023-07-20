  export default function ParentComponent1() {
    return (
      <SplitPane left={<Contacts />} right={<Chat /> } message="this message"/>
    );
}

function SplitPane(props) {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
          {props.left}
        </div>
        <div className="SplitPane-right">
          {props.right}
        </div>
        {props.message}
      </div>
    );
}

function Contacts() {
    return <div style={{"backgroundColor":"green"}}>Contact</div>;
  }
  
function Chat() {
    return <div style={{"backgroundColor":"red"}}>Chat</div>;
}
  