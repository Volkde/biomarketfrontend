export const styles = {
  container: {
    width: '100%',
    padding: '20px 0',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '25px',
    width: '100%',
    justifyContent: 'center',
  },
  noProducts: {
    textAlign: 'center' as const,
    fontSize: '18px',
    color: '#666',
    margin: '40px 0',
    padding: '20px',
    backgroundColor: 'rgba(47, 90, 110, 0.05)',
    borderRadius: '8px',
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 0',
    width: '100%',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#2f5a6e',
    marginBottom: '20px',
    textAlign: 'center' as const,
  },
};