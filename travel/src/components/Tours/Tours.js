import data from '../data/db.json';

function Tours(props) {

    return (
        <>
            {data.map((travel,index) => {
                return (
                    // <div>
                    //     <img src={travel.image} alt={travel.name} />
                    //     <h3>Name : {travel.name}</h3>
                    // </div>
                  <Tour key={index} />
                    );
            })}
        </>
    );
}

export default Tours;