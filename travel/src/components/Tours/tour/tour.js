


function Tour(props) {

    return (
        <>
            {data.map((travel) => {
                return (
                    <div>
                        <img src={travel.image} alt={travel.name} />
                        <h3>Name : {travel.name}</h3>
                    </div>
                  
                    );
            })}
        </>
    );
}

export default Tour;