import React, { useState } from 'react';

const testComponent = _ => {
    const [h1Message, setH1Message] = useState('default');
    return (
        <div>
            <h1>{h1Message}</h1>
            <button>Change Message</button>
        </div>
    )
}