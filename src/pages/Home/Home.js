import React from "react";
import './Home.css'

function Home() {
    return (
        <>
            <div className="home-list-title-container">
                <p className="home-list-title-item">
                    Akira
                </p>
            </div>

            <div className="home-movie-detail-container">
                <div className="home-movie-detail-poster">
                    <img src="../assets/akira.jpg" alt="akira-movie-poster"/>
                </div>
                <div className="home-movie-detail-text">
                    <div className="home-movie-detail-header">
                        VOICES OF: Mitsuo Iwara, Nozomu Sasaki, Mami Koyama, Taro Ishida, Jimmy Flanders, Drew
                        Thomas, Barbara Larsen, Lewis Lemay, Stanley Gurd Jr.

                        1988, 124 Minutes, Directed by: Katsuhiro Otomo
                    </div>
                    <div className="home-movie-detail-desc">
                        Set in 2019, the film richly imagines the new metropolis of Neo-Tokyo. Two disaffected
                        orphan teenagers--slight, resentful Tetsuo and confident, breezy Kanada--run with a biker
                        gang, but trouble grows when Tetsuo start to resent the way Kanada always has to rescue him.
                        Meanwhile, a group of scientists, military men, and politicians wonder what to do with a
                        collection of withered children who possess enormous psychic powers, especially the
                        mysterious, rarely seen Akira, whose awakening might well have caused the end of the old
                        world. Tetsuo is visited by the children, who trigger the growth of psychic and physical
                        powers that might make him a superman or a supermonster.
                    </div>
                    <div className="get-ticket">
                        Get me a ticket!!
                    </div>
                    <div className="put-on-wishlist">
                        Put this movie on my wishlist
                    </div>
                </div>
            </div>

        </>
    )

}

export default Home;