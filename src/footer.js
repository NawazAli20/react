export default function Footer(props){
    return (
        <div className="footer">
            All rights reserved &copy;{props.name}, {props.year}
        </div>
    );
}