import React, { useState } from 'react'
import '../body/body-style.css'

const Body = () => {

    const [content, setContent] = useState()
    const [example, setExample] = useState(<h1>Говно</h1>)

    function menu() {
        return (    
            <div>
                <button onClick={() => setContent(aboutMe())} className='menuButton'>Обо мне</button>
                <button onClick={() => setContent(skills())} className='menuButton'>Мои навыки</button>
                <button onClick={() => setContent(examples())} className='menuButton'>Примеры работ</button>
                <button onClick={() => setContent(job())} className='menuButton'>Опыт работы</button>
            </div>
        )
    }

    const aboutMe = () => {
        return(
            <div><h1>Обо мне</h1></div>
        )
    }

    const skills = () => {
        return(
            <div><h1>Скиллы</h1></div>
        )
    }

    const myExamples = [
        {title: 'Игра "21"', example: 'game21'},
        {title: 'Приложение со списком дел', example: 'todolist'},
        {title: 'Приложение календарь + список дел', example: 'todoCalendar'},
        {title: 'Лендинг на HTML+CSS+JS', example: 'lending'},
    ]

    const examples = () => {
        
        const justCause = myExamples.map(el => {
            return(
                <div 
                key={el.title}
                className='exampleElement'
                >{el.title}</div>
            )
        })

        return(
            <div className='exampleBlock'>
                <div>{justCause}</div>
                <div className='showExampleWindow'>
                    {example}
                </div>
            </div>
        )

    }

    const job = () => {
        return(
            <div><h1>Опыт работы</h1></div>
        )
    }

    return(
        <div className='body'>
            <div className='menu'>
                {menu()}
            </div>
            <div className='infoBlock'>
                {content}
            </div>
        </div>
    )
}

export default Body