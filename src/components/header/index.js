import React from 'react'
import '../header/header-style.css'

const Header = () => {

    const showSocial = () => {
        console.log('op')
    }

    return (
        <div className="header">
            <div className='photo' onMouseOver={showSocial}></div>
            <div className='profileDescription'>
                <h1>Имя: <span style={{color: 'rgb(255, 105, 79)'}}>Антонов Иван Владимирович</span> <br></br>
                Образование: <span style={{color: 'rgb(0, 110, 255)'}}>неоконченное высшее</span> <br></br>
                Дата рождения: <span style={{color: 'rgb(0, 110, 255)'}}>07.11.1993 (27 полных лет)</span><br></br>
                Семейное положение: <span style={{color: 'rgb(0, 110, 255)'}}>женат</span> <br></br>
                Основные навыки: <span style={{color: 'rgb(0, 110, 255)'}}>HTML, CSS, JavaScript, ReactJS</span><br></br>
               Желаемая работа:  <span style={{color: 'rgb(0, 110, 255)'}}>Junior Frontend-разработчик</span></h1>
            </div>
        </div>
    )
}

export default Header