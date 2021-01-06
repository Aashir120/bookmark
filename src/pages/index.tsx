import React,{useEffect,useState} from "react"
import LinkList from '../components/LinkList';
import LinkForm from '../components/LinkForm';
import 'bootstrap/dist/css/bootstrap.css';
import './main.css';
import {Container,Row,Col} from 'react-bootstrap';

const IndexPage = () => {
    const [links, setLinks] = useState([]);
    const loadLinks = async () => {
        try {
            const res = await fetch('/.netlify/functions/getLinks');
            const links = await res.json();
            setLinks(links);
            console.log(links)
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        loadLinks();
    }, []);
    
  return (
      <div>
    <div className="py-5 landing">
    <Container>
    <Row>
      <Col sm={8}>
      <h1 className="text">Bookmarking Application</h1>
      <p className="text-p">This App will let you save your bookmarks here for free</p>
      </Col>
      <Col sm={4}>
      <LinkForm refreshLinks={loadLinks} />
      </Col>
    </Row>
  </Container>
  </div>
  <div className="linkslist">
      <Container className="container-sm">
  <LinkList links={links} refreshLinks={loadLinks} />
  </Container>
  </div>
  <footer className="footer">
      Created By | @Syed Aashir Majeed
  </footer>
  </div>
  )
}

export default IndexPage
