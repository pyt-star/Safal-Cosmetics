import "./Stats.css";

import {
    FaAward,
    FaRocket,
    FaGlobeAsia,
    FaShieldAlt
} from "react-icons/fa";

const stats = [

    {
        icon: <FaAward />,
        number: "20+",
        title: "Years Experience"
    },

    {
        icon: <FaRocket />,
        number: "30",
        title: "Days to Launch"
    },

    {
        icon: <FaGlobeAsia />,
        number: "7+",
        title: "Countries Served"
    },

    {
        icon: <FaShieldAlt />,
        number: "100%",
        title: "Quality Inspection"
    }

];

function Stats() {

    return (

        <section className="stats">

            <div className="stats-container">

                {
                    stats.map((item,index)=>(

                        <div className="stat-card" key={index}>

                            <div className="icon">

                                {item.icon}

                            </div>

                            <h2>{item.number}</h2>

                            <p>{item.title}</p>

                        </div>

                    ))
                }

            </div>

        </section>

    );

}

export default Stats;