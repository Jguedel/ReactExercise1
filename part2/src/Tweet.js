import './tweet.css';
function Tweet(props) {
    return (
    <div className="tweet">
        <p className="user">Username: {props.username}</p>
        <p className="name">Name: {props.name}</p>
        <p className="date">Date: {props.date}</p>
        <p className="message">Message: {props.message}</p>
    </div>
    );
  }
  
export default Tweet;