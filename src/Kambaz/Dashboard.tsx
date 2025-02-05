import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    
    <div id="wd-dashboard">
    <h1 id="wd-dashboard-title">Dashboard</h1> 
    <hr />
    <h2 id="wd-dashboard-published">Published Courses (12)</h2> 
    <hr />

    <div id="wd-dashboard-courses">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        
        <Col className="wd-dashboard-course">
          <Card>
            <Link to="/Kambaz/Courses/1227/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/luck.jpg" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">LUCK1227</Card.Title>
                <Card.Text className="wd-dashboard-course-description">The class of pure luck</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course">
          <Card>
            <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/calm.jpg" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">CALM1234</Card.Title>
                <Card.Text className="wd-dashboard-course-description">Chill out breh</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course">
          <Card>
            <Link to="/Kambaz/Courses/7891/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/silly.jpg" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">SILY7891</Card.Title>
                <Card.Text className="wd-dashboard-course-description">Master of sillyness</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course">
          <Card>
            <Link to="/Kambaz/Courses/4545/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/partying.jpg" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">YAY4545</Card.Title>
                <Card.Text className="wd-dashboard-course-description">Intro to Partying!</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course">
          <Card>
            <Link to="/Kambaz/Courses/1010/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/bob.jpg" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">BOB1010</Card.Title>
                <Card.Text className="wd-dashboard-course-description">Intro to Bob Dylan</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course">
          <Card>
            <Link to="/Kambaz/Courses/1122/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/clashofclans.png" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">CLAN1122</Card.Title>
                <Card.Text className="wd-dashboard-course-description">Clash of Clans Basics</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course">
          <Card>
            <Link to="/Kambaz/Courses/3500/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/moon.jpg" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">MOON3500</Card.Title>
                <Card.Text className="wd-dashboard-course-description">The Moon and Life on Mars</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

      </Row>
    </div>
  </div>
);}
