import React from 'react';
import './Main.css';
import { mainContent } from '../../config/i18n';

const Main = (translate) => {
    return (
        <>
            {mainContent.map((link) => {
                link = translate.data ? link.fr : link.en;
                return (
                    link.map((item) => {
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