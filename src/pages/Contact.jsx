import {useHistory} from"react-router-dom";
export const Contact = () =>{
    const history = useHistory();
    const xx=()=> {
        history.push("/Users")
    }
    return(
        <div className="card p-3 m-2" style={{ height: "95vh" }}>
        <h1>about us</h1>
  
        <input  label="Title" />
        <input  label="Body" />
  
        <button  onClick={xx} className="btn btn-warning">
         submit
        </button>
      </div>

    )
}