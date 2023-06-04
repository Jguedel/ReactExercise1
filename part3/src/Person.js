//if under 18 say you must be 18 to vote else please go vote!

//display max 6 char of name

//display hobbie list

function Person(props) {
    let canVote = "you must be 18 to vote";
    if(props.age >= 18){
        canVote = "please go vote!"
    }
    if(props.name.length > 6){
        props.name =  props.name.slice(6)
    }
    return (
    <div className="tweet">
        <p className="intro">Learn some information about this person</p>
        <p className="name">name</p>
        <p className="age">age</p>
        <p className="voting">{canVote}</p>
        <h2>Hobbies</h2>
        <ul className="hobbies">
            {props.hobbies.map(hob => <li>{hob}</li>)}
        </ul>
    </div>
    );
  }
  
export default Person;