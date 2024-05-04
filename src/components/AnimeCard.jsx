import React from 'react'

function AnimeCard(props) {

    const anime = props.anime

  return (
    <article className="anime-card">
        <a href={anime.url} target='_blank' rel='noreferrer'>
            <figure>
                <img src={anime.images.jpg.image_url} alt='Anime Image'/>
            </figure>
            <h3>{anime.title}</h3>
        </a>
    </article>
  )
}

export default AnimeCard