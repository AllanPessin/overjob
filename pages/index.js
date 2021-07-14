import axios from 'axios'
import { useState } from 'react'
import Card from '../src/components/Cards'
import Filters from '../src/components/Filters'
import Header from '../src/components/Header'
import styles from '../styles/pages/Home.module.css'


export default function Home({ jobs }) {
  console.log(jobs)
  const [filters, setFilters] = useState({
    Estado: [],
    Modalidade: [],
    Nivel: [],
    Regime: [],
    Categoria: []
  })

  const [jobsList, setJobsList] = useState(jobs)

  const [activeFilters, setActiveFilters] = useState({})

  return (
    <div className={styles.structure}>
      <Header />
      <div className={styles.cardContainer}>
        <Filters />
        <Card />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const { data: { erro, jobs=[] } } = await axios.get('http://localhost:3000/api/jobs')
  
  return {
    props: {
      jobs: jobs
    },
    revalidate: 1000
  }
}