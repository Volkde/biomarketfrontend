import { CSSProperties } from 'react';

const styles: Record<string, CSSProperties> = {
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '40px auto',
    padding: '0 20px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    margin: '0 0 30px 0',
    color: '#333',
    textAlign: 'center',
  },
  filterContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '30px',
    flexWrap: 'wrap',
  },
  filterButton: {
    padding: '10px 20px',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    color: '#666',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  activeFilterButton: {
    color: 'rgb(118, 150, 62)',
    fontWeight: 'bold',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  },
  gridItem: {
    width: '100%',
  },
};

export default styles;
