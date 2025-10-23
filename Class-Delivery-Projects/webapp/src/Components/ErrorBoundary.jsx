import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error, info)
    console.log(error.info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", textAlign: "center", color: "red" }}>
          <h2>Something went wrong 😢</h2>
          <p>Please try again later.</p>
          {/* <p>{this.props.error.info}</p> */}
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
