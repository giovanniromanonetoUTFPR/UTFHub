import { useState } from "react";
import { FaSistrix } from "react-icons/fa";
import "./styles.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";


const Search = () => {
  const [nome, setNome] = useState('');
  const [erro, setErro] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  function fazerBusca() {
    setErro('');
    axios.get(`http://localhost:8080/materia/search/${nome}`)
    .then((res) => {
      if(res.data.content.length === 1){
        dispatch({
          type: "MATERIA",
          nomeMateria: res.data.content[0].nome,
        });
        history.push(`/materias/${res.data.content[0].id}`);
      }else{
        setErro('Erro! Digite corretamente o nome da matéria');
      }
    })
   }

  return (
    <div id="search-content">
      <form onSubmit={(e) => {e.preventDefault(); fazerBusca();}}>
        <input
          className="form-search"
          type="text"
          placeholder="Pesquise aqui"
          onChange={(e) => setNome(e.target.value)}
        />
        <span className="icone-search">
          <FaSistrix size={33} color="black" />
        </span>
      </form>
      <div className="btn-buscar">
      <button onClick={fazerBusca}>Buscar</button>
      <p className="erro">{erro}</p>
      </div>
    </div>
  );
};

export default Search;
