import css from '../Statistics.module.css';


export const Statistics = ({title, stats}) => {
    return <section className={css.statistics}>
            <h2 className={css.title}>{ title}</h2>

            <ul className={css.statList}>
                {stats.map(stat => {
                    return (
                        <Item
                            key={stat.id}
                            status={stat}
                        />
                    )})
                }
               
            </ul>
        </section>
}

const Item = ({ status }) => {
    return <li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
                <span className={css.label}>{ status.label}</span>
                <span className={css.percentage}>{ status.percentage}%</span>
            </li> 
}

const getRandomHexColor = () =>  {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
