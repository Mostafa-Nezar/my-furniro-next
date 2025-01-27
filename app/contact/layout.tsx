export const metadata = {
    title: "posts",
  };
  
  export default function Layout({ children }) {
    return (
      <div>
        <h2>posts page</h2>
        {children}
      </div>
    );
  }
  