import "./loader.css"
import React from 'react';

export default function loader() {
    return (
        <div>
            <p>Uploading...</p>
            <div className="loader">
                <div className="indeterminate"></div>
            </div>
        </div>
    )
}
