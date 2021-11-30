import { useState } from 'react'
import Header from '../../components/Header';
import Filme from '../../components/Filme';
import './style.css'

export default function Movies() {
    const [filmes, setFilmes] = useState([]);

    async function addFilmes(){
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/popular",
            {
              method: "GET",
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjhkOWMzNjAwZTZhMDIyNTliZmU3MDBiYTkwYjIwMyIsInN1YiI6IjVkM2Y4NjRiMzRlMTUyNWRhY2U5Y2I3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FgwADzEYqFKSQ2S-_6CMkBWUTYeBwLeUQ7wO4UIYxQM",
              },
            }
          );
      

        const data = await response.json();

        setFilmes([...data.results, ...filmes]);
    }

    return (
        <main id="movies">
            <Header />
            
            
            <div className="list-movies">
            <button onClick={addFilmes}>Adicionar filme</button>
                {filmes.map((filme, index) => {
                    return (
                        <Filme 
                            key={index}
                            titulo={filme.original_title}
                            duracao={filme.vote_average}
                            data={filme.realese_date}
                            poster={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}

                        />
                    )
                })}
            </div>
        </main>
    );
}