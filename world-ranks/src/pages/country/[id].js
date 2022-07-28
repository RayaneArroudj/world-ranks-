/* eslint-disable @next/next/no-img-element */
import Layout from '../../components/Layout/Layout';
import styles from './country.module.css';

const Country = ({ country }) => {
  console.log(country);
  return (
    <div>
      {country.map((country, id) => {
        return (
          <Layout key={id} title={country.name.common}>
            <div className={styles.overview_panel}>
              <img src={country.flags.png} alt={country.name.common} />
              <h1 className={styles.overview_name}>{country.name.common}</h1>
              <div className={styles.overview_region}>{country.region}</div>

              <div className={styles.overview_numbers}>
                <div className={styles.overview_population}>
                  <div className={styles.overview_value}>
                    {country.population}
                  </div>
                  <div className={styles.overview_label}>Population</div>
                </div>
                <div className={styles.overview_area}>
                  <div className={styles.overview_value}>{country.area}</div>
                  <div className={styles.overview_label}>Area</div>
                </div>
              </div>
            </div>
          </Layout>
        );
      })}
    </div>
  );
};

export default Country;

export const getServerSideProps = async ({ query: { id } }) => {
  const res = await fetch(`http://restcountries.com/v3.1/alpha/${id}`);

  const country = await res.json();

  return {
    props: { country },
  };
};
