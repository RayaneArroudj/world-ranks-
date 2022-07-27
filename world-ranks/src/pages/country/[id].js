import Layout from '../../components/Layout/Layout';

const Country = ({ country }) => {
  console.log(country);
  return <Layout title={country.name}>{country.name}</Layout>;
};

export default Country;

export const getServerSideProps = async ({ query: { id } }) => {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);

  const country = await res.json();

  return {
    props: { country },
  };
};
