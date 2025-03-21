export const styles = {
  productsPage: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  h1: {
    fontSize: '28px',
    marginBottom: '20px',
  },
  searchQuery: {
    marginBottom: '20px',
  },
  layout: {
    display: 'flex',
    gap: '20px',
  },
  filters: {
    width: '250px',
  },
  productList: {
    flex: 1,
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '20px',
  },
  paginationButton: {
    backgroundColor: '#f0f0f0',
    border: 'none',
    padding: '8px 12px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  activePage: {
    backgroundColor: 'rgb(118, 150, 62)',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  '@media (max-width: 768px)': {
    layout: {
      flexDirection: 'column',
    },
    filters: {
      width: '100%',
    },
  },
};