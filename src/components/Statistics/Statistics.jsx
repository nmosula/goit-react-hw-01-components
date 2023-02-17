import propTypes from "prop-types";
import {
  Container,
  Title,
  List,
  ListItem,
  Label,
  Percentage,
} from './Statistics.styled';

const Statistics = ({ title = "", stats }) => {
    return (
        <Container>
            {title.length > 0 && (
                    <Title>{title}</Title>
            )}
                    <List>
                        {stats.map(stat => (
                            <ListItem key={stat.id}>
                                <Label>{stat.label}</Label>
                                <Percentage>{stat.percentage}%</Percentage>
                            </ListItem>      
                        ))}
                    </List>
        </Container>
    )
}

Statistics.propTypes = {
    title: propTypes.string,
    stats: propTypes.arrayOf(
        propTypes.shape({
            label: propTypes.string.isRequired,
            percentage: propTypes.number.isRequired
        })
    ).isRequired
}

export default Statistics;