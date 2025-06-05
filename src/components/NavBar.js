export default function NavBar() {
  const headerStyle = {
    width: "100%",
    background: "linear-gradient(to right, #4facfe, #00f2fe)",
    padding: "16px 0",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
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
    fontSize: "26px",
    fontWeight: "700",
    color: "#ffffff",
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: "1px",
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>New App</h1>
      </div>
    </header>
  );
}
