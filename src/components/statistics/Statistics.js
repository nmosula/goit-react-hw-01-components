import propTypes from "prop-types";
// import Statistic from "./Statistic";

const Statistics = ({ title = "", stats }) => {

    return (
        <section className="statistics" >
            {title.length > 0 && (
                    <h2 className="title">{title}</h2>
            )}

                    <ul className="stat-list">
                        {stats.map(stat => (
                            <li className="item" key={stat.id}>
                                {/* <Statistic
                                    label={stat.label}
                                    percentage={stat.percentage}
                                /> */}
                                <span className="label">{stat.label}</span>
                                <span className="percentage">{stat.percentage}%</span>
                            </li>
                    
                        ))}

                    </ul>
        </section>
    )
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