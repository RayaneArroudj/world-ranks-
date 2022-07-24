import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout/Layout';
import SearchInput from '../components/SearchInput/SearchInput';
import styles from '../styles/Home.module.css';
import CountriesTable from '../components/CountriesTable/CountriesTable';
import { useState } from 'react';

export default function Home({ countries }) {
  console.log(countries);

  const [keyword, setKeyword] = useState('');

  const filteredCountries = countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion?.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <div className={styles.counts}>Found {countries.length} countries</div>

      <SearchInput
        placeholder="filter by Name, Region or SubRegion"
        onChange={onInputChange}
      />
      <CountriesTable countries={filteredCountries} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('http://restcountries.com/v3.1/all');
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
