 import "./Message-style.css";

function Message({ title, text, sender, recipient }) {
  const MessagePropsTitle = String(title)
  const MessagePropsText= String(text)
  const MessagePropsSender= String(sender)
  const MessagePropsRecipient= String(recipient)


  return (
    <div className="message">
      <p className="message__sender">от кого: {MessagePropsSender}</p>
      <p className="message__recipient">кому: {MessagePropsRecipient}</p>
      <h2 className="message__title">{MessagePropsTitle}</h2>
      <p className="message__text">{MessagePropsText}</p>
    </div>
  );
}

export default Message;
