import { createContext, useState, useRef } from "react";

const BaseContext = createContext({
    filter: "",
    updateFilter: (dataMeetup) => { },
    getPrevFilter: () => { },
});

export function BaseContextProvider(props) {
    const prevData = useRef();
    const [fillter, setFillter] = useState({
        page: 0
    });
    prevData.current = fillter;
    //-----------------------------------------
    const updateFilterHandler = (dataMeetup) => {
        const object = {
            fillter: dataMeetup.fillter,
        };
        setFillter(object);
    }
    const getPrevFilterHandler = () => {
        return prevData.current;
    }
    //-----------------------------------------
    const context = {
        fillter: fillter,
        updateFilter: updateFilterHandler,
        getPrevFilter: getPrevFilterHandler,
    };
    return (
        <BaseContext.Provider value={context}>
            {props.children}
        </BaseContext.Provider>
    );
}
export default BaseContext;