const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-background px-6">
    <div className="text-center">
      <p className="text-accent text-xs tracking-[0.3em] uppercase mb-3">BVHome Furnitures</p>
      <h1 className="font-display text-5xl font-semibold mb-3">404</h1>
      <p className="text-muted-foreground mb-6">The page you requested could not be found.</p>
      <a
        href="/"
        className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
      >
        Back to Home
      </a>
    </div>
  </div>
);

export default NotFound;
