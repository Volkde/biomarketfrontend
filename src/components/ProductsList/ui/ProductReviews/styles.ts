export const styles = {
  reviews: {
    marginTop: "20px",
  },
  reviewList: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 20px 0",
  },
  reviewItem: {
    borderBottom: "1px solid #e0e0e0",
    padding: "15px 0",
  },
  reviewHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "5px",
  },
  user: {
    fontWeight: "bold",
  },
  rating: {
    color: "#ff9800",
  },
  comment: {
    margin: "5px 0",
    color: "#555",
  },
  date: {
    fontSize: "12px",
    color: "#888",
  },
  reviewForm: {
    marginTop: "20px",
  },
  formTitle: {
    fontSize: "20px",
    marginBottom: "15px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: 500,
  },
  select: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
    height: "100px",
    resize: "vertical" as const,
  },
  submitButton: {
    backgroundColor: "rgb(118, 150, 62)",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "16px",
    ":hover": {
      backgroundColor: "rgb(100, 128, 53)",
    },
    ":disabled": {
      backgroundColor: "#ccc",
      cursor: "not-allowed",
    },
  },
};
