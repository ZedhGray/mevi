import './PackCard.css'

const PackCard = ({ title, subtitle, precio }) => {
  return (
    <div className="card">
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
    </div>
  )
}

export default PackCard
