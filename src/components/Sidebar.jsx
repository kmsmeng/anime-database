import React, { useEffect } from 'react';

function Sidebar(props) {
    
    const topAnime = props.topAnime;
    const topManga = props.topManga;

    // console.log(topManga)

    return (
        <aside>
            <nav>
                <h3>Top Anime</h3>
                {topAnime.map((anime) => <a key={anime.mal_id} href={anime.url} target='_blank' rel='noreferrer'>{anime.title}</a>)}
                {/*
                <a href="#" target='_blank' rel='noreferrer'>Naruto</a>
                <a href="#" target='_blank' rel='noreferrer'>Attack On titan</a>
                <a href="#" target='_blank' rel='noreferrer'>Cyberpunk:Edgerunners</a>
                <a href="#" target='_blank' rel='noreferrer'>Horimiya</a>
                */}

                <h3>Top Manga</h3>
                {topManga.map((manga) => <a key={manga.mal_id} href={manga.url} target='_blank' rel='noreferrer'>{manga.title}</a>)}
            </nav>
        </aside>
    );
}

export default Sidebar;