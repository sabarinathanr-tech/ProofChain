import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
export default function Page() {
  return (
    <main>
      <section className="section" style={{background:'white'}}>
        <Navbar />
        <div className="container" style={{paddingTop:64}}>
          <p className="eyebrow">Contact</p>
          <h1>Talk about shipment verification, disputes, or AWS deployment.</h1>
          <p className="metric" style={{ maxWidth: 720 }}>Use this page as the production contact surface for operations teams, suppliers, warehouses, and technical reviewers.</p>
          <div className="split-grid" style={{ marginTop: 24 }}>
            <form className="card">
              <h2>Request a walkthrough</h2>
              <label className="field">Name<input placeholder="Your name" /></label>
              <label className="field">Work email<input type="email" placeholder="you@company.com" /></label>
              <label className="field">Company<input placeholder="Company name" /></label>
              <label className="field">Message<textarea placeholder="Tell us about shipment volume, vendors, warehouses, or database setup needs." /></label>
              <button className="button" type="button">Send request</button>
            </form>
            <div className="card">
              <h2>Project details</h2>
              <table className="table"><tbody>
                <tr><td>Email</td><td>sabarinathanr.tech@gmail.com</td></tr>
                <tr><td>GitHub</td><td>sabarinathanr-tech</td></tr>
                <tr><td>Deployment</td><td>Vercel production</td></tr>
                <tr><td>Database target</td><td>AWS RDS PostgreSQL</td></tr>
                <tr><td>Storage target</td><td>AWS S3 documents and photos</td></tr>
              </tbody></table>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
