import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import twitchService from "../Services/twitchService";

const VideoDetail = () => {
    const { streamId } = useParams(); // Utiliser useParams pour obtenir les paramètres d'URL

    const [stream, setStream] = useState({}); // Utiliser {} comme état initial pour l'objet stream

    useEffect(() => {
        const fetchStreamById = async () => {
            try {
                let response = await twitchService.getLiveStreamById(streamId); // Utiliser getLiveStreamById avec le paramètre streamId
                setStream(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchStreamById();
    }, [streamId]); // Mettre à jour l'effet lorsque streamId change

    return (
        <div>
            <h1>{stream.title}</h1>
            <p>{stream.description}</p>
            {/* Afficher les autres détails du stream ici */}
        </div>
    );
};

export default VideoDetail;
