import React, { Fragment, useState } from 'react';

const useCoin = (label, initialState, options ) => {

    // Custom hook state
    const [ state, updateState ] = useState(initialState);

    const Select = () => (
        <Fragment>
            <label>{label}</label>
            <select
                onChange={e => updateState(e.target.value)}
                value={state}
            >
                <option value="">-- Select --</option>
                {options.map(option => (
                    <option 
                        key={option.code} 
                        value={option.code}
                    >
                        {option.name}
                    </option>
                ))}
            </select>
        </Fragment>
    )

    // Return state, interface and func to modify state
    return [state, Select, updateState];
}

export default useCoin;