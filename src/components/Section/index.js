import './style.css'

export default function Section({title, description, image, alterna}){    
    return (
      <section className={`motivos ${alterna && 'alterna'} `}>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div>
          <img src={image} alt="Motivo 1" />
        </div>
      </section>
    )
}



