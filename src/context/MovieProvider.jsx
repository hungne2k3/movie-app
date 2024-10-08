import { createContext, useState } from "react";
import YouTube from "react-youtube";
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const MovieContext = createContext();

const opts = {
    height: '390',
    with: '640',
    playerVars: {
        autoplay: 1
    },
};

function MovieProvider({ children }) {
    // mo youtube video
    const [modalIsOpen, setModalIsOpen] = useState(false);
    // lay key cua video do
    const [trailerUrl, setTrailerUrl] = useState("");

    // ham click mo trailer
    const handleTrailer = async (id) => {
        setTrailerUrl('');
        try {
            const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_APP_KEY}`
                }
            };

            const movieKey = await fetch(url, options);
            const data = await movieKey.json();
            setTrailerUrl(data.results[0].key);
            setModalIsOpen(true);

        } catch (error) {
            console.log(error);
            setModalIsOpen(false);

        }
    }

    return (
        <MovieContext.Provider value={{ handleTrailer }}>
            {children}

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: {
                        position: 'fixed',
                        zIndex: 9999,
                    },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                    },
                }}
                contentLabel="Example Modal"
            >
                <YouTube videoId={trailerUrl} opts={opts} />
            </Modal>
        </MovieContext.Provider>
    )
}

MovieProvider.propTypes = {
    children: PropTypes.node,
}

export { MovieProvider, MovieContext }