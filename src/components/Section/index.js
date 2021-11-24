import './style.css'

export default function Section({title, description, image, alterna}){
  
    function zoom(event) {
      event.target.style.cursor = 'pointer'
      event.target.style.transform = 'scale(1.5)'
    }

    function outZoom(event) {
      event.target.style.transform = 'scale(1)'
    }
  
    return (
      <section className={`motivos ${alterna && 'alterna'} `}>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div>
          <img src={image} alt="Motivo 1" onMouseMove={zoom} onMouseOut={outZoom} />
        </div>
      </section>
    );
}