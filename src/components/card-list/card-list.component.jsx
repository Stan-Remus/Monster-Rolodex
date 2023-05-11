
import Card from "../card/card.component";
import './card-list.style.scss'

const CardList = ({monsters}) => (


    
        <div className="card-list">
            {monsters.map(monster => {
                return  <Card monster={monster}/>
              
})}
        </div>
     

)



export default CardList;