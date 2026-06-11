import React from 'react'
import gitHubData from "../../assets/github.json"
import MacWindows from './MacWindows'
import { GiWrappedHeart } from 'react-icons/gi';
import './gitcard.scss'

const GitCard=({project})=>{
    const {name,image,desc,tags, repolink,demolink}=project;

    return(
        <div className="git-card">
            <div className="card-content">
                {image &&( <div className="card-image">
                    <img src={image} alt={name} className='image' />
                </div> )}
                
                <h3 className="card-title">{name}</h3>
                <p className="card-desc">{desc}</p>
                <div className="card-tags">
                    {tags.map((tag,index)=>(
                        <span className="tag-badge" key={index}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="card-actions">
                <a href={repolink} target='_blank' className="btn btn-primary">Code</a>
                <a href={demolink} target='_blank' className="btn btn-secondary">Demo</a>
            </div>
        </div>
    )

}


const Github = () => {
  return (
    
        <MacWindows>
            <div className="cards">
                {gitHubData.repositories.map((project) =>{
                    return <GitCard key ={project.id} project ={project}/>
                })}
            </div>
        </MacWindows>
    
  )
}

export default Github