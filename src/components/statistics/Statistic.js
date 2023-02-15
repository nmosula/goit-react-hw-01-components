import propTypes from "prop-types";

const Statistic = ({ label, percentage }) => {
    return (
        <div>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
        </div>
    )
}

export default Statistic;

Statistic.propTypes = {
    label: propTypes.string,
    percentage: propTypes.number
}