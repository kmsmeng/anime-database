import { useEffect, useState } from "react";
import Header from "./components/Header"
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {

	const [topAnime, setTopAnime] = useState([]);
    const [topManga, setTopManga] = useState([]);
    const [animeList, setAnimeList] = useState([]);
    const [search, setSearch] = useState('');

    const getTopAnime = async () =>{
        const temp = await fetch('https://api.jikan.moe/v4/top/anime');
        var topAnimeFromApi = await temp.json(); 

        const topAnime = topAnimeFromApi.data.slice(0, 10);  
        //(0, X) the number of X is equal to number of anime that will be shown on 'Top anime' section 
        //of the website with the maximum being 25(per page request i guess)
        setTopAnime(topAnime);       
    }  

    const getTopManga = async () =>{
        const temp = await fetch('https://api.jikan.moe/v4/top/manga');
        var topMangaFromApi = await temp.json(); 
        
        const topManga = topMangaFromApi.data.slice(0, 10);  
        setTopManga(topManga);
    } 

    useEffect(() => {
        getTopAnime();
        getTopManga();
    }, [])

    const HandleSearch = (e) => {
        e.preventDefault();

        FetchAnime(search);
    }

    const FetchAnime = async (query) => {
        //const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=asc&limit=10`);
        //const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=asc&limit=10`);
        //const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&cat=all&limit=10`);
        const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&cat=all`);
        var returnedAnimeSearch = await temp.json();

        console.log(returnedAnimeSearch.data);
        setAnimeList(returnedAnimeSearch.data);
    }


    return (
        <>
            <Header />
            
            <div className="content-wrap">
                <Sidebar topAnime={topAnime} topManga={topManga}/>
                <MainContent 
                    HandleSearch={HandleSearch} 
                    search={search} 
                    setSearch={setSearch} 
                    animeList={animeList}/>
            </div>

            
        </>
    )
}

export default App
