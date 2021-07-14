import styles from '../../../styles/components/Header.module.css'
import Link from 'next/link'
import Image from 'next/image'


function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link
          href="/"
          passHref
        >
          <a href="">
            <Image
              src="/images/overjob.svg"
              width="200"
              height="40"
              alt="logo do overjob"
            />
          </a>
        </Link>
        <Link
          href="/description/1"
          passHref
        >
          <a><button className={styles.publishButton}>Cadastrar Vaga</button></a>
        </Link>
      </div>
      <div className={styles.search}>
        <div className={styles.searchFileds}>
          <input type="text" placeholder="Digite um cargo"></input>
          <input type="text" placeholder="Digite uma cidade"></input>
          <button><Image src="/images/lupa.svg" width="30" height="10" alt="icone de pesquisa" /></button>
        </div>
      </div>
    </div>
  )
}

export default Header