

function GetStatus() {

    async function returnStatus() {
        const res = await fetch("http://localhost:3000/api/status")
        const message = await res.json();
        console.log(message);
    }


    return (
        <div>
            <br /><br />
            <button onClick={returnStatus}>get status</button>
        </div>
    )
}

export default GetStatus
