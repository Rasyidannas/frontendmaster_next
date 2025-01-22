import styles from './style.module.css'

const DocsIdPage = ({ params }) => {
  return <div className={styles.title}>id { params.id }</div>
}

export default DocsIdPage
