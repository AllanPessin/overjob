import styles from '../../../styles/components/Filters.module.css'

function Filters() {
  return (
    <div className={styles.filters}>
      <h4 className={styles.title}>Categoria</h4>
      <ul className={styles.filtersList}>
        <li>
          <input type="checkbox" name="teste" label="checkbox" placeholder="categoria">
          </input>
          <label>SP</label>
        </li>
      </ul>
    </div>
  )
}

export default Filters