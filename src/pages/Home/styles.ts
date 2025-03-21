export const styles = {
  home: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  banner: {
    backgroundColor: '#f0f0f0',
    padding: '40px',
    textAlign: 'center' as const,
    borderRadius: '8px',
    marginBottom: '40px',
  },
  bannerTitle: {
    fontSize: '36px',
    marginBottom: '10px',
  },
  bannerText: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '20px',
  },
  shopButton: {
    backgroundColor: 'rgb(118, 150, 62)',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '20px',
    textDecoration: 'none',
    fontSize: '16px',
    ':hover': {
      backgroundColor: 'rgb(100, 128, 53)',
    },
  },
  sectionTitle: {
    fontSize: '24px',
    marginBottom: '20px',
  },
};