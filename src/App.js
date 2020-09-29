import React, { useState, useEffect } from "react";
import requests from "./components/request";
import axios from "axios";
import { connect } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';
import { guardar } from './reducers/tagBusqueda';
import { setear } from './reducers/pagina';
import { guardarPost } from './reducers/post'
import "./App.css";
import Header from "./components/header";
import Banner from "./components/banner";
import CardResults from "./components/cardResults";
import Card1 from "./components/card1";
import Loading from "./components/loading";
import Pagination from "./components/Pagination";
import NoResults from "./components/noResults";
import PostCompleto from "./components/post";

function App(props) {
  const { guardar, setear, guardarPost } = props;
  const { tagBusqueda, pagina, post } = props.state;
  const [lista, setLista] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (tagBusqueda?.length > 0) {
      const url = `${requests.Obtener_tag}${tagBusqueda}/post?page=${pagina}&limit=50`;
      async function fetchData() {
        history.push(`/tag/${tagBusqueda}/page/${pagina + 1}`);
        setIsLoading(true);
        const request = await axios.get(url, { headers: { 'app-id': requests.APP_ID } });
        setData(request);
        setIsLoading(false);
      }
      fetchData()
    }

  }, [history, tagBusqueda, pagina])

  //Guardar listado de respuesta a la peticion en lista
  const setData = (request) => {
    setLista(request)
  }
  //Guardar elemento ingresado en input para la busqueda
  const buscar = (event) => {
    event.preventDefault();
    setear(0);
    guardarPost(null);
    guardar(document.getElementById("input").value);
  }
  //Cambiar numero de pagina entre resultados
  const paginacion = (number, e) => {
    e.preventDefault();
    setear(number);
    console.log(props.state);
    history.push(`/tag/${tagBusqueda}/page/${pagina + 1}`);
  }

  return (
    <div className="App">
      <Route path="/">
        <Header toHome={() => { history.push("/"); guardar(''); guardarPost(null) }} tagBusqueda={tagBusqueda} buscar={buscar} />
      </Route>
      <Route exact path="/">
        <Banner />
      </Route>
      {isLoading ? (<Loading />) :
        <Route path={`/tag/${tagBusqueda}/page/${pagina + 1}`}>
          {lista.data?.data.length !== 0 ?
            <>
              <CardResults data={lista.data} />
              <div className="main-container">
                {lista.data?.data.map((card, index) =>
                  <Card1
                    props={props}
                    index={index}
                    key={index}
                    card={card}
                  />
                )}</div>
              <Pagination paginacion={paginacion} totalPosts={lista.data?.total} />
            </> :
            <NoResults path={`/tag/${tagBusqueda}/page/${pagina + 1}`} />
          }
        </Route>
      }
      {post !== null ?
        <Route exact path={`/post/${lista.data?.data[post].id}`}>
          <PostCompleto props={props} data={lista.data?.data[post]} />
        </Route> : false
      }
    </div >
  );
}

const mapStateToProps = (state) => {
  return {
    state,
  }
}
const mapDispatchToProps = (dispatch) => ({
  //reducer numero
  setear: (payload) => dispatch(setear(payload)),
  //reducer tagBusqueda
  guardar: (payload) => dispatch(guardar(payload)),
  //reducer post
  guardarPost: (payload) => dispatch(guardarPost(payload)),
})
export default connect(mapStateToProps, mapDispatchToProps)(App);