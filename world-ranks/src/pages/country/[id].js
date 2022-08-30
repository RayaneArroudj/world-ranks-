/* eslint-disable @next/next/no-img-element */
import Layout from '../../components/Layout/Layout';
import styles from './country.module.css';

const Country = ({ country }) => {
  console.log(country);
  return (
    <>
      {country.map((country, id) => {
        return (
          <Layout key={id} title={country.name.common}>
            <div className={styles.container}>
              <div className={styles.container_left}>
                <div className={styles.overview_panel}>
                  <img src={country.flags.png} alt={country.name.common}></img>
                  <h1 className={styles.overview_name}>
                    {country.name.common}
                  </h1>
                  <div className={styles.overview_region}>{country.region}</div>

                  <div className={styles.overview_numbers}>
                    <div className={styles.overview_population}>
                      <div className={styles.overview_value}>
                        {country.population}
                      </div>
                      <div className={styles.overview_label}>Population</div>
                    </div>
                    <div className={styles.overview_area}>
                      <div className={styles.overview_value}>
                        {country.area}
                      </div>
                      <div className={styles.overview_label}>Area</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.container_right}>
                <div className={styles.details_panel}>
                  <h4 className={styles.details_panel_heading}>Details</h4>

                  <div className={styles.details_panel_row}>
                    <div className={styles.details_panel_label}>Capital</div>
                    <div className={styles.details_panel_value}>
                      {country.capital}
                    </div>
                  </div>

                  <div className={styles.details_panel_row}>
                    <div className={styles.details_panel_label}>Languages</div>
                    <div className={styles.details_panel_value}>
                      {country.languages.spa}
                    </div>
                  </div>

                  <div className={styles.details_panel_row}>
                    <div className={styles.details_panel_label}>Currencies</div>
                    <div className={styles.details_panel_value}>
                      {country.currencies.CLP.name}{' '}
                      {country.currencies.CLP.symbol}
                    </div>
                  </div>
                  <div className={styles.details_panel_row}>
                    <div className={styles.details_panel_label}>
                      Native name
                    </div>
                    <div className={styles.details_panel_value}>
                      {country.name.nativeName.spa.official}
                    </div>
                  </div>
                  <div className={styles.details_panel_row}>
                    <div className={styles.details_panel_label}>Gini</div>
                    <div className={styles.details_panel_value}>
                      {country.gini[2017]}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        );
      })}
    </>
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
