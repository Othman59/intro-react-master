import React, { useEffect, useState } from 'react';
import Video from '../Components/Video';
import twitchService from '../Services/twitchService';
const Accueil = () => {

    const [videos, setVideos] = useState([]);

    const fetchVideos = async () => {
        try {
            let response = await twitchService.getLiveStreams ;
            setVideos(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchVideos();
    }, []);

    return (
        <>
            <div>
                <h1 className='mt-3 mb-5 text-center text-danger'>Actuellement en stream</h1>
            </div>
            <div className='d-flex justify-content-around flex-wrap'>
                {videos.map((video, index) => (
                    <Video key={index} video={video} width= {300} height= {200} />
                ))}
            </div>
        </>
    );
};

export default Accueil;