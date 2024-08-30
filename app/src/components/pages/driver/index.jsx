import {useState, useEffect} from "react";

function Driver() {

    const [allDriver, setAllDriver] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const driver = await (await fetch("http://localhost:9000/api/v1/driver")).json();
                setAllDriver(driver.datas);
            } catch(error) {
                throw Error(error);
            }
        }
        getData();
    }, []);

    return(
        <>
            {
                !allDriver ? (
                    <p>Chargement</p>
                ) : (
                    allDriver.map((datas) => 
                        <article>
                            <h4>{datas.label}</h4>
                            <p>{datas.nationality}</p>
                            <p>Ecurie: {datas.team}</p>
                        </article>
                    )
                )
            }
        </>
    )
}

export default Driver;