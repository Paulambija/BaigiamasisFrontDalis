import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function NewProduct(props) {

    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [description, setDescription] = useState();

    const navigate = useNavigate();

    const handleSubmit = async () => {
        let obj = {
            name: name,
            description: description
        };

        let data = await axios.post("http://localhost:8080/products", obj, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
        // axios.post("http://localhost:8080/products", obj)
        //     .then(() => console.log("1ivykdoma, kai uzklausa baigiasi"))
        navigate(-1);
    }

    return (
        <div className={"container d-flex flex-column gap-3 mt-2"}>

            <h1>Naujos planetos pridėjimas</h1>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Planetos pavadinimas</label>
                <input value={name}
                       onChange={(e) => setName(e.target.value)}
                       type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       placeholder="Įveskite planetos pavadinimą"/>
                {/*<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>*/}
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Planetos aprašymas</label>
                <input value={description}
                       onChange={(e) => setDescription(e.target.value)}
                       type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       placeholder="Įveskite planetos aprašymą"/>
                {/*<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>*/}
            </div>

            <button

                onClick={handleSubmit}
                type="button"
                className="btn btn-success align-self-center">
                Pridėti naują planetą
            </button>
        </div>
    )
}
