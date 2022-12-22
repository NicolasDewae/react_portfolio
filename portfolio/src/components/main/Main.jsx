import React from 'react';
import './Main.css';
import { mainContent } from '../../data/i18n';

const Main = (translate) => {
    return (
        <>
            {mainContent.map((text) => {
                text = translate.data ? text.fr : text.en;
                return (
                    text.map((item) => {
                        return (
                            <div className="main">
                                <h1>{item.message}</h1>
                            </div>
                        )
                    })
                )
            })}
        </>
    );
}

export default Main;