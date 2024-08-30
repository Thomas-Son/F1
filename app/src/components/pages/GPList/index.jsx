import {useState, useEffect} from "react"

function GPList() {

    const [GPList, setGPList] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const GP = await (await fetch("http://localhost:9000/api/v1/GPList")).json();
                setGPList(GP.datas);
            } catch (error) {
                throw Error(error);
            }
        }
        getData();
    }, []);

    return (
        <>
            <h2>Chanpionnat 2024</h2>
            {
                !GPList ? (
                    <p>Chargement</p>
                ) : (
                    GPList.map((datas) =>
                        <article>
                            <h4>{datas.label}</h4>
                            <p>Circuit: {datas.circuit} // Date: {new Date(datas.date).toLocaleDateString()}</p>
                        </article>
                    )
                )
            }
        </>
    )

}

export default GPList;