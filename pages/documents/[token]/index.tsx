function Documents({ token }) {
  return <div>Token: {token}</div>;
}

Documents.getInitialProps = ({ query }) => {
  return { token: query.token };
};

export default Documents;
