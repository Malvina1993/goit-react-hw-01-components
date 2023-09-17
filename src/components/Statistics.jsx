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
    return <li className={css.item} >
                <span className={css.label}>{ status.label}</span>
                <span className={css.percentage}>{ status.percentage}%</span>
            </li> 
}
