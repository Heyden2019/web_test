import React, {FC} from 'react';
import preloader from "./preloader.svg";

const Preloader: FC = () => {
    return (
        <div style={ { textAlign: 'center' } }>
            <img src={preloader} alt="preloader"/>
        </div>
    )
}

export default Preloader;