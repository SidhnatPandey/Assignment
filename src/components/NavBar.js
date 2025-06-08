export default function NavBar() {
  const headerStyle = {
    width: "100%",
    backgroundColor: "#2563eb",
    padding: "16px 0",
    boxShadow: "0 2px 8px rgba(37, 99, 235, 0.4)",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
  };

  const containerStyle = {
    width: "90%",
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "700",
    color: "#f9fafb",
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: "1.5px",
    textShadow: "0 1px 2px rgba(0,0,0,0.3)",
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>New App</h1>
      </div>
    </header>
  );
}
