import Footer from './footer.js'

function Greetings(props){
    return (
        <div className="address">
            <p>Hello, {props.name}</p>
            <p><strong>Your address:</strong> city: {props.city}, IL {props.zipcode}, USA</p>
            <div><Footer name={props.name} year={2026}/></div>

        </div>
    )
}
export default Greetings;