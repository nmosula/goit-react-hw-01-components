import propTypes from "prop-types";
import Statistic from "./Statistic";

const Statistics = ({ title = "", stats }) => {

    return <section className="statistics" >
            <h2 className="title">{title}</h2>

            <ul className="stat-list">
                {stats.map(stat => (
                    <li className="item" key={stat.id}>
                        <Statistic
                            label={stat.label}
                            percentage={stat.percentage}
                        />
                    </li>
                    
                ))}

            </ul>
        </section>
}

Statistics.propTypes = {
    title: propTypes.string,
    stats: propTypes.arrayOf(
        propTypes.shape({
            label: propTypes.string,
            percentage: propTypes.number
        })
    )
}

export default Statistics;