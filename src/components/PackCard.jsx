import './PackCard.css'

const PackCard = ({ title, subtitle, precio }) => {
  return (
    <article className="card">
      <div className="card-image">
        <img src="../assets/resources/panelbgr.png" alt="" />
      </div>
      <div className="category"> {title} </div>
      <div className="heading">
        {subtitle}
        <div className="author">
          Precio <span className="name">$</span> {precio}
        </div>
      </div>
    </article>
  )
}

export default PackCard
